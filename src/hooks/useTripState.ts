import { useCallback, useEffect, useRef, useState } from 'react'
import type { TripState } from '../types'
import { SEED } from '../data/seed'

const STORAGE_KEY = 'badDecisionsTrip:v1'
const API = '/api/trip'
const POLL_MS = 8000
const PUSH_DEBOUNCE_MS = 600
const WRITE_DEBOUNCE_MS = 250

export type SyncStatus = 'idle' | 'syncing' | 'synced' | 'offline'

/**
 * Merge persisted state over the seed so that new seed fields (added in code)
 * still appear even when an older shape is in localStorage. Shallow-merges the
 * top level and keeps persisted arrays/objects where present.
 */
function loadInitial(): TripState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return SEED
    const saved = JSON.parse(raw) as Partial<TripState>
    return {
      ...SEED,
      ...saved,
      outbound: SEED.outbound,
      return: SEED.return,
      hotel: { ...SEED.hotel, ...saved.hotel },
      crew: saved.crew ?? SEED.crew,
      days: saved.days ?? SEED.days,
      updatedAt: saved.updatedAt ?? 0,
    }
  } catch {
    return SEED
  }
}

function persistLocal(state: TripState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    /* storage full / unavailable — ignore */
  }
}

/** True while the user is mid-keystroke in a text field, so a poll doesn't yank focus/value. */
function isEditingField(): boolean {
  const tag = document.activeElement?.tagName
  return tag === 'INPUT' || tag === 'TEXTAREA'
}

export function useTripState() {
  const [state, setState] = useState<TripState>(loadInitial)
  const [sync, setSync] = useState<SyncStatus>('idle')
  const stateRef = useRef(state)
  stateRef.current = state
  const writeTimer = useRef<number | undefined>(undefined)
  const pushTimer = useRef<number | undefined>(undefined)

  // Debounced localStorage persistence on every change.
  useEffect(() => {
    if (writeTimer.current) window.clearTimeout(writeTimer.current)
    writeTimer.current = window.setTimeout(() => persistLocal(state), WRITE_DEBOUNCE_MS)
    return () => {
      if (writeTimer.current) window.clearTimeout(writeTimer.current)
    }
  }, [state])

  // Debounced push to the shared server copy (separate, longer debounce to limit requests).
  useEffect(() => {
    if (pushTimer.current) window.clearTimeout(pushTimer.current)
    pushTimer.current = window.setTimeout(() => {
      setSync('syncing')
      fetch(API, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(state),
      })
        .then((r) => {
          if (!r.ok) throw new Error('push failed')
          setSync('synced')
        })
        .catch(() => setSync('offline'))
    }, PUSH_DEBOUNCE_MS)
    return () => {
      if (pushTimer.current) window.clearTimeout(pushTimer.current)
    }
  }, [state])

  const merge = useCallback((remote: TripState) => {
    if (isEditingField()) return // don't disrupt an in-progress edit
    if (remote.updatedAt > stateRef.current.updatedAt) {
      setState(remote)
      persistLocal(remote)
    }
  }, [])

  const pull = useCallback(() => {
    fetch(API)
      .then((r) => {
        if (!r.ok) throw new Error('pull failed')
        return r.json()
      })
      .then((remote: TripState | null) => {
        setSync('synced')
        if (remote) merge(remote)
      })
      .catch(() => setSync('offline'))
  }, [merge])

  useEffect(() => {
    pull()
    const id = window.setInterval(pull, POLL_MS)
    const onFocus = () => pull()
    window.addEventListener('focus', onFocus)
    document.addEventListener('visibilitychange', onFocus)
    return () => {
      window.clearInterval(id)
      window.removeEventListener('focus', onFocus)
      document.removeEventListener('visibilitychange', onFocus)
    }
  }, [pull])

  const update = useCallback((patch: Partial<TripState> | ((s: TripState) => TripState)) => {
    setState((prev) => {
      const next = typeof patch === 'function' ? patch(prev) : { ...prev, ...patch }
      return { ...next, updatedAt: Date.now() }
    })
  }, [])

  return { state, update, sync }
}
