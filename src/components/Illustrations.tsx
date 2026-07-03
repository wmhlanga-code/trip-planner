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

function FerryMoon() {
  return (
    <g>
      <rect width="120" height="64" fill={C.navy} />
      <circle cx="96" cy="18" r="9" fill={C.sand} />
      <circle cx="92" cy="15" r="9" fill={C.navy} />
      <g fill={C.sand} opacity="0.7">
        <circle cx="20" cy="12" r="0.9" />
        <circle cx="40" cy="8" r="0.8" />
        <circle cx="62" cy="14" r="0.7" />
        <circle cx="12" cy="26" r="0.7" />
      </g>
      <path d="M0 46h120v18H0z" fill={C.navy2} />
      <g fill={C.teal}>
        <path d="M18 40h34l-4 6H22z" />
        <rect x="26" y="30" width="18" height="10" />
        <rect x="30" y="26" width="4" height="4" fill={C.orange} />
      </g>
      <g stroke={C.sand} strokeWidth="1" opacity="0.5">
        <path d="M8 52h20M60 50h30M40 56h44" />
      </g>
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

function Coaster() {
  return (
    <g>
      <rect width="120" height="64" fill={C.navy2} />
      <path
        d="M4 58 C 20 10, 40 10, 50 40 C 56 58, 70 58, 78 30 C 84 8, 104 8, 116 52"
        fill="none"
        stroke={C.orange}
        strokeWidth="3"
      />
      <g stroke={C.sand} strokeWidth="1.4" opacity="0.7">
        <path d="M12 40v18M28 20v38M50 40v18M78 30v28M100 22v36" />
      </g>
      <rect x="6" y="52" width="10" height="6" rx="2" fill={C.gold} />
    </g>
  )
}

function Mountain() {
  return (
    <g>
      <rect width="120" height="64" fill={C.gold} opacity="0.25" />
      <rect y="0" width="120" height="64" fill={C.sand} opacity="0.5" />
      <path d="M0 64 40 18 66 44 84 26 120 64z" fill={C.teal} />
      <path d="M40 18 52 32 34 32z" fill={C.paper} />
      <path d="M84 26 94 40 74 40z" fill={C.paper} opacity="0.8" />
      <circle cx="100" cy="16" r="8" fill={C.orange} />
    </g>
  )
}

function ClockTower() {
  return (
    <g>
      <rect width="120" height="64" fill={C.navy} />
      <rect y="48" width="120" height="16" fill={C.teal} />
      <rect x="50" y="8" width="20" height="46" fill={C.sand} />
      <path d="M48 8l12-6 12 6z" fill={C.orange} />
      <circle cx="60" cy="20" r="6" fill={C.paper} />
      <path d="M60 20v-4M60 20l3 2" stroke={C.navy} strokeWidth="1.2" strokeLinecap="round" />
      <g fill={C.navy2}>
        <rect x="54" y="32" width="4" height="6" />
        <rect x="62" y="32" width="4" height="6" />
        <rect x="54" y="42" width="4" height="6" />
        <rect x="62" y="42" width="4" height="6" />
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

const COVERS: Record<DayTheme, () => JSX.Element> = {
  'ferry-moon': FerryMoon,
  pier: Pier,
  bridge: Bridge,
  coaster: Coaster,
  mountain: Mountain,
  clocktower: ClockTower,
  sunset: Sunset,
  park: Park,
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
