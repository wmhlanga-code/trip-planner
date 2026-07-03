import type { TripState } from '../types'

/**
 * Seed data for the trip. Flights + crew names + day themes are locked in.
 * Itinerary activities, contact details, hotel, and costs are placeholders
 * that are meant to be edited in-app (and persisted to localStorage) or
 * pasted in here once the real data is confirmed.
 */
export const SEED: TripState = {
  tripName: 'The Bad Decisions Trip',
  outbound: {
    flightNo: 'DL 2074',
    aircraft: 'Boeing 737-900',
    cabin: 'Delta Main Basic economy',
    dateLabel: 'Wed · Jul 8, 2026',
    fromCode: 'MSP',
    fromCity: 'Minneapolis',
    toCode: 'SFO',
    toCity: 'San Francisco',
    departTime: '11:00 AM',
    arriveTime: '1:09 PM',
    duration: '4h 9m',
  },
  return: {
    flightNo: 'DL 756',
    aircraft: 'Airbus A321neo',
    cabin: 'Delta Main Basic economy',
    dateLabel: 'Wed · Jul 15, 2026',
    fromCode: 'SFO',
    fromCity: 'San Francisco',
    toCode: 'MSP',
    toCity: 'Minneapolis',
    departTime: '6:25 PM',
    arriveTime: '11:56 PM',
    duration: '3h 31m',
  },
  hotel: {
    name: '',
    address: '',
  },
  crew: [
    { id: 'ikareach', name: 'Ikareach' },
    { id: 'lucio', name: 'Lucio' },
    { id: 'jeremy', name: 'Jeremy' },
    { id: 'wethu', name: 'Wethu' },
    { id: 'yongdu', name: 'Yongdu' },
  ],
  days: [
    { id: 'd1', date: '2026-07-08', dayNumber: 1, title: 'Arrival night', theme: 'ferry-moon', activities: [] },
    { id: 'd2', date: '2026-07-09', dayNumber: 2, title: 'Exploratorium', theme: 'pier', activities: [] },
    { id: 'd3', date: '2026-07-10', dayNumber: 3, title: 'Golden Gate', theme: 'bridge', activities: [] },
    { id: 'd4', date: '2026-07-11', dayNumber: 4, title: 'Six Flags', theme: 'coaster', activities: [] },
    { id: 'd5', date: '2026-07-12', dayNumber: 5, title: 'Mount Diablo', theme: 'mountain', activities: [] },
    { id: 'd6', date: '2026-07-13', dayNumber: 6, title: 'Berkeley', theme: 'clocktower', activities: [] },
    { id: 'd7', date: '2026-07-14', dayNumber: 7, title: 'Dolores Park', theme: 'park', activities: [] },
    { id: 'd8', date: '2026-07-15', dayNumber: 8, title: 'Last day', theme: 'sunset', activities: [] },
  ],
  updatedAt: 0,
}

/** Trip window used by the countdown logic. */
export const TRIP_START = new Date('2026-07-08T11:00:00-05:00') // MSP takeoff (CDT)
export const TRIP_END = new Date('2026-07-15T18:25:00-07:00') // SFO takeoff home (PDT)
