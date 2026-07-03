import { useState } from 'react'
import { WelcomeScreen } from './components/WelcomeScreen'
import { DigestBanner } from './components/DigestBanner'
import { BoardingPass } from './components/BoardingPass'
import { HotelCard } from './components/HotelCard'
import { Crew } from './components/Crew'
import { Itinerary } from './components/Itinerary'
import { Budget } from './components/Budget'
import { useTripState } from './hooks/useTripState'

const SYNC_LABEL: Record<string, string> = {
  idle: '',
  syncing: 'saving…',
  synced: 'synced with the crew',
  offline: 'offline · saved on this device only',
}

export default function App() {
  const { state, update, sync } = useTripState()
  const [entered, setEntered] = useState(
    () => sessionStorage.getItem('hasSeenWelcome') === '1',
  )

  const enter = () => {
    sessionStorage.setItem('hasSeenWelcome', '1')
    setEntered(true)
  }

  if (!entered) return <WelcomeScreen onEnter={enter} />

  return (
    <div className="app">
      <DigestBanner days={state.days} />

      <BoardingPass
        tripName={state.tripName}
        outbound={state.outbound}
        inbound={state.return}
        onTripNameChange={(tripName) => update({ tripName })}
      />

      <HotelCard hotel={state.hotel} onChange={(p) => update((s) => ({ ...s, hotel: { ...s.hotel, ...p } }))} />

      <Crew crew={state.crew} onChange={(crew) => update({ crew })} />

      <Itinerary days={state.days} crew={state.crew} onChange={(days) => update({ days })} />

      <Budget days={state.days} crew={state.crew} />

      <footer className="app-foot mono">
        MSP ⇄ SFO · JUL 08–15 2026 · made for bad decisions
        {SYNC_LABEL[sync] && (
          <span className={`sync-status sync-status--${sync}`}> · {SYNC_LABEL[sync]}</span>
        )}
      </footer>
    </div>
  )
}
