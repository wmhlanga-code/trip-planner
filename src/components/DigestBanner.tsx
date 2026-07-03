import type { TripDay } from '../types'
import { useDailyDigest } from '../hooks/useDailyDigest'

export function DigestBanner({ days }: { days: TripDay[] }) {
  const { digest, permission, requestPermission, dismiss } = useDailyDigest(days)

  if (!digest) return null

  return (
    <div className="digest">
      <div className="digest-head">
        <span className="digest-bell" aria-hidden>
          🔔
        </span>
        <span className="digest-title">{digest.title}</span>
        <button className="digest-close" onClick={dismiss} aria-label="Dismiss">
          ×
        </button>
      </div>
      <pre className="digest-body mono">{digest.body}</pre>
      {permission === 'default' && (
        <button className="digest-enable mono" onClick={requestPermission}>
          + enable daily reminders on this device
        </button>
      )}
      {permission === 'denied' && (
        <p className="digest-denied mono">
          Notifications blocked — enable them in your browser's site settings to get these as
          alerts.
        </p>
      )}
    </div>
  )
}
