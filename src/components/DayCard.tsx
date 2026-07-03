import type { Activity, Contact, TripDay } from '../types'
import { DayCover, TimeIcon } from './Illustrations'
import { money } from '../lib/budget'

interface Props {
  day: TripDay
  crew: Contact[]
  open: boolean
  onToggle: () => void
  onChange: (day: TripDay) => void
}

const WEEKDAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function fmtDate(iso: string) {
  const d = new Date(iso + 'T12:00:00')
  return { wd: WEEKDAY[d.getDay()], md: `${MONTH[d.getMonth()]} ${d.getDate()}` }
}

function hourOf(time: string): number | null {
  if (!time) return null
  const h = parseInt(time.split(':')[0], 10)
  return Number.isFinite(h) ? h : null
}

export function DayCard({ day, crew, open, onToggle, onChange }: Props) {
  const { wd, md } = fmtDate(day.date)
  const subtotal = day.activities.reduce((s, a) => s + (Number.isFinite(a.cost) ? a.cost : 0), 0)

  const patchAct = (id: string, p: Partial<Activity>) =>
    onChange({ ...day, activities: day.activities.map((a) => (a.id === id ? { ...a, ...p } : a)) })

  const addAct = () =>
    onChange({
      ...day,
      activities: [
        ...day.activities,
        { id: `a${Date.now().toString(36)}`, time: '', name: '', cost: 0, notes: '', splitWith: [] },
      ],
    })

  const removeAct = (id: string) =>
    onChange({ ...day, activities: day.activities.filter((a) => a.id !== id) })

  return (
    <div className={`daycard${open ? ' is-open' : ''}`}>
      <button className="daycard-head" onClick={onToggle} aria-expanded={open}>
        <div className="daycard-cover">
          <DayCover theme={day.theme} className="daycover-svg" />
          <span className="daystamp mono" aria-hidden>
            <span className="daystamp-inner">
              DAY
              <b>{day.dayNumber}</b>
            </span>
          </span>
        </div>
        <div className="daycard-meta">
          <div className="daycard-date mono">
            {wd} · {md}
          </div>
          <div className="daycard-title">{day.title}</div>
          <div className="daycard-sub mono">
            {day.activities.length} stop{day.activities.length === 1 ? '' : 's'}
            {subtotal > 0 && <> · {money(subtotal)}</>}
          </div>
        </div>
        <span className={`daycard-chev${open ? ' is-open' : ''}`} aria-hidden>
          ▾
        </span>
      </button>

      {open && (
        <div className="daycard-body">
          <input
            className="day-title-edit edit-field"
            value={day.title}
            onChange={(e) => onChange({ ...day, title: e.target.value })}
            aria-label="Day title"
            spellCheck={false}
          />
          <div className="timeline">
            {day.activities.map((a) => (
              <ActivityRow
                key={a.id}
                activity={a}
                crew={crew}
                hour={hourOf(a.time)}
                onPatch={(p) => patchAct(a.id, p)}
                onRemove={() => removeAct(a.id)}
              />
            ))}
            {day.activities.length === 0 && (
              <p className="timeline-empty mono">No plans yet. Add the first stop →</p>
            )}
          </div>
          <button className="add-act mono" onClick={addAct}>
            + add activity
          </button>
        </div>
      )}
    </div>
  )
}

function ActivityRow({
  activity,
  crew,
  hour,
  onPatch,
  onRemove,
}: {
  activity: Activity
  crew: Contact[]
  hour: number | null
  onPatch: (p: Partial<Activity>) => void
  onRemove: () => void
}) {
  const everyone = activity.splitWith.length === 0
  const toggle = (id: string) => {
    // start from an explicit full list when leaving "everyone" so removing one works
    const base = everyone ? crew.map((c) => c.id) : activity.splitWith
    const next = base.includes(id) ? base.filter((x) => x !== id) : [...base, id]
    // if it lands back on the whole crew, normalize to "everyone" (empty)
    onPatch({ splitWith: next.length === crew.length ? [] : next })
  }

  return (
    <div className="tl-item">
      <div className="tl-marker">
        <TimeIcon hour={hour} className="tl-icon" />
        <span className="tl-line" aria-hidden />
      </div>
      <div className="tl-content">
        <div className="tl-row1">
          <input
            className="tl-time edit-field mono"
            value={activity.time}
            onChange={(e) => onPatch({ time: e.target.value })}
            placeholder="—:—"
            aria-label="Time"
          />
          <input
            className="tl-name edit-field"
            value={activity.name}
            onChange={(e) => onPatch({ name: e.target.value })}
            placeholder="Activity…"
            spellCheck={false}
          />
          <button className="tl-del" onClick={onRemove} aria-label="Remove activity">
            ×
          </button>
        </div>

        <div className="tl-row2">
          <label className="tl-cost mono">
            $
            <input
              className="edit-field tl-cost-input"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={activity.cost || ''}
              onChange={(e) => onPatch({ cost: parseFloat(e.target.value) || 0 })}
              placeholder="0"
            />
          </label>
          <div className="tl-split">
            <span className="tl-split-label mono">{everyone ? 'split: everyone' : 'split:'}</span>
            {crew.map((c) => {
              const on = everyone || activity.splitWith.includes(c.id)
              return (
                <button
                  key={c.id}
                  className={`split-chip${on ? ' is-on' : ''}`}
                  onClick={() => toggle(c.id)}
                  title={c.name}
                >
                  {c.name ? c.name[0] : '?'}
                </button>
              )
            })}
          </div>
        </div>

        <textarea
          className="tl-notes edit-field"
          value={activity.notes}
          onChange={(e) => onPatch({ notes: e.target.value })}
          placeholder="Notes…"
          rows={3}
          spellCheck={false}
        />
      </div>
    </div>
  )
}
