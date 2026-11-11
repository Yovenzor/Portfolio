import { cn } from "@/lib/utils";

/**
 * Schematic illustrations for each case study. They are honest line-art
 * diagrams — explicitly labelled as illustrative by the caller — never photos
 * of work that has not happened.
 *
 * All ink comes from theme tokens, so the drawings read correctly on paper
 * and on ink. Each project gets one accent hue (coral, honey, plum or teal)
 * to keep the gallery colorful without being loud.
 */
export function ProjectVisual({
  slug,
  caption,
  className,
}: {
  slug: string;
  caption?: string;
  className?: string;
}) {
  const known = [
    "automatizacion-plc",
    "casa-autocad",
    "panel-taller",
  ];

  const accent = ACCENTS[slug] ?? "var(--brand)";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-line bg-surface p-4",
        className,
      )}
    >
      <div className="tech-grid-fine pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <svg
        viewBox="0 0 400 232"
        className="relative w-full"
        fill="none"
        stroke={LINE}
        strokeWidth="1.4"
        strokeLinecap="round"
        aria-hidden="true"
      >
        {slug === "casa-autocad" && <CadPlan accent={accent} />}
        {slug === "automatizacion-plc" && <PlcWiring accent={accent} />}
        {slug === "panel-taller" && <PanelWiring accent={accent} />}
        {!known.includes(slug) && <SymbolSheet accent={accent} />}
      </svg>
      {caption && (
        <span className="absolute right-3 top-3 rounded-full border border-line-strong bg-background/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-signal backdrop-blur rtl:right-auto rtl:left-3">
          {caption}
        </span>
      )}
    </div>
  );
}

/** Per-project accent hue — one color per drawing, never more. */
const ACCENTS: Record<string, string> = {
  "panel-taller": "var(--brand)",
  "automatizacion-plc": "var(--teal)",
  "casa-autocad": "var(--plum)",
};

/** Hairline stroke colour for schematic line art (theme-aware). */
const LINE = "var(--diagram-line)";
const FAINT = "var(--diagram-faint)";

function Label({ x, y, children, size = 9 }: { x: number; y: number; children: string; size?: number }) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fill="var(--diagram-label)"
      className="font-mono"
      letterSpacing="0.8"
    >
      {children}
    </text>
  );
}

/** AutoCAD plan: real-scale house with its C1–C9 circuit schedule. */
function CadPlan({ accent }: { accent: string }) {
  return (
    <g strokeWidth="1.4">
      {/* drafting corner marks */}
      <path d="M8 24 V8 H24 M376 8 H392 V24 M392 208 V224 H376 M24 224 H8 V208" stroke={FAINT} strokeWidth="1.2" />
      {/* scale bar — the whole house measured at real scale */}
      <rect x="24" y="24" width="48" height="7" stroke={LINE} strokeWidth="1.1" />
      <path d="M25 25 h11 v5 h-11 z" fill={accent} stroke="none" />
      <path d="M49 25 h11 v5 h-11 z" fill={FAINT} stroke="none" />
      {/* floor plan: double walls with door gaps */}
      <rect x="24" y="44" width="216" height="144" stroke={LINE} strokeWidth="1.3" />
      <rect x="30" y="50" width="204" height="132" stroke={LINE} strokeWidth="1.1" />
      <path d="M118 50 V86 M118 112 V182 M30 116 H66 M90 116 H170 M194 116 H234" strokeWidth="1.3" />
      {/* lamps */}
      {[[74, 83], [176, 83], [74, 149], [176, 149]].map(([x, y], i) => (
        <g key={`l${i}`}>
          <circle cx={x} cy={y} r="9" />
          <path d={`M${x - 6} ${y - 6} l12 12 M${x - 6} ${y + 6} l12 -12`} strokeWidth="1.2" />
        </g>
      ))}
      {/* sockets */}
      {[[40, 104], [224, 104], [40, 172], [224, 172]].map(([x, y], i) => (
        <g key={`s${i}`}>
          <circle cx={x} cy={y} r="7" stroke={LINE} strokeWidth="1.5" />
          <circle cx={x} cy={y} r="2.2" fill={FAINT} stroke="none" />
        </g>
      ))}
      {/* circuit callouts */}
      <circle cx="48" cy="66" r="8.5" stroke={accent} strokeWidth="1.5" />
      <Label x={44} y={69} size={7}>C1</Label>
      <circle cx="140" cy="66" r="8.5" stroke={accent} strokeWidth="1.5" />
      <Label x={136} y={69} size={7}>C3</Label>
      <circle cx="48" cy="132" r="8.5" stroke={accent} strokeWidth="1.5" />
      <Label x={44} y={135} size={7}>C5</Label>
      <circle cx="140" cy="132" r="8.5" stroke={accent} strokeWidth="1.5" />
      <Label x={136} y={135} size={7}>C7</Label>
      {/* circuit schedule C1–C9 (every run calculated) */}
      <rect x="254" y="44" width="122" height="144" rx="4" stroke={accent} strokeWidth="1.5" />
      <path
        d="M254 62 H376 M300 62 V188 M254 76 H376 M254 90 H376 M254 104 H376 M254 118 H376 M254 132 H376 M254 146 H376 M254 160 H376 M254 174 H376"
        strokeWidth="1"
        stroke={LINE}
      />
      <path d="M308 69 H366 M308 83 H366 M308 97 H366 M308 111 H366 M308 125 H366 M308 139 H366 M308 153 H366 M308 167 H366 M308 181 H366" stroke={FAINT} strokeWidth="1.2" />
      <Label x={262} y={72} size={7.5}>C1</Label>
      <Label x={262} y={86} size={7.5}>C2</Label>
      <Label x={262} y={100} size={7.5}>C3</Label>
      <Label x={262} y={114} size={7.5}>C4</Label>
      <Label x={262} y={128} size={7.5}>C5</Label>
      <Label x={262} y={142} size={7.5}>C6</Label>
      <Label x={262} y={156} size={7.5}>C7</Label>
      <Label x={262} y={170} size={7.5}>C8</Label>
      <Label x={262} y={184} size={7.5}>C9</Label>
      {/* base labels */}
      <Label x={24} y={198} size={8.5}>C1 · C5 · C9</Label>
      <path d="M24 208 H376" strokeDasharray="3 6" />
    </g>
  );
}

/** PLC wiring: controller between sensors and actuator. */
function PlcWiring({ accent }: { accent: string }) {
  return (
    <g strokeWidth="1.4">
      <rect x="148" y="34" width="104" height="164" rx="10" strokeWidth="1.6" />
      <path d="M148 66 H252" />
      <Label x={166} y={56} size={10}>PLC</Label>
      <Label x={214} y={56} size={8}>CPU</Label>
      {/* inputs */}
      {[0, 1, 2].map((i) => (
        <g key={`i${i}`}>
          <circle cx="148" cy={92 + i * 34} r="5" stroke={accent} strokeWidth="1.5" />
          <path d={`M143 ${92 + i * 34} H64`} stroke={accent} strokeWidth="1.5" />
          <rect x="28" y={82 + i * 34} width="36" height="20" rx="4" stroke={FAINT} />
          <Label x={36} y={95 + i * 34} size={8}>{`DI${i + 1}`}</Label>
        </g>
      ))}
      {/* outputs */}
      {[0, 1].map((i) => (
        <g key={`o${i}`}>
          <circle cx="252" cy={104 + i * 44} r="5" strokeWidth="1.5" />
          <path d={`M257 ${104 + i * 44} H336`} />
          <rect x="336" y={94 + i * 44} width="40" height="20" rx="4" stroke={FAINT} />
          <Label x={344} y={107 + i * 44} size={8}>{i === 0 ? "DO1" : "DO2"}</Label>
        </g>
      ))}
      <path d="M348 114 V158" />
      <circle cx="356" cy="176" r="16" strokeWidth="1.5" />
      <Label x={352} y={180} size={9}>M</Label>
      <Label x={150} y={214} size={8.5}>DI · DO · +24 V DC</Label>
    </g>
  );
}

/** Panel wiring: workshop panel feeding a house, wired against the clock. */
function PanelWiring({ accent }: { accent: string }) {
  return (
    <g strokeWidth="1.4">
      {/* incoming supply */}
      <path d="M44 14 V26 M64 14 V26 M84 14 V26" stroke={accent} strokeWidth="1.5" />
      <Label x={40} y={11} size={8}>L1 L2 L3</Label>
      {/* panel cabinet */}
      <rect x="24" y="26" width="152" height="150" rx="10" stroke={accent} strokeWidth="1.6" />
      <path d="M166 86 v30" strokeWidth="1.6" />
      {/* DIN rail with breakers */}
      <rect x="36" y="58" width="128" height="7" rx="2" stroke={LINE} strokeWidth="1.2" />
      <rect x="40" y="34" width="24" height="24" rx="3" />
      <rect x="72" y="34" width="24" height="24" rx="3" />
      <rect x="104" y="34" width="24" height="24" rx="3" />
      <rect x="136" y="34" width="24" height="24" rx="3" stroke={accent} strokeWidth="1.6" />
      <Label x={42} y={78} size={7.5}>-Q1</Label>
      <Label x={138} y={78} size={7.5}>-Q4</Label>
      {/* terminal strip */}
      <rect x="36" y="104" width="128" height="7" rx="2" stroke={LINE} strokeWidth="1.2" />
      <path d="M52 104 v7 M68 104 v7 M84 104 v7 M100 104 v7 M116 104 v7 M132 104 v7 M148 104 v7" strokeWidth="1.1" />
      <Label x={38} y={126} size={7.5}>X1</Label>
      {/* cable duct */}
      <rect x="36" y="138" width="128" height="18" rx="4" />
      <path d="M44 144 H156 M44 150 H156" stroke={FAINT} strokeWidth="1.1" />
      {/* cables to the simulated house */}
      <path d="M176 76 C 214 76, 218 104, 256 104" stroke={accent} strokeWidth="1.7" />
      <path d="M176 100 C 216 100, 220 126, 256 126" strokeWidth="1.4" />
      <path d="M176 124 C 216 124, 220 148, 256 148" stroke={accent} strokeWidth="1.4" />
      <path d="M176 148 C 216 148, 220 166, 256 166" strokeDasharray="5 5" />
      {/* simulated house: lamp + socket */}
      <path d="M250 108 L312 64 L374 108" strokeWidth="1.6" stroke={accent} />
      <rect x="258" y="108" width="108" height="68" />
      <circle cx="288" cy="130" r="9" />
      <path d="M282 124 l12 12 M294 124 l-12 12" strokeWidth="1.1" />
      <circle cx="336" cy="130" r="9" />
      <path d="M332 139 v6 M340 139 v6" strokeWidth="1.2" />
      <Label x={266} y={164} size={7.5}>-W1</Label>
      {/* clock: finished inside the 10-hour window */}
      <circle cx="210" cy="42" r="13" stroke={accent} strokeWidth="1.5" />
      <path d="M210 42 V32 M210 42 l7 5" strokeWidth="1.4" />
      <Label x={228} y={46} size={9}>9 h</Label>
      {/* base labels */}
      <Label x={24} y={196} size={8.5}>-Q1 · -Q4 · X1 · -W1</Label>
      <path d="M24 208 H376" strokeDasharray="3 6" />
    </g>
  );
}

/** CADe_SIMU: symbol sheet. */
function SymbolSheet({ accent }: { accent: string }) {
  return (
    <g strokeWidth="1.5">
      {/* contactor */}
      <g>
        <path d="M40 60 h28 M40 92 h28" />
        <path d="M54 46 v28 M40 74 h28" stroke={accent} strokeWidth="1.7" />
        <Label x={34} y={116} size={8.5}>-Q1</Label>
      </g>
      {/* relay coil */}
      <g>
        <rect x="140" y="58" width="56" height="34" rx="5" stroke={accent} strokeWidth="1.6" />
        <path d="M124 75 h16 M196 75 h24" />
        <Label x={152} y={116} size={8.5}>-K1</Label>
      </g>
      {/* breaker */}
      <g>
        <path d="M268 48 v46 M284 48 v46" />
        <path d="M268 71 h16" stroke={accent} strokeWidth="1.7" />
        <path d="M276 56 l14 30" stroke={accent} strokeWidth="1.7" />
        <path d="M256 60 h-14 M296 60 h14" />
        <Label x={252} y={116} size={8.5}>F1</Label>
      </g>
      {/* motor + thermal relay */}
      <g>
        <circle cx="72" cy="168" r="24" strokeWidth="1.6" />
        <Label x={66} y={172} size={11}>M</Label>
        <path d="M96 168 h32" />
        <rect x="128" y="156" width="46" height="24" rx="5" stroke={accent} strokeWidth="1.5" />
        <Label x={136} y={172} size={8}>1–2–3</Label>
        <path d="M174 168 h24" />
        <Label x={44} y={210} size={8.5}>IEC 60617</Label>
      </g>
      {/* timer symbol */}
      <g>
        <rect x="252" y="146" width="56" height="44" rx="6" />
        <path d="M252 190 A 28 28 0 0 0 308 190" />
        <path d="M280 190 L 296 162" stroke={accent} strokeWidth="1.6" />
        <Label x={320} y={176} size={8.5}>-KT1</Label>
      </g>
    </g>
  );
}
