import type { FlightLeg } from '../types'
import { useCountdown } from '../hooks/useCountdown'

interface Props {
  tripName: string
  outbound: FlightLeg
  inbound: FlightLeg
  onTripNameChange: (v: string) => void
}

function pad(n: number) {
  return n.toString().padStart(2, '0')
}

export function BoardingPass({ tripName, outbound, inbound, onTripNameChange }: Props) {
  const cd = useCountdown()

  return (
    <section className="section">
      <div className="section-label">Boarding pass</div>
      <div className="pass">
        {/* header */}
        <div className="pass-head">
          <div className="pass-brand mono">DELTA · BAD DECISIONS AIR</div>
          <input
            className="pass-name edit-field"
            value={tripName}
            onChange={(e) => onTripNameChange(e.target.value)}
            aria-label="Trip name"
            spellCheck={false}
          />
        </div>

        {/* route */}
        <div className="pass-route">
          <div className="pass-port">
            <div className="pass-code">{outbound.fromCode}</div>
            <div className="pass-city mono">{outbound.fromCity}</div>
          </div>
          <div className="pass-mid">
            <span className="pass-plane" aria-hidden>
              ✈
            </span>
            <span className="pass-dashes" aria-hidden />
          </div>
          <div className="pass-port pass-port--r">
            <div className="pass-code">{outbound.toCode}</div>
            <div className="pass-city mono">{outbound.toCity}</div>
          </div>
        </div>

        {/* legs */}
        <div className="pass-legs">
          <LegRow tag="Out" leg={outbound} />
          <LegRow tag="Back" leg={inbound} />
        </div>

        {/* countdown */}
        <div className="pass-count perf">
          <div className="pass-count-label mono">{cd.label}</div>
          {cd.phase === 'after' ? (
            <div className="pass-count-done">🌉 that was a trip</div>
          ) : (
            <div className="pass-count-clock tnum">
              <span className="cc-days">{cd.days}</span>
              <span className="cc-daylabel mono">d</span>
              <span className="cc-time">
                {pad(cd.hours)}:{pad(cd.minutes)}:{pad(cd.seconds)}
              </span>
            </div>
          )}
        </div>

        {/* stub barcode */}
        <div className="pass-barcode-wrap perf">
          <div className="barcode pass-barcode" aria-hidden />
          <div className="pass-seat mono">
            <span>SEAT · GRP 5</span>
            <span>{outbound.cabin}</span>
          </div>
        </div>

        <span className="pass-notch pass-notch--l" aria-hidden />
        <span className="pass-notch pass-notch--r" aria-hidden />
      </div>
    </section>
  )
}

function LegRow({ tag, leg }: { tag: string; leg: FlightLeg }) {
  return (
    <div className="leg">
      <div className="leg-tag mono">{tag}</div>
      <div className="leg-main">
        <div className="leg-line1">
          <span className="leg-flight mono">{leg.flightNo}</span>
          <span className="leg-date mono">{leg.dateLabel}</span>
        </div>
        <div className="leg-times tnum">
          <span>{leg.departTime}</span>
          <span className="leg-arrow" aria-hidden>
            →
          </span>
          <span>{leg.arriveTime}</span>
          <span className="leg-dur mono">{leg.duration}</span>
        </div>
        <div className="leg-aircraft mono">{leg.aircraft}</div>
      </div>
    </div>
  )
}
