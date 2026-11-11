// inspect-shot.ts — decode a screenshot, locate ink in the header strip, ASCII-zoom the logo
// usage: bun inspect-shot.ts <shot.png> [stripH]
import { readFile } from "node:fs/promises";

const [, , file, stripHArg, zxArg, zwArg, zyArg, zhArg] = process.argv;
if (!file) process.exit(1);
let stripH = Number(stripHArg ?? 76);

const buf = new Uint8Array(await readFile(file));
const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
let width = 0, height = 0, bitDepth = 0, colorType = 0, interlace = 0;
const idat: Uint8Array[] = [];
let plte: Uint8Array | null = null;
let trns: Uint8Array | null = null;
let off = 8;
while (off < buf.length) {
  const len = dv.getUint32(off);
  const type = String.fromCharCode(buf[off + 4], buf[off + 5], buf[off + 6], buf[off + 7]);
  const data = buf.subarray(off + 8, off + 8 + len);
  if (type === "IHDR") {
    width = dv.getUint32(off + 8); height = dv.getUint32(off + 12);
    bitDepth = buf[off + 16]; colorType = buf[off + 17]; interlace = buf[off + 20];
  } else if (type === "IDAT") idat.push(data);
  else if (type === "PLTE") plte = data;
  else if (type === "tRNS") trns = data;
  else if (type === "IEND") break;
  off += 12 + len;
}
if (bitDepth !== 8 || interlace !== 0) throw new Error(`depth ${bitDepth} interlace ${interlace}`);
stripH = Math.min(stripH, height);
const channels: Record<number, number> = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 };
const ch = channels[colorType];
let total = 0; for (const d of idat) total += d.length;
const concat = new Uint8Array(total);
{ let p = 0; for (const d of idat) { concat.set(d, p); p += d.length; } }
const raw = new Uint8Array(
  await new Response(new Blob([concat]).stream().pipeThrough(new DecompressionStream("deflate"))).arrayBuffer(),
);
const stride = width * ch;
const out = new Uint8Array(height * stride);
let prevRow = new Uint8Array(stride);
let pos = 0;
for (let y = 0; y < height; y++) {
  const filter = raw[pos++];
  const row = out.subarray(y * stride, (y + 1) * stride);
  for (let x = 0; x < stride; x++) {
    const b0 = raw[pos + x];
    const a = x >= ch ? row[x - ch] : 0;
    const b = prevRow[x];
    const c = x >= ch ? prevRow[x - ch] : 0;
    let v: number;
    if (filter === 0) v = b0;
    else if (filter === 1) v = b0 + a;
    else if (filter === 2) v = b0 + b;
    else if (filter === 3) v = b0 + ((a + b) >> 1);
    else if (filter === 4) {
      const p = a + b - c;
      const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
      v = b0 + (pa <= pb && pa <= pc ? a : pb <= pc ? b : c);
    } else throw new Error(`filter ${filter}`);
    row[x] = v & 0xff;
  }
  prevRow = row; pos += stride;
}
const lum = (x: number, y: number) => {
  const i = y * stride + x * ch;
  if (colorType === 3) {
    const idx = out[i];
    const r = plte ? plte[idx * 3] : 0, g = plte ? plte[idx * 3 + 1] : 0, b = plte ? plte[idx * 3 + 2] : 0;
    return 0.299 * r + 0.587 * g + 0.114 * b;
  }
  if (colorType === 4 || colorType === 0) return out[i];
  return 0.299 * out[i] + 0.587 * out[i + 1] + 0.114 * out[i + 2];
};

// background = mode of luminance in the strip (rounded to 8)
const counts = new Map<number, number>();
for (let y = 0; y < stripH; y++)
  for (let x = 0; x < width; x++) {
    const k = Math.round(lum(x, y) / 8);
    counts.set(k, (counts.get(k) ?? 0) + 1);
  }
const bg = [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0] * 8;
console.log(`${file} ${width}x${height}  bgLum≈${bg}`);

// ink profile: count pixels far from bg per 20px bucket
const buckets: string[] = [];
let best = { x: 0, n: 0 };
for (let bx = 0; bx < width; bx += 20) {
  let n = 0;
  const xMax = Math.min(width, bx + 20);
  for (let y = 0; y < stripH; y++)
    for (let x = bx; x < xMax; x++)
      if (Math.abs(lum(x, y) - bg) > 45) n++;
  if (n > best.n) best = { x: bx, n };
  if (n > 0) buckets.push(`${bx}:${n}`);
}
console.log(`ink profile (x:px) ${buckets.join(" ")}`);
console.log(`strongest cluster at x≈${best.x} (${best.n} px)`);

// y-profile: where is the ink vertically (finds header/footer bands)
const yprof: string[] = [];
for (let by = 0; by < stripH; by += 40) {
  let n = 0;
  const yMax = Math.min(stripH, by + 40);
  for (let y = by; y < yMax; y++)
    for (let x = 0; x < width; x++)
      if (Math.abs(lum(x, y) - bg) > 45) n++;
  if (n > 0) yprof.push(`${by}:${n}`);
}
console.log(`y profile (y:px) ${yprof.join(" ")}`);

// ASCII zoom (defaults to the top-left where the nav brand lives)
const zx = Number(zxArg ?? 0), zy = Number(zyArg ?? 0), zw = Number(zwArg ?? Math.min(width, 640)), zh = Number(zhArg ?? stripH);
const cols = 160;
const rows = Math.max(4, Math.round((cols * zh) / zw / 2));
let art = "";
for (let ry = 0; ry < rows; ry++) {
  let line = "";
  for (let rx = 0; rx < cols; rx++) {
    const x0 = zx + Math.floor((rx * zw) / cols);
    const x1 = zx + Math.floor(((rx + 1) * zw) / cols);
    const y0 = zy + Math.floor((ry * zh) / rows);
    const y1 = Math.max(y0 + 1, zy + Math.floor(((ry + 1) * zh) / rows));
    let diff = 0, n = 0;
    for (let y = y0; y < y1; y++)
      for (let x = x0; x < x1; x++) { if (Math.abs(lum(x, y) - bg) > 45) diff++; n++; }
    const f = diff / n;
    line += f > 0.45 ? "#" : f > 0.2 ? "+" : f > 0.05 ? "." : " ";
  }
  art += line + "\n";
}
console.log(`--- header strip 0..${zw} x 0..${zh} (bg ${bg}) ---`);
console.log(art);
