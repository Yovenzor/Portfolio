import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Hero visual: a domestic single-line plan that plots itself on load — the
 * distribution board energises, a live serpentine busbar feeds eight circuit
 * breakers, labelled conduit runs leave the board to the PLC, socket outlets,
 * lighting and a contactor-fed motor. Drawing-sheet furniture (registration
 * marks, cable tags, PE symbol, title block) makes it read as a real
 * installation document. Line art only, inked with theme tokens so it works
 * in light and dark mode.
 */
export function HeroDiagram({ caption }: { caption?: string }) {
  const reduce = useReducedMotion();
  const ink = "var(--diagram-line)";
  const faint = "var(--diagram-faint)";
  const label = "var(--diagram-label)";
  const accent = "var(--brand)";
  const honey = "var(--signal)";

  /* The meter counts up to mains voltage once the plan is energised. */
  const [voltage, setVoltage] = useState(reduce ? 230 : 0);
  useEffect(() => {
    if (reduce) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1500, 1);
      setVoltage(Math.round(230 * (1 - (1 - p) ** 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  /* Continuous current flow along an energised conductor. */
  const flow = (delay: number) => ({
    strokeDasharray: "7 12",
    initial: { opacity: 0 },
    animate: reduce ? { opacity: 1 } : { opacity: 1, strokeDashoffset: [0, -190] },
    transition: reduce
      ? { duration: 0.4 }
      : {
          opacity: { duration: 0.5, delay: 1.9 + delay },
          strokeDashoffset: { duration: 3.2, repeat: Infinity, ease: "linear" as const },
        },
  });

  /* A single pulse travelling down the control wire (the command to -K1). */
  const pulse = (delay: number) => ({
    strokeDasharray: "5 250",
    initial: { opacity: 0 },
    animate: reduce ? { opacity: 0 } : { opacity: 1, strokeDashoffset: [0, -255] },
    transition: {
      opacity: { duration: 0.4, delay: 2.4 + delay },
      strokeDashoffset: {
        duration: 2.8,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay,
      },
    },
  });

  /* Status LED breathing. */
  const led = (delay: number) =>
    reduce
      ? {}
      : {
          animate: { opacity: [1, 0.35, 1] },
          transition: {
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay,
          },
        };

  /* Entrance choreography: elements plot in, wires draw themselves. */
  const box = {
    hidden: { opacity: 0, y: 10 },
    shown: (d: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: d, ease: [0.22, 0.61, 0.36, 1] as const },
    }),
  };
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    shown: (d: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.1, delay: d, ease: [0.22, 0.61, 0.36, 1] as const },
        opacity: { duration: 0.01, delay: d },
      },
    }),
  };

  return (
    <figure className="relative w-full" aria-label={caption}>
      <div className="relative overflow-hidden rounded-2xl border border-line bg-card p-5 shadow-2xl shadow-black/10 sm:p-7">
        <div className="tech-grid-fine pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div
          className="orb orb-coral pointer-events-none absolute -left-12 -top-12 size-44 opacity-50"
          aria-hidden="true"
        />
        <div
          className="orb orb-honey pointer-events-none absolute -right-6 bottom-0 size-36 opacity-40"
          aria-hidden="true"
        />
        <svg
          viewBox="0 0 580 470"
          className="relative w-full"
          role="img"
          aria-label={caption ?? undefined}          >
            <defs>
              <filter id="yd-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.4" />
              </filter>
            </defs>            <motion.g
              initial={reduce ? "shown" : "hidden"}
              animate="shown"
              style={{ transformBox: "fill-box" }}
            >
              {/* soft energy halo behind the live bus and conduit */}
              <motion.g variants={box} custom={0.95}>
                <path
                  d="M61 150 V174 H240 V262 H61"
                  fill="none"
                  stroke={accent}
                  strokeWidth="7"
                  opacity="0.2"
                  filter="url(#yd-glow)"
                />
                <path
                  d="M240 174 H296 Q308 174 308 162 V108 Q308 96 320 96 H348"
                  fill="none"
                  stroke={accent}
                  strokeWidth="6"
                  opacity="0.2"
                  filter="url(#yd-glow)"
                />
              </motion.g>
            {/* ── distribution board enclosure ─────────────────── */}
            <motion.g variants={box} custom={0.15}>
              <rect
                x="22"
                y="38"
                width="240"
                height="342"
                rx="16"
                fill="none"
                stroke={ink}
                strokeWidth="1.6"
              />
              {[
                [34, 54],
                [250, 54],
                [34, 364],
                [250, 364],
              ].map(([cx, cy]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.6" fill="none" stroke={faint} strokeWidth="1.2" />
              ))}
              <rect x="38" y="56" width="208" height="26" rx="8" fill="var(--tint-strong)" />
              <text x="52" y="73" fill={label} className="font-mono" fontSize="11" letterSpacing="1.6">
                -Q0 · TABLERO
              </text>
              <text
                x="238"
                y="73"
                textAnchor="end"
                fill={accent}
                className="font-mono"
                fontSize="10"
                letterSpacing="1.4"
              >
                3~
              </text>
            </motion.g>

            {/* ── main breaker + energy meter ──────────────────── */}
            <motion.g variants={box} custom={0.45}>
              <rect x="38" y="96" width="92" height="54" rx="8" fill="none" stroke={ink} strokeWidth="1.5" />
              <path d="M52 108 l9 15 -9 15" fill="none" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
              <text x="70" y="121" fill={label} className="font-mono" fontSize="9" letterSpacing="0.8">
                F1 · 40 A
              </text>
              <text x="70" y="137" fill={label} className="font-mono" fontSize="8" opacity="0.75">
                30 mA · AD
              </text>

              <rect x="138" y="96" width="108" height="54" rx="8" fill="var(--tint)" stroke={faint} strokeWidth="1.2" />
              <text x="150" y="120" fill={accent} className="font-mono" fontSize="15" letterSpacing="0.5">
                {voltage} V
              </text>
              <text x="150" y="136" fill={label} className="font-mono" fontSize="8.5" opacity="0.8">
                50 Hz
              </text>
              <path
                d="M200 138 q5 -9 10 0 t10 0 t10 0"
                fill="none"
                stroke={honey}
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </motion.g>
            {/* ── live serpentine busbar: main breaker → rail 1 → rail 2 ─ */}
            <motion.path
              d="M61 150 V174 H240 V262 H61"
              fill="none"
              stroke={accent}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
              variants={draw}
              custom={0.6}
            />
            <motion.circle cx="240" cy="174" r="3.2" fill={accent} variants={box} custom={1.05} />
            <motion.circle cx="240" cy="262" r="3.2" fill={accent} variants={box} custom={1.1} />

            {/* ── DIN rail 1 · circuits C1–C4 ───────────────────── */}
            {[0, 1, 2, 3].map((i) => {
              const x = 38 + i * 50;
              const on = i === 2;
              return (
                <motion.g key={`r1-${i}`} variants={box} custom={0.8 + i * 0.06}>
                  <path d={`M${x + 23} 174 V184`} stroke={accent} strokeWidth="1.3" opacity="0.75" />
                  <rect x={x} y="184" width="46" height="58" rx="6" fill="var(--tint)" stroke={ink} strokeWidth="1.2" />
                  <motion.circle
                    cx={x + 23}
                    cy="197"
                    r="2.5"
                    fill={on ? accent : faint}
                    {...(on ? led(0.4 + i * 0.3) : {})}
                  />
                  {on ? (
                    <motion.g
                      initial={reduce ? { rotate: 0 } : { rotate: -32 }}
                      animate={{ rotate: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 1.05 + i * 0.06,
                        ease: [0.34, 1.28, 0.64, 1] as const,
                      }}
                      style={{ transformBox: "fill-box", transformOrigin: "bottom center" }}
                    >
                      <rect x={x + 15} y="205" width="16" height="20" rx="4" fill={accent} />
                    </motion.g>
                  ) : (
                    <rect x={x + 15} y="205" width="16" height="20" rx="4" fill={faint} />
                  )}
                  <circle cx={x + 11} cy="231" r="2" fill="none" stroke={faint} strokeWidth="1.1" />
                  <circle cx={x + 35} cy="231" r="2" fill="none" stroke={faint} strokeWidth="1.1" />
                  <text x={x + 23} y="254" textAnchor="middle" fontSize="9" fill={label} className="font-mono">
                    {`C${i + 1}`}
                  </text>
                </motion.g>
              );
            })}

            {/* ── DIN rail 2 · circuits C5–C8 ───────────────────── */}
            {[0, 1, 2, 3].map((i) => {
              const x = 38 + i * 50;
              const on = i === 2;
              return (
                <motion.g key={`r2-${i}`} variants={box} custom={1.0 + i * 0.06}>
                  <path d={`M${x + 23} 262 V270`} stroke={accent} strokeWidth="1.3" opacity="0.75" />
                  <rect x={x} y="270" width="46" height="58" rx="6" fill="var(--tint)" stroke={ink} strokeWidth="1.2" />
                  <motion.circle
                    cx={x + 23}
                    cy="283"
                    r="2.5"
                    fill={on ? accent : faint}
                    {...(on ? led(0.6 + i * 0.3) : {})}
                  />
                  {on ? (
                    <motion.g
                      initial={reduce ? { rotate: 0 } : { rotate: -32 }}
                      animate={{ rotate: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 1.25 + i * 0.06,
                        ease: [0.34, 1.28, 0.64, 1] as const,
                      }}
                      style={{ transformBox: "fill-box", transformOrigin: "bottom center" }}
                    >
                      <rect x={x + 15} y="291" width="16" height="20" rx="4" fill={accent} />
                    </motion.g>
                  ) : (
                    <rect x={x + 15} y="291" width="16" height="20" rx="4" fill={faint} />
                  )}
                  <circle cx={x + 11} cy="317" r="2" fill="none" stroke={faint} strokeWidth="1.1" />
                  <circle cx={x + 35} cy="317" r="2" fill="none" stroke={faint} strokeWidth="1.1" />
                  <text x={x + 23} y="340" textAnchor="middle" fontSize="9" fill={label} className="font-mono">
                    {`C${i + 5}`}
                  </text>
                </motion.g>
              );
            })}
            {/* ── terminal strip + PE earth bar ────────────────── */}
            <motion.g variants={box} custom={1.25}>
              <rect x="38" y="350" width="208" height="24" rx="6" fill="var(--tint)" stroke={faint} strokeWidth="1.2" />
              {Array.from({ length: 10 }).map((_, i) => (
                <circle
                  key={`t-${i}`}
                  cx={54 + i * 20}
                  cy="362"
                  r="3"
                  fill="none"
                  stroke={i % 3 === 0 ? honey : faint}
                  strokeWidth="1.3"
                />
              ))}
              <path
                d="M120 380 V396 M111 396 H129 M114 401 H126 M117 406 H123"
                fill="none"
                stroke={faint}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <text x="134" y="407" fill={label} className="font-mono" fontSize="8.5">
                PE
              </text>
            </motion.g>

            {/* ── conduit W1: board → PLC ──────────────────────── */}
            <motion.path
              d="M240 174 H296 Q308 174 308 162 V108 Q308 96 320 96 H348"
              fill="none"
              stroke={accent}
              strokeWidth="2"
              strokeLinecap="round"
              variants={draw}
              custom={1.25}
            />
            <motion.text
              x="298"
              y="140"
              fill={accent}
              className="font-mono"
              fontSize="8"
              letterSpacing="0.6"
              transform="rotate(-90 298 140)"
              variants={box}
              custom={1.7}
            >
              W1 · 3G2.5
            </motion.text>

            {/* ── PLC block ────────────────────────────────────── */}
            <motion.g variants={box} custom={1.5}>
              <rect x="348" y="52" width="204" height="120" rx="12" fill="var(--tint)" stroke={ink} strokeWidth="1.5" />
              <rect x="352" y="58" width="196" height="22" rx="8" fill="var(--tint-strong)" />
              <text x="364" y="73" fill={label} className="font-mono" fontSize="11" letterSpacing="1.6">
                PLC
              </text>
              <text x="536" y="73" textAnchor="end" fill={label} className="font-mono" fontSize="9" opacity="0.7">
                LOGO! 8
              </text>
              {[92, 112, 132, 152].map((y, i) => (
                <g key={`io-${i}`}>
                  <circle cx="366" cy={y} r="4.5" fill="none" stroke={i < 2 ? accent : faint} strokeWidth="1.4" />
                  <path d={`M371 ${y} h22`} stroke={faint} strokeWidth="1.2" />
                  <text x="399" y={y + 3} fill={label} className="font-mono" fontSize="9">
                    {i < 2 ? `DI${i + 1}` : `DO${i - 1}`}
                  </text>
                  <rect x="470" y={y - 8} width="54" height="16" rx="4" fill="var(--tint-strong)" stroke={faint} strokeWidth="1" />
                  <motion.circle
                    cx="481"
                    cy={y}
                    r="3.2"
                    fill={i < 2 ? accent : i === 2 ? honey : faint}
                    {...(i < 2 ? led(0.9 + i * 0.5) : i === 2 ? led(1.3) : {})}
                  />
                </g>
              ))}
              <text x="536" y="168" textAnchor="end" fill={label} className="font-mono" fontSize="8.5" opacity="0.8">
                +24 V DC
              </text>
            </motion.g>
            {/* ── cable schedule legend ─────────────────────────── */}
            <motion.g variants={box} custom={1.65}>
              <rect
                x="336"
                y="198"
                width="122"
                height="92"
                rx="10"
                fill="none"
                stroke={faint}
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />
              <text x="350" y="215" fill={label} className="font-mono" fontSize="7.5" letterSpacing="1.4" opacity="0.7">
                LEYENDA
              </text>
              {[
                { y: 236, c: accent, t: "W1 · 3G2.5", v: "16 A" },
                { y: 256, c: ink, t: "W2 · 3G1.5", v: "10 A" },
                { y: 276, c: honey, t: "-K1 · 0.75", v: "24 V" },
              ].map((row) => (
                <g key={row.t}>
                  <path d={`M350 ${row.y} h16`} stroke={row.c} strokeWidth="2.4" strokeLinecap="round" />
                  <text x="374" y={row.y + 3} fill={label} className="font-mono" fontSize="8">
                    {row.t}
                  </text>
                  <text
                    x="446"
                    y={row.y + 3}
                    textAnchor="end"
                    fill={label}
                    className="font-mono"
                    fontSize="8"
                    opacity="0.7"
                  >
                    {row.v}
                  </text>
                </g>
              ))}
            </motion.g>

            {/* ── conduit W2: board → socket outlets → lighting → motor ─ */}
            <motion.path
              d="M240 262 H300 Q312 262 312 274 V314 Q312 326 324 326 H506"
              fill="none"
              stroke={ink}
              strokeWidth="1.8"
              strokeLinecap="round"
              variants={draw}
              custom={1.7}
            />
            <motion.text
              x="322"
              y="314"
              fill={label}
              className="font-mono"
              fontSize="8"
              letterSpacing="0.6"
              transform="rotate(-90 322 314)"
              variants={box}
              custom={2.1}
            >
              W2 · 3G1.5
            </motion.text>

            {/* ── loads: sockets, lighting, contactor-fed motor ──── */}
            <motion.g variants={box} custom={1.95}>
              <circle cx="356" cy="326" r="3" fill={ink} />
              <circle cx="445" cy="326" r="3" fill={ink} />
              {/* socket outlet */}
              <circle cx="356" cy="326" r="14" fill="var(--card)" stroke={ink} strokeWidth="1.6" />
              <circle cx="351" cy="322" r="1.8" fill={faint} />
              <circle cx="361" cy="322" r="1.8" fill={faint} />
              <path d="M349 331 H363" stroke={faint} strokeWidth="1.2" strokeLinecap="round" />
              <text x="356" y="358" textAnchor="middle" fontSize="9" fill={label} className="font-mono">
                C3
              </text>
              {/* luminaire */}
              <circle cx="445" cy="326" r="14" fill="var(--card)" stroke={ink} strokeWidth="1.6" />
              <path
                d="M438 319 L452 333 M452 319 L438 333"
                stroke={ink}
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <text x="445" y="358" textAnchor="middle" fontSize="9" fill={label} className="font-mono">
                C5
              </text>
              {/* contactor + motor */}
              <rect x="498" y="286" width="44" height="20" rx="4" fill="var(--tint)" stroke={faint} strokeWidth="1.2" />
              <motion.rect
                x="498"
                y="286"
                width="44"
                height="20"
                rx="4"
                fill="none"
                stroke={honey}
                strokeWidth="1.6"
                initial={{ opacity: 0 }}
                animate={reduce ? { opacity: 0 } : { opacity: [0, 1, 0] }}
                transition={
                  reduce
                    ? undefined
                    : {
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut" as const,
                        delay: 1.1,
                        times: [0, 0.22, 1],
                      }
                }
              />
              <text x="520" y="299.5" textAnchor="middle" fontSize="8" fill={label} className="font-mono">
                A1/A2
              </text>
              <path d="M520 306 V312" stroke={ink} strokeWidth="1.5" />
              <circle cx="520" cy="326" r="14" fill="var(--card)" stroke={ink} strokeWidth="1.6" />
              <motion.g
                initial={reduce ? undefined : { rotate: 0 }}
                animate={reduce ? undefined : { rotate: 360 }}
                transition={
                  reduce
                    ? undefined
                    : { duration: 2.6, repeat: Infinity, ease: "linear" as const, delay: 2.6 }
                }
                style={{ transformOrigin: "520px 326px" }}
              >
                {[0, 120, 240].map((a) => (
                  <path
                    key={a}
                    d="M520 319 V314"
                    stroke={ink}
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    transform={`rotate(${a} 520 326)`}
                  />
                ))}
              </motion.g>
              <text x="520" y="329" textAnchor="middle" fontSize="8" fill={label} className="font-mono">
                M
              </text>
              <text x="520" y="358" textAnchor="middle" fontSize="9" fill={label} className="font-mono">
                -M1
              </text>
            </motion.g>

            {/* ── control wire: PLC DO1 → contactor coil ────────── */}
            <motion.path
              d="M470 172 V240 Q470 250 480 250 H506 Q520 250 520 262 V286"
              fill="none"
              stroke={honey}
              strokeWidth="1.8"
              strokeLinecap="round"
              variants={draw}
              custom={2.15}
            />
            <motion.text
              x="486"
              y="228"
              fill={honey}
              className="font-mono"
              fontSize="8"
              letterSpacing="0.6"
              transform="rotate(-90 486 228)"
              variants={box}
              custom={2.5}
            >
              -K1 · 24 V
            </motion.text>

            {/* ── sheet furniture: registration + title block ───── */}
            <motion.g variants={box} custom={0.05}>
              {[
                [14, 14],
                [566, 14],
                [14, 456],
                [566, 456],
              ].map(([cx, cy]) => (
                <path
                  key={`reg-${cx}-${cy}`}
                  d={`M${cx - 6} ${cy} h12 M${cx} ${cy - 6} v12`}
                  stroke={faint}
                  strokeWidth="1"
                  opacity="0.5"
                  strokeLinecap="round"
                />
              ))}
            </motion.g>
            <motion.g variants={box} custom={2.35}>
              <path d="M22 442 H558" stroke={faint} strokeWidth="1" />
              <text x="22" y="460" fill={label} className="font-mono" fontSize="8.5" letterSpacing="0.8">
                INSTALACIÓN DOMÉSTICA · Y. SINGH
              </text>
              <text
                x="290"
                y="460"
                textAnchor="middle"
                fill={label}
                className="font-mono"
                fontSize="8.5"
                letterSpacing="0.8"
                opacity="0.75"
              >
                ESQUEMA UNIFILAR · ESC. 1:100
              </text>
              <text
                x="558"
                y="460"
                textAnchor="end"
                fill={label}
                className="font-mono"
                fontSize="8.5"
                letterSpacing="0.8"
                opacity="0.75"
              >
                PL-01 · REV. C
              </text>
            </motion.g>

            {/* ── current flow, once the plan is plotted ────────── */}
            <motion.path
              d="M61 150 V174 H240 V262 H61"
              fill="none"
              stroke={accent}
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...flow(0)}
            />
            <motion.path
              d="M240 174 H296 Q308 174 308 162 V108 Q308 96 320 96 H348"
              fill="none"
              stroke={accent}
              strokeWidth="3"
              strokeLinecap="round"
              {...flow(0.35)}
            />
            <motion.path
              d="M240 262 H300 Q312 262 312 274 V314 Q312 326 324 326 H506"
              fill="none"
              stroke={honey}
              strokeWidth="2.6"
              strokeLinecap="round"
              {...flow(0.7)}
            />
            <motion.path
              d="M470 172 V240 Q470 250 480 250 H506 Q520 250 520 262 V286"
              fill="none"
              stroke={honey}
              strokeWidth="3.2"
              strokeLinecap="round"
              {...pulse(0.3)}
            />
          </motion.g>
        </svg>

        {/* corner tags */}
        <span className="absolute left-5 top-5 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-brand sm:block">
          ● 3~
        </span>
        <span className="absolute right-5 top-5 hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-signal sm:inline-flex">
          <span className="relative flex size-1.5" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-70" />
            <span className="relative inline-flex size-1.5 rounded-full bg-signal" />
          </span>
          Live
        </span>
      </div>

      {/* caption lives in the aria-label; no visible text below the card */}
    </figure>
  );
}
