import { useEffect, useState } from 'react'
import { TRIP_START, TRIP_END } from '../data/seed'

export type CountdownPhase = 'before' | 'during' | 'after'

export interface Countdown {
  phase: CountdownPhase
  label: string
  days: number
  hours: number
  minutes: number
  seconds: number
}

function compute(now: Date): Countdown {
  let phase: CountdownPhase
  let target: Date
  let label: string

  if (now < TRIP_START) {
    phase = 'before'
    target = TRIP_START
    label = 'Days to takeoff'
  } else if (now < TRIP_END) {
    phase = 'during'
    target = TRIP_END
    label = 'Days left in SF'
  } else {
    phase = 'after'
    return { phase, label: 'Trip complete', days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  let diff = Math.max(0, target.getTime() - now.getTime())
  const days = Math.floor(diff / 86_400_000)
  diff -= days * 86_400_000
  const hours = Math.floor(diff / 3_600_000)
  diff -= hours * 3_600_000
  const minutes = Math.floor(diff / 60_000)
  diff -= minutes * 60_000
  const seconds = Math.floor(diff / 1_000)

  return { phase, label, days, hours, minutes, seconds }
}

export function useCountdown(): Countdown {
  const [cd, setCd] = useState<Countdown>(() => compute(new Date()))

  useEffect(() => {
    const id = window.setInterval(() => setCd(compute(new Date())), 1000)
    return () => window.clearInterval(id)
  }, [])

  return cd
}
