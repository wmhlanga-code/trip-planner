import { useEffect, useState } from 'react'
import { SplitFlapRow } from './SplitFlapRow'
import { InstallButton } from './InstallButton'

interface Props {
  onEnter: () => void
}

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Airport split-flap departure board boot sequence.
 * Tapping anywhere before it finishes skips straight to the resolved end state.
 */
export function WelcomeScreen({ onEnter }: Props) {
  const [skipped, setSkipped] = useState(prefersReduced)
  const [showStamp, setShowStamp] = useState(prefersReduced)
  const [showBarcode, setShowBarcode] = useState(prefersReduced)
  const [showButton, setShowButton] = useState(prefersReduced)
  const [shake, setShake] = useState(false)

  useEffect(() => {
    if (prefersReduced) return
    const timers = [
      window.setTimeout(() => {
        setShowStamp(true)
        setShake(true)
        window.setTimeout(() => setShake(false), 180)
      }, 2300),
      window.setTimeout(() => setShowBarcode(true), 2650),
      window.setTimeout(() => setShowButton(true), 3200),
    ]
    return () => timers.forEach(window.clearTimeout)
  }, [])

  const skip = () => {
    if (skipped) return
    setSkipped(true)
    setShowStamp(true)
    setShowBarcode(true)
    setShowButton(true)
  }

  const reduced = prefersReduced || skipped

  return (
    <div
      className={`welcome${prefersReduced ? ' welcome--reduced' : ''}`}
      onClick={skip}
      role="button"
      tabIndex={0}
      aria-label="Welcome — tap to continue"
    >
      {!reduced && <div className="scanline" />}

      <div className={`welcome-hero${shake ? ' is-shake' : ''}`}>
        <SplitFlapRow
          text="WELCOME TO"
          startDelay={reduced ? 0 : 300}
          stagger={reduced ? 0 : 40}
          size="small"
          color="var(--sand)"
          reducedMotion={reduced}
        />

        <div className="sf-title">
          <SplitFlapRow
            text="BAD DECISIONS TRIP"
            startDelay={reduced ? 0 : 1200}
            stagger={reduced ? 0 : 42}
            size="large"
            reducedMotion={reduced}
          />
        </div>

        <div className={`stamp${showStamp ? ' is-in' : ''}`} aria-label="2026">
          <span className="stamp-ring" aria-hidden />
          <span className="stamp-text mono">2026</span>
        </div>

        <div className={`welcome-foot${showBarcode ? ' is-in' : ''}`}>
          <div className="barcode welcome-barcode" aria-hidden />
          <p className="welcome-flavor mono">MSP ⇄ SFO · JUL 08–15 · PARTY OF 5</p>
        </div>
      </div>

      <div
        className={`welcome-cta${showButton ? ' is-in' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {showButton && <InstallButton onEnter={onEnter} />}
      </div>
    </div>
  )
}
