import { useState } from 'react'
import type { Contact } from '../types'

interface Props {
  crew: Contact[]
  onChange: (crew: Contact[]) => void
}

export function Crew({ crew, onChange }: Props) {
  const [openId, setOpenId] = useState<string | null>(null)

  const patch = (id: string, p: Partial<Contact>) =>
    onChange(crew.map((c) => (c.id === id ? { ...c, ...p } : c)))

  const add = () => {
    const id = `c${Date.now().toString(36)}`
    onChange([...crew, { id, name: '' }])
    setOpenId(id)
  }

  const remove = (id: string) => {
    onChange(crew.filter((c) => c.id !== id))
    if (openId === id) setOpenId(null)
  }

  return (
    <section className="section">
      <div className="section-label">The crew · {crew.length}</div>

      <div className="chips">
        {crew.map((c) => (
          <button
            key={c.id}
            className={`chip${openId === c.id ? ' is-open' : ''}`}
            onClick={() => setOpenId(openId === c.id ? null : c.id)}
          >
            <span className="chip-dot" aria-hidden />
            {c.name || 'new traveler'}
          </button>
        ))}
        <button className="chip chip--add" onClick={add}>
          + add
        </button>
      </div>

      {openId && (
        <ContactCard
          key={openId}
          contact={crew.find((c) => c.id === openId)!}
          onPatch={(p) => patch(openId, p)}
          onRemove={() => remove(openId)}
        />
      )}
    </section>
  )
}

function ContactCard({
  contact,
  onPatch,
  onRemove,
}: {
  contact: Contact
  onPatch: (p: Partial<Contact>) => void
  onRemove: () => void
}) {
  return (
    <div className="card contact">
      <div className="contact-top">
        <input
          className="contact-name edit-field"
          placeholder="Name…"
          value={contact.name}
          onChange={(e) => onPatch({ name: e.target.value })}
          spellCheck={false}
        />
        <button className="contact-del mono" onClick={onRemove} aria-label="Remove traveler">
          remove
        </button>
      </div>

      <div className="contact-grid">
        <Field label="Phone" value={contact.phone} onChange={(v) => onPatch({ phone: v })} type="tel" />
        <Field label="Email" value={contact.email} onChange={(v) => onPatch({ email: v })} type="email" />
        <Field label="Birthday" value={contact.birthday} onChange={(v) => onPatch({ birthday: v })} />
        <Field
          label="Nationality"
          value={contact.nationality}
          onChange={(v) => onPatch({ nationality: v })}
        />
      </div>

      <div className="contact-actions">
        {contact.phone && (
          <a className="contact-btn" href={`tel:${contact.phone}`}>
            📞 call
          </a>
        )}
        {contact.phone && (
          <a className="contact-btn" href={`sms:${contact.phone}`}>
            💬 text
          </a>
        )}
        {contact.email && (
          <a className="contact-btn" href={`mailto:${contact.email}`}>
            ✉ email
          </a>
        )}
      </div>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
}: {
  label: string
  value?: string
  onChange: (v: string) => void
  type?: string
}) {
  return (
    <label className="field">
      <span className="field-label mono">{label}</span>
      <input
        className="field-input edit-field mono"
        type={type}
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="—"
        spellCheck={false}
      />
    </label>
  )
}
