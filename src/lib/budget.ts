import type { Contact, TripDay } from '../types'

export function money(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })
}

export interface PersonTotals {
  contact: Contact
  total: number
}

export interface BudgetSummary {
  grandTotal: number
  perDay: { day: TripDay; subtotal: number }[]
  perPerson: PersonTotals[]
}

/**
 * Even-split by default: an activity with an empty `splitWith` divides evenly
 * across the whole crew; otherwise it divides only among the listed ids.
 */
export function computeBudget(days: TripDay[], crew: Contact[]): BudgetSummary {
  const perPersonMap = new Map<string, number>()
  crew.forEach((c) => perPersonMap.set(c.id, 0))

  let grandTotal = 0
  const perDay = days.map((day) => {
    let subtotal = 0
    day.activities.forEach((a) => {
      const cost = Number.isFinite(a.cost) ? a.cost : 0
      subtotal += cost
      const sharers = a.splitWith.length > 0 ? a.splitWith : crew.map((c) => c.id)
      const valid = sharers.filter((id) => perPersonMap.has(id))
      if (valid.length === 0) return
      const share = cost / valid.length
      valid.forEach((id) => perPersonMap.set(id, (perPersonMap.get(id) ?? 0) + share))
    })
    grandTotal += subtotal
    return { day, subtotal }
  })

  const perPerson = crew.map((c) => ({ contact: c, total: perPersonMap.get(c.id) ?? 0 }))

  return { grandTotal, perDay, perPerson }
}
