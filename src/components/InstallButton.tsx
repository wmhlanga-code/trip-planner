import { useState } from 'react'
import { useInstallPrompt } from '../hooks/useInstallPrompt'

interface Props {
  onEnter: () => void
}

/**
 * Boarding-pass ticket-stub install button. Handles Android/Chrome native
 * prompt and the iOS Safari manual "Share → Add to Home Screen" flow.
 */
export function InstallButton({ onEnter }: Props) {
  const { mode, promptInstall } = useInstallPrompt()
  const [showIosSheet, setShowIosSheet] = useState(false)

  // Already installed / running standalone: no button, straight into the app.
  if (mode === 'installed') return null

  const handleClick = async () => {
    if (mode === 'ios') {
      setShowIosSheet(true)
      return
    }
    if (mode === 'native') {
      await promptInstall()
      return
    }
    // unsupported (desktop browser without native prompt) — just enter the app
    onEnter()
  }

  const label = mode === 'unsupported' ? 'Open the trip' : 'Add to home screen'

  return (
    <>
      <div className="install-wrap">
        <button className="stub-btn" onClick={handleClick}>
          <span className="stub-btn-notch stub-btn-notch--l" aria-hidden />
          <span className="stub-btn-notch stub-btn-notch--r" aria-hidden />
          <span className="stub-btn-icon" aria-hidden>
            <TicketGlyph />
          </span>
          <span className="stub-btn-text">{label}</span>
        </button>
        <button className="enter-link mono" onClick={onEnter}>
          skip · continue to trip →
        </button>
      </div>

      {showIosSheet && <IosInstallSheet onClose={() => setShowIosSheet(false)} />}
    </>
  )
}

function TicketGlyph() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6h16v3.2a2 2 0 0 0 0 5.6V18H4v-3.2a2 2 0 0 0 0-5.6V6Z"
        fill="currentColor"
      />
      <line x1="14" y1="6" x2="14" y2="18" stroke="var(--navy)" strokeWidth="1.4" strokeDasharray="1.6 1.8" />
    </svg>
  )
}

function IosInstallSheet({ onClose }: { onClose: () => void }) {
  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-grip" />
        <h3 className="sheet-title">Add to your home screen</h3>
        <p className="sheet-body">
          This one's on Apple — Safari can't do it for you. Two taps:
        </p>
        <ol className="sheet-steps mono">
          <li>
            <span className="sheet-step-icon" aria-hidden>
              <ShareGlyph />
            </span>
            <span>
              Tap the <b>Share</b> icon in Safari's toolbar
            </span>
          </li>
          <li>
            <span className="sheet-step-icon" aria-hidden>
              <PlusSquareGlyph />
            </span>
            <span>
              Choose <b>Add to Home Screen</b>
            </span>
          </li>
        </ol>
        <button className="sheet-close" onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  )
}

function ShareGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3v11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 7l4-4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M6 11H5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function PlusSquareGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
