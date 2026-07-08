export interface FlightLeg {
  flightNo: string
  aircraft: string
  cabin?: string
  dateLabel: string
  fromCode: string
  fromCity: string
  toCode: string
  toCity: string
  departTime: string
  arriveTime: string
  duration: string
}

export interface Contact {
  id: string
  name: string
  phone?: string
  email?: string
  birthday?: string
  nationality?: string
}

export interface Activity {
  id: string
  time: string // "HH:MM" 24h, drives sun/moon icon; empty = untimed
  name: string
  cost: number // total cost for the activity
  notes: string
  /** ids of crew splitting this cost; empty = split evenly across whole crew */
  splitWith: string[]
}

export type DayTheme =
  | 'rowhouses'
  | 'park'
  | 'billiards'
  | 'island'
  | 'bridge'
  | 'pier'
  | 'sunset'
  | 'plane'

export interface TripDay {
  id: string
  date: string // ISO yyyy-mm-dd
  dayNumber: number
  title: string
  theme: DayTheme
  activities: Activity[]
}

export interface Hotel {
  name: string
  address: string
}

export interface TripState {
  tripName: string
  outbound: FlightLeg
  return: FlightLeg
  hotel: Hotel
  crew: Contact[]
  days: TripDay[]
  /** ms since epoch of the last edit; used for last-write-wins sync across devices */
  updatedAt: number
}
