import { useEffect, useRef, useState } from 'react'

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#&%'

interface Props {
  finalChar: string
  /** ms before this tile starts cycling */
  delay: number
  reducedMotion: boolean
}

/**
 * A single mechanical split-flap tile. Cycles random glyphs on a rotateX flip
 * for 8–12 frames, then clunks to `finalChar`.
 */
export function SplitFlapChar({ finalChar, delay, reducedMotion }: Props) {
  const [char, setChar] = useState(reducedMotion ? finalChar : ' ')
  const [flip, setFlip] = useState(false)
  const [settled, setSettled] = useState(reducedMotion)
  const raf = useRef<number[]>([])

  useEffect(() => {
    if (reducedMotion) {
      setChar(finalChar)
      setSettled(true)
      return
    }
    const timers: number[] = []
    const frames = 8 + Math.floor(Math.random() * 5) // 8–12
    const startT = window.setTimeout(() => {
      let i = 0
      const step = () => {
        if (i < frames) {
          setChar(GLYPHS[Math.floor(Math.random() * GLYPHS.length)])
          setFlip((f) => !f)
          i++
          timers.push(window.setTimeout(step, 45))
        } else {
          setChar(finalChar === ' ' ? ' ' : finalChar)
          setFlip((f) => !f)
          setSettled(true)
        }
      }
      step()
    }, delay)
    timers.push(startT)
    raf.current = timers
    return () => timers.forEach((t) => window.clearTimeout(t))
  }, [finalChar, delay, reducedMotion])

  const display = char === ' ' ? ' ' : char

  return (
    <span className={`sf-tile${settled ? ' is-settled' : ''}`}>
      <span className={`sf-inner${flip ? ' sf-flip' : ''}`}>{display}</span>
    </span>
  )
}
