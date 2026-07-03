import type { TripDay } from '../types'

export function localISODate(d: Date): string {
  const y = d.getFullYear()
  const m = (d.getMonth() + 1).toString().padStart(2, '0')
  const day = d.getDate().toString().padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function formatTime12h(time: string): string | null {
  if (!time) return null
  const [hStr, mStr] = time.split(':')
  const h = parseInt(hStr, 10)
  const m = parseInt(mStr ?? '0', 10)
  if (!Number.isFinite(h)) return null
  const period = h >= 12 ? 'pm' : 'am'
  const h12 = h % 12 === 0 ? 12 : h % 12
  return m ? `${h12}:${m.toString().padStart(2, '0')}${period}` : `${h12}${period}`
}

export interface Digest {
  day: TripDay
  title: string
  body: string
}

/** Builds a single consolidated "today's plan" digest, or null if nothing's scheduled today. */
export function buildTodayDigest(days: TripDay[], now: Date): Digest | null {
  const today = localISODate(now)
  const day = days.find((d) => d.date === today)
  if (!day || day.activities.length === 0) return null

  const sorted = [...day.activities].sort((a, b) => a.time.localeCompare(b.time))
  const parts = sorted.map((a) => {
    const t = formatTime12h(a.time)
    return t ? `${t} · ${a.name || 'untitled stop'}` : a.name || 'untitled stop'
  })

  return {
    day,
    title: `Today · ${day.title}`,
    body: parts.join('\n'),
  }
}
