import { SplitFlapChar } from './SplitFlapChar'

interface Props {
  text: string
  /** ms before the first tile starts */
  startDelay: number
  /** ms between successive tiles */
  stagger: number
  size: 'small' | 'large'
  color?: string
  reducedMotion: boolean
}

export function SplitFlapRow({ text, startDelay, stagger, size, color, reducedMotion }: Props) {
  const words = text.split(' ')
  let charIndex = 0

  return (
    <div className={`sf-row sf-${size}`} style={color ? { color } : undefined} aria-label={text}>
      {words.map((word, wi) => {
        const tiles = word.split('').map((c) => {
          const delay = startDelay + charIndex * stagger
          charIndex++
          return <SplitFlapChar key={`${wi}-${c}-${charIndex}`} finalChar={c} delay={delay} reducedMotion={reducedMotion} />
        })
        if (wi < words.length - 1) charIndex++ // account for the space between words
        return (
          <span className="sf-word" key={wi}>
            {tiles}
          </span>
        )
      })}
    </div>
  )
}
