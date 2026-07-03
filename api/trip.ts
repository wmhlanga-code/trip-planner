import { Redis } from '@upstash/redis'

export const config = { runtime: 'edge' }

const KEY = 'badDecisionsTrip:shared'

// Vercel's Marketplace Redis (Upstash) integration has used a couple of
// naming conventions over time — check both.
const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL
const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN
const redis = url && token ? new Redis({ url, token }) : null

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  })
}

/**
 * Single shared trip document, backed by a Redis store connected via the
 * Vercel dashboard. No auth — anyone with the deployed link can read/write,
 * matching the "small trusted group" use case. Returns 503 when no store is
 * connected (e.g. local `vite dev`), which the client treats as "offline" and
 * continues on localStorage alone.
 */
export default async function handler(req: Request): Promise<Response> {
  if (!redis) return json({ error: 'sync unavailable' }, 503)

  try {
    if (req.method === 'GET') {
      const data = await redis.get(KEY)
      return json(data ?? null)
    }
    if (req.method === 'PUT' || req.method === 'POST') {
      const body = await req.json()
      await redis.set(KEY, body)
      return json({ ok: true })
    }
    return new Response('Method not allowed', { status: 405 })
  } catch {
    return json({ error: 'sync unavailable' }, 503)
  }
}
