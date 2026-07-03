import { useCallback, useEffect, useState } from 'react'
import type { TripDay } from '../types'
import { buildTodayDigest, localISODate, type Digest } from '../lib/digest'

const LAST_NOTIFIED_KEY = 'badDecisionsTrip:lastNotifiedDate'
const DISMISSED_SESSION_KEY = 'badDecisionsTrip:digestDismissedDate'

type PermissionState = NotificationPermission | 'unsupported'

function getPermission(): PermissionState {
  if (typeof window === 'undefined' || !('Notification' in window)) return 'unsupported'
  return Notification.permission
}

async function fireNativeNotification(digest: Digest) {
  const options: NotificationOptions = {
    body: digest.body,
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: 'daily-digest',
  }
  try {
    if ('serviceWorker' in navigator) {
      const reg = await navigator.serviceWorker.ready
      await reg.showNotification(digest.title, options)
      return
    }
  } catch {
    /* fall through to plain Notification */
  }
  try {
    new Notification(digest.title, options)
  } catch {
    /* environment doesn't allow it — in-app banner still covers this */
  }
}

/**
 * Once per calendar day, surfaces a single consolidated "today's plan" digest:
 * always as an in-app banner, and additionally as a native OS notification if
 * permission has been granted. Only fires while the app is actually open —
 * there's no backend to push this while the app is closed.
 */
export function useDailyDigest(days: TripDay[]) {
  const [digest, setDigest] = useState<Digest | null>(null)
  const [permission, setPermission] = useState<PermissionState>(getPermission)

  const evaluate = useCallback(() => {
    const now = new Date()
    const today = localISODate(now)
    const found = buildTodayDigest(days, now)

    if (!found) {
      setDigest(null)
      return
    }

    const dismissedDate = sessionStorage.getItem(DISMISSED_SESSION_KEY)
    setDigest(dismissedDate === today ? null : found)

    if (getPermission() === 'granted' && localStorage.getItem(LAST_NOTIFIED_KEY) !== today) {
      localStorage.setItem(LAST_NOTIFIED_KEY, today)
      fireNativeNotification(found)
    }
  }, [days])

  useEffect(() => {
    evaluate()
    const onFocus = () => evaluate()
    window.addEventListener('focus', onFocus)
    document.addEventListener('visibilitychange', onFocus)
    const id = window.setInterval(evaluate, 5 * 60_000)
    return () => {
      window.removeEventListener('focus', onFocus)
      document.removeEventListener('visibilitychange', onFocus)
      window.clearInterval(id)
    }
  }, [evaluate])

  const requestPermission = useCallback(async () => {
    if (!('Notification' in window)) return
    const result = await Notification.requestPermission()
    setPermission(result)
    if (result === 'granted') evaluate()
  }, [evaluate])

  const dismiss = useCallback(() => {
    sessionStorage.setItem(DISMISSED_SESSION_KEY, localISODate(new Date()))
    setDigest(null)
  }, [])

  return { digest, permission, requestPermission, dismiss }
}
