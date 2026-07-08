import type { DayTheme } from '../types'

/* Shared flat palette pulled from CSS variables where possible. */
const C = {
  navy: '#1C2B3A',
  navy2: '#243A4E',
  orange: '#C0362C',
  teal: '#3E6B69',
  gold: '#B8862B',
  sand: '#D8C9AE',
  fog: '#EDEEE9',
  paper: '#FFFFFF',
}

interface CoverProps {
  className?: string
}

/* ---------------- Day covers (viewBox 0 0 120 64) ---------------- */

function RowHouses() {
  return (
    <g>
      <rect width="120" height="64" fill={C.sand} opacity="0.5" />
      <rect y="0" width="120" height="64" fill={C.fog} opacity="0.6" />
      <path d="M0 64Q40 46 120 52V64z" fill={C.teal} opacity="0.35" />
      <g>
        <rect x="8" y="30" width="20" height="26" fill={C.orange} />
        <path d="M6 30l12-10 12 10z" fill={C.navy} />
        <rect x="30" y="22" width="20" height="34" fill={C.gold} />
        <path d="M28 22l12-9 12 9z" fill={C.gold} />
        <rect x="52" y="34" width="18" height="22" fill={C.teal} />
        <path d="M50 34l11-9 11 9z" fill={C.teal} />
        <rect x="72" y="18" width="20" height="38" fill={C.navy2} />
        <path d="M70 18l12-10 12 10z" fill={C.navy2} />
        <rect x="94" y="28" width="18" height="28" fill={C.orange} />
        <path d="M92 28l11-9 11 9z" fill={C.orange} />
      </g>
      <g fill={C.paper} opacity="0.85">
        <rect x="13" y="38" width="4" height="5" />
        <rect x="20" y="38" width="4" height="5" />
        <rect x="37" y="30" width="4" height="5" />
        <rect x="44" y="30" width="4" height="5" />
        <rect x="58" y="40" width="4" height="5" />
        <rect x="79" y="26" width="4" height="5" />
        <rect x="86" y="26" width="4" height="5" />
        <rect x="100" y="36" width="4" height="5" />
      </g>
      <rect y="56" width="120" height="8" fill={C.navy2} />
    </g>
  )
}

function Pier() {
  return (
    <g>
      <rect width="120" height="64" fill={C.teal} />
      <rect y="44" width="120" height="20" fill={C.navy2} />
      <g fill={C.sand}>
        <rect x="30" y="18" width="60" height="26" />
        <path d="M28 18l32-10 32 10z" fill={C.orange} />
      </g>
      <g fill={C.navy}>
        <rect x="38" y="26" width="6" height="18" />
        <rect x="50" y="26" width="6" height="18" />
        <rect x="62" y="26" width="6" height="18" />
        <rect x="74" y="26" width="6" height="18" />
      </g>
      <rect x="57" y="6" width="6" height="8" fill={C.gold} />
    </g>
  )
}

function Bridge() {
  return (
    <g>
      <rect width="120" height="64" fill={C.sand} />
      <rect y="30" width="120" height="34" fill={C.teal} opacity="0.35" />
      <g stroke={C.orange} strokeWidth="4" fill="none">
        <path d="M24 64V10M96 64V10" />
      </g>
      <path d="M0 40q24-26 24 0 0-26 24 0M72 40q24-26 24 0 0-26 24 0" stroke={C.orange} strokeWidth="2.5" fill="none" />
      <rect x="0" y="40" width="120" height="4" fill={C.orange} />
      <g stroke={C.orange} strokeWidth="1">
        <path d="M8 40v4M16 41v3M40 39v5M56 40v4M72 40v4M104 40v4M112 41v3" />
      </g>
    </g>
  )
}

function Billiards() {
  return (
    <g>
      <rect width="120" height="64" fill={C.navy} />
      <rect x="10" y="10" width="100" height="44" rx="4" fill={C.teal} />
      <rect x="10" y="10" width="100" height="44" rx="4" fill="none" stroke={C.gold} strokeWidth="3" />
      <circle cx="18" cy="18" r="3.5" fill={C.navy} />
      <circle cx="102" cy="18" r="3.5" fill={C.navy} />
      <circle cx="18" cy="46" r="3.5" fill={C.navy} />
      <circle cx="102" cy="46" r="3.5" fill={C.navy} />
      <circle cx="60" cy="14" r="3.5" fill={C.navy} />
      <circle cx="60" cy="50" r="3.5" fill={C.navy} />
      <circle cx="48" cy="32" r="7" fill={C.paper} />
      <circle cx="48" cy="32" r="7" fill="none" stroke={C.navy} strokeWidth="1" />
      <text x="48" y="35" fontSize="8" textAnchor="middle" fill={C.navy} fontWeight="700">
        8
      </text>
      <circle cx="66" cy="38" r="6" fill={C.orange} />
      <circle cx="78" cy="26" r="6" fill={C.gold} />
      <line x1="90" y1="10" x2="70" y2="34" stroke={C.sand} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  )
}

function Island() {
  return (
    <g>
      <rect width="120" height="64" fill={C.sand} opacity="0.55" />
      <rect y="0" width="120" height="64" fill={C.fog} opacity="0.5" />
      <circle cx="100" cy="14" r="8" fill={C.gold} />
      <path d="M60 30q10-14 26-8q8 3 10 10z" fill={C.teal} />
      <circle cx="70" cy="18" r="5" fill={C.teal} />
      <rect y="40" width="120" height="24" fill={C.teal} opacity="0.5" />
      <path d="M0 64 Q30 44 60 50 T120 46V64z" fill={C.teal} />
      <g>
        <path d="M14 44h34l-5 8H19z" fill={C.paper} />
        <rect x="24" y="34" width="16" height="10" fill={C.navy2} />
        <rect x="29" y="30" width="4" height="4" fill={C.orange} />
      </g>
      <g stroke={C.paper} strokeWidth="1" opacity="0.5">
        <path d="M4 54h20M50 52h30M80 56h30" />
      </g>
    </g>
  )
}

function Sunset() {
  return (
    <g>
      <rect width="120" height="64" fill={C.gold} opacity="0.4" />
      <rect width="120" height="64" fill={C.orange} opacity="0.18" />
      <circle cx="60" cy="42" r="18" fill={C.orange} />
      <rect y="44" width="120" height="20" fill={C.navy} />
      <path d="M0 64 Q30 40 60 46 T120 44V64z" fill={C.teal} />
      <path d="M0 64 Q40 52 80 56 T120 54V64z" fill={C.navy2} />
    </g>
  )
}

function Park() {
  return (
    <g>
      <rect width="120" height="64" fill={C.teal} opacity="0.4" />
      <path d="M0 64 Q40 30 120 44V64z" fill={C.teal} />
      <path d="M0 64 Q60 46 120 58V64z" fill={C.teal} opacity="0.7" />
      <circle cx="94" cy="16" r="7" fill={C.gold} />
      <g>
        <rect x="30" y="30" width="3" height="14" fill={C.navy} />
        <circle cx="31" cy="28" r="8" fill={C.orange} />
        <rect x="60" y="34" width="3" height="12" fill={C.navy} />
        <circle cx="61" cy="32" r="6" fill={C.teal} />
      </g>
    </g>
  )
}

function Plane() {
  return (
    <g>
      <rect width="120" height="64" fill={C.sand} opacity="0.6" />
      <rect y="0" width="120" height="64" fill={C.fog} opacity="0.5" />
      <circle cx="24" cy="46" r="10" fill={C.gold} opacity="0.6" />
      <g stroke={C.navy} strokeWidth="1.6" opacity="0.4" strokeLinecap="round">
        <path d="M50 46h14M56 52h16M46 40h10" />
      </g>
      <g transform="translate(66 26) rotate(-18)">
        <path d="M0 0h34l6 3-6 3H0l-8-3z" fill={C.navy} />
        <path d="M14 3l10-12 5 1-6 11z" fill={C.orange} />
        <path d="M14 3l8 11-5 1-8-9z" fill={C.orange} />
        <path d="M34 1l10-5 3 1-7 6z" fill={C.navy2} />
      </g>
      <g stroke={C.paper} strokeWidth="1.6" opacity="0.7" strokeLinecap="round">
        <path d="M18 40l30 8M10 46l32 10" />
      </g>
    </g>
  )
}

const COVERS: Record<DayTheme, () => JSX.Element> = {
  rowhouses: RowHouses,
  park: Park,
  billiards: Billiards,
  island: Island,
  bridge: Bridge,
  pier: Pier,
  sunset: Sunset,
  plane: Plane,
}

export function DayCover({ theme, className }: { theme: DayTheme; className?: string }) {
  const Art = COVERS[theme]
  return (
    <svg className={className} viewBox="0 0 120 64" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <Art />
    </svg>
  )
}

/* ---------------- Hotel facade ---------------- */
export function HotelFacade({ className }: CoverProps) {
  return (
    <svg className={className} viewBox="0 0 320 120" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="320" height="120" fill={C.navy} />
      <g fill={C.sand} opacity="0.6">
        <circle cx="40" cy="20" r="1" />
        <circle cx="280" cy="16" r="1" />
        <circle cx="150" cy="12" r="0.8" />
      </g>
      <rect x="40" y="30" width="240" height="90" fill={C.navy2} />
      <rect x="40" y="30" width="240" height="8" fill={C.orange} />
      {/* window grid */}
      <g fill={C.gold}>
        {Array.from({ length: 4 }).map((_, r) =>
          Array.from({ length: 9 }).map((_, c) => (
            <rect
              key={`${r}-${c}`}
              x={54 + c * 25}
              y={48 + r * 16}
              width="14"
              height="9"
              opacity={(r + c) % 3 === 0 ? 0.35 : 0.9}
            />
          )),
        )}
      </g>
      {/* door / awning */}
      <rect x="145" y="98" width="30" height="22" fill={C.navy} />
      <path d="M138 98h44l-6 8h-32z" fill={C.orange} />
      <rect x="156" y="104" width="8" height="16" fill={C.sand} />
    </svg>
  )
}

/* ---------------- Time-of-day icon ---------------- */
export function TimeIcon({ hour, className }: { hour: number | null; className?: string }) {
  const isDay = hour === null ? true : hour >= 6 && hour < 19
  return (
    <svg className={className} viewBox="0 0 24 24" width="16" height="16" aria-hidden>
      {isDay ? (
        <g stroke={C.gold} strokeWidth="1.6" fill="none" strokeLinecap="round">
          <circle cx="12" cy="12" r="4.2" fill={C.gold} />
          <path d="M12 3v2.4M12 18.6V21M3 12h2.4M18.6 12H21M5.6 5.6l1.7 1.7M16.7 16.7l1.7 1.7M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7" />
        </g>
      ) : (
        <path
          d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z"
          fill={C.navy2}
          stroke={C.navy}
          strokeWidth="1"
        />
      )}
    </svg>
  )
}
