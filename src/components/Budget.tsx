import type { Contact, TripDay } from '../types'
import { computeBudget, money } from '../lib/budget'

interface Props {
  days: TripDay[]
  crew: Contact[]
}

export function Budget({ days, crew }: Props) {
  const { grandTotal, perDay, perPerson } = computeBudget(days, crew)
  const spentDays = perDay.filter((d) => d.subtotal > 0)

  return (
    <section className="section">
      <div className="section-label">The damage</div>
      <div className="receipt">
        <div className="receipt-head">
          <div className="receipt-title mono">BAD DECISIONS TRIP</div>
          <div className="receipt-sub mono">itemized · usd</div>
        </div>

        <div className="receipt-perf" />

        <div className="receipt-lines">
          {spentDays.length === 0 && (
            <div className="receipt-empty mono">No costs logged yet.</div>
          )}
          {spentDays.map(({ day, subtotal }) => (
            <div className="receipt-line mono" key={day.id}>
              <span className="rl-name">
                Day {day.dayNumber} · {day.title}
              </span>
              <span className="rl-dots" aria-hidden />
              <span className="rl-amt tnum">{money(subtotal)}</span>
            </div>
          ))}
        </div>

        <div className="receipt-perf" />

        <div className="receipt-line receipt-total mono">
          <span className="rl-name">TOTAL</span>
          <span className="rl-dots" aria-hidden />
          <span className="rl-amt tnum">{money(grandTotal)}</span>
        </div>

        <div className="receipt-perf" />

        <div className="receipt-split">
          <div className="receipt-split-head mono">SPLIT · {perPerson.length} ways</div>
          {perPerson.map(({ contact, total }) => (
            <div className="receipt-line mono" key={contact.id}>
              <span className="rl-name">{contact.name || 'traveler'}</span>
              <span className="rl-dots" aria-hidden />
              <span className="rl-amt tnum">{money(total)}</span>
            </div>
          ))}
        </div>

        <div className="receipt-perf" />

        <div className="receipt-barcode-wrap">
          <div className="barcode receipt-barcode" aria-hidden />
          <div className="receipt-foot mono">thank you · come again · maybe</div>
        </div>
      </div>
    </section>
  )
}
