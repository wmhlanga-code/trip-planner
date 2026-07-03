import type { Hotel } from '../types'
import { HotelFacade } from './Illustrations'

interface Props {
  hotel: Hotel
  onChange: (patch: Partial<Hotel>) => void
}

export function HotelCard({ hotel, onChange }: Props) {
  const mapsHref = hotel.address
    ? `https://maps.google.com/?q=${encodeURIComponent(hotel.address)}`
    : undefined

  return (
    <section className="section">
      <div className="section-label">Basecamp</div>
      <div className="card hotel">
        <HotelFacade className="hotel-art" />
        <div className="hotel-body">
          <input
            className="hotel-name edit-field"
            placeholder="Hotel name…"
            value={hotel.name}
            onChange={(e) => onChange({ name: e.target.value })}
            spellCheck={false}
          />
          <textarea
            className="hotel-addr edit-field mono"
            placeholder="Address…"
            value={hotel.address}
            onChange={(e) => onChange({ address: e.target.value })}
            rows={2}
            spellCheck={false}
          />
          {mapsHref && (
            <a className="hotel-map mono" href={mapsHref} target="_blank" rel="noreferrer">
              open in maps →
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
