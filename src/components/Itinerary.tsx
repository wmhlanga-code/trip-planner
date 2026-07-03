import { useState } from 'react'
import type { Contact, TripDay } from '../types'
import { DayCard } from './DayCard'

interface Props {
  days: TripDay[]
  crew: Contact[]
  onChange: (days: TripDay[]) => void
}

export function Itinerary({ days, crew, onChange }: Props) {
  const [openId, setOpenId] = useState<string | null>(days[0]?.id ?? null)

  const patchDay = (updated: TripDay) =>
    onChange(days.map((d) => (d.id === updated.id ? updated : d)))

  return (
    <section className="section">
      <div className="section-label">Itinerary · 8 days</div>
      <div className="itinerary">
        {days.map((day) => (
          <DayCard
            key={day.id}
            day={day}
            crew={crew}
            open={openId === day.id}
            onToggle={() => setOpenId(openId === day.id ? null : day.id)}
            onChange={patchDay}
          />
        ))}
      </div>
    </section>
  )
}
