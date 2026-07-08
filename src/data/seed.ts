import type { TripState, Activity } from '../types'

function act(id: string, time: string, name: string, costPerPerson: number, notes: string): Activity {
  // Costs come in as real per-person estimates; store the 5-way total so the
  // default even split reproduces that same per-person figure.
  return { id, time, name, cost: costPerPerson * 5, notes, splitWith: [] }
}

/**
 * Seed data for the trip. Flights + crew names + the full day-by-day plan are
 * locked in from the group's real itinerary — replanned around public transit
 * only (Muni/BART/ferry), no rideshare-dependent stops. Everything here is
 * still editable in-app.
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
    name: 'SF Central Hotel',
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
    {
      id: 'd1',
      date: '2026-07-08',
      dayNumber: 1,
      title: 'Arrival and Hayes Valley',
      theme: 'rowhouses',
      activities: [
        act(
          'd1a1',
          '13:09',
          'Land at SFO (Delta DL 2074)',
          11,
          "BART SFO to Civic Center (~30 min), then a short walk to the hotel. Elevators at every station for the luggage. Cheaper than a rideshare and usually just as fast in weekday traffic. Carry-on included in fare. Hotel check-in is usually 3 PM — drop bags at the front desk if the room isn't ready yet.",
        ),
        act(
          'd1a2',
          '15:30',
          'Explore Hayes Valley',
          0,
          '8 min walk from the hotel. Boutiques, coffee, a chill first-afternoon vibe. Patricia\'s Green park sits right in the middle.',
        ),
        act(
          'd1a3',
          '17:00',
          'Painted Ladies photo stop',
          0,
          'Alamo Square, 10 min walk from Hayes Valley. Iconic Victorian houses plus the skyline behind them — great at golden hour.',
        ),
        act(
          'd1a4',
          '19:00',
          'Welcome dinner — suggestion: Souvla',
          18,
          "This was left open in the plan, so here's a pick: Souvla is casual, affordable Greek right in Hayes Valley — easy for a big group on night one. Swap it for wherever the crew actually wants.",
        ),
      ],
    },
    {
      id: 'd2',
      date: '2026-07-09',
      dayNumber: 2,
      title: 'Golden Gate Park and Haight',
      theme: 'park',
      activities: [
        act(
          'd2a1',
          '09:30',
          'Golden Gate Park',
          0,
          'East entrance. Muni 7 or N-Judah from Market St, ~20 min. Huge park — Conservatory of Flowers, gardens, lakes. Wear comfy shoes.',
        ),
        act(
          'd2a2',
          '11:00',
          'Japanese Tea Garden or de Young Museum',
          9,
          'Pick one — Tea Garden ~$9 is the cheaper option, de Young is ~$15-20 but its tower has a free observation level with park views. Walk within the park.',
        ),
        act(
          'd2a3',
          '13:00',
          'Lunch on Haight St',
          12,
          'Walk east from the park into Haight-Ashbury. Cheap eats all along the street — pizza slices, Thai, burgers.',
        ),
        act(
          'd2a4',
          '14:00',
          'Amoeba Music and thrift crawl',
          0,
          'Amoeba is a legendary record store. Relic Vintage and Wasteland for thrifting nearby, all free to browse.',
        ),
        act(
          'd2a5',
          '18:30',
          'Dinner back near the hotel',
          15,
          'Hayes Valley / Market St. Muni 7 back down Haight St. Easy night — rest up for the rest of the week.',
        ),
      ],
    },
    {
      id: 'd3',
      date: '2026-07-10',
      dayNumber: 3,
      title: 'Mission, Castro and The Hall',
      theme: 'billiards',
      activities: [
        act(
          'd3a1',
          '10:00',
          'Mission Dolores Park',
          0,
          'Dolores St & 19th St. Walk ~20 min or Muni J. The sunniest park in SF, with skyline views and a spikeball/volleyball crowd — claim a hill spot.',
        ),
        act(
          'd3a2',
          '12:30',
          'Clarion Alley murals',
          0,
          'Between 17th/18th, Mission/Valencia. 10 min walk. A full block of community murals — some of the best free art in the city.',
        ),
        act(
          'd3a3',
          '13:00',
          'Lunch — El Farolito',
          11,
          '2779 Mission St. Legendary burritos, huge portions. Cash only — there\'s an ATM inside.',
        ),
        act(
          'd3a4',
          '14:30',
          'The Castro',
          6,
          '15 min walk west. Rainbow Honor Walk, Castro Theatre, shops. Bi-Rite Creamery for ice cream on the way back, about $6.',
        ),
        act(
          'd3a5',
          '17:00',
          'The Hall SF — bar and billiards',
          18,
          "2565 Mission St. Pool tables on two floors, solid food. Opens 5 PM. It's a bar — call ahead (+1 415-612-6292) to confirm under-21s are allowed in.",
        ),
        act(
          'd3a6',
          '20:00',
          'Dinner in the Mission',
          15,
          'Valencia St has tons of options. The Mission stays lively late.',
        ),
      ],
    },
    {
      id: 'd4',
      date: '2026-07-11',
      dayNumber: 4,
      title: 'Angel Island hike day (by ferry)',
      theme: 'island',
      activities: [
        act(
          'd4a1',
          '09:00',
          'Muni to Pier 41',
          3,
          "F-line streetcar or Muni bus to Fisherman's Wharf, Pier 41. Grab pastries or coffee at the wharf before the boat.",
        ),
        act(
          'd4a2',
          '09:45',
          'Ferry to Angel Island',
          20,
          'Blue & Gold Fleet ferry from Pier 41, about 25 min across the bay. This swaps out Mount Diablo, which really has no public transit option and needs a car — Angel Island gets you a full hiking day using nothing but the ferry. Book online ahead on summer weekends, it can sell out.',
        ),
        act(
          'd4a3',
          '10:15',
          'Perimeter Trail hike',
          0,
          'About 5 miles around the island, mostly flat with a couple of climbs. Bay Bridge, Golden Gate, Alcatraz and downtown SF views from nearly every angle — arguably the best panoramic views in the whole Bay Area. Bring your own water and lunch, services on the island are limited.',
        ),
        act(
          'd4a4',
          '13:00',
          'Immigration Station and picnic lunch',
          0,
          "The old immigration station, sometimes called the 'Ellis Island of the West' — small museum, moving history. Great picnic spots overlooking the bay nearby.",
        ),
        act(
          'd4a5',
          '16:00',
          'Ferry back and recovery dinner',
          18,
          'Catch an afternoon ferry back to Pier 41 — check the schedule, later boats can be limited. Dinner near the Wharf or back in Hayes Valley.',
        ),
      ],
    },
    {
      id: 'd5',
      date: '2026-07-12',
      dayNumber: 5,
      title: 'Baker Beach and Fort Point sunset',
      theme: 'bridge',
      activities: [
        act(
          'd5a1',
          '10:30',
          'Chill morning and picnic supplies',
          10,
          "Near the hotel. Sleep in after yesterday's hike, then grab beach snacks and drinks.",
        ),
        act(
          'd5a2',
          '12:00',
          'Baker Beach afternoon',
          3,
          'Presidio. Muni 28 bus from the Van Ness/Market area, ~30 min, then a short walk. THE Golden Gate Bridge beach photo spot — 15 min stair walk down, wear real shoes. Water is cold; foggy mornings usually clear by ~11 AM.',
        ),
        act(
          'd5a3',
          '16:30',
          'Early dinner near the bridge',
          14,
          'Presidio / Richmond District. Clement St has great cheap Asian food. Eat before the sunset mission.',
        ),
        act(
          'd5a4',
          '18:45',
          'Fort Point sunset',
          0,
          "Right underneath the south tower of the bridge — dramatic straight-up views of the underside of the span, and it's free. Reachable by the free PresidiGo shuttle from the Presidio Transit Center or the Muni 28 bus plus a short walk — no car needed, unlike Battery Spencer across the bridge in Marin, which really only works by car or rideshare. Sunset ~8:15 PM, very windy, bring a jacket.",
        ),
      ],
    },
    {
      id: 'd6',
      date: '2026-07-13',
      dayNumber: 6,
      title: 'Ferry Building, Exploratorium and Pier 39',
      theme: 'pier',
      activities: [
        act(
          'd6a1',
          '09:30',
          'Ferry Building breakfast',
          13,
          '1 Ferry Building, Embarcadero. Muni F streetcar down Market St from the hotel. An SF icon — food hall, waterfront views, local shops.',
        ),
        act(
          'd6a2',
          '10:30',
          'Exploratorium',
          32,
          'Pier 15. 10 min walk. A massive interactive science museum, genuinely fun for adults — plan 3+ hours. Closed Mondays some seasons, so check hours and swap with Tuesday if needed.',
        ),
        act(
          'd6a3',
          '14:00',
          'Pier 39 and Fisherman\'s Wharf',
          0,
          'Walk the Embarcadero north. Free sea lions at the back of the pier, Alcatraz views, street performers. Skip the overpriced sit-down restaurants.',
        ),
        act(
          'd6a4',
          '17:30',
          'North Beach dinner',
          13,
          'Little Italy. 10 min walk. Pizza slices, City Lights Bookstore, Washington Square. Optional: walk up to free-to-visit Coit Tower for city views.',
        ),
      ],
    },
    {
      id: 'd7',
      date: '2026-07-14',
      dayNumber: 7,
      title: 'Lands End, Ocean Beach and Twin Peaks sunset',
      theme: 'sunset',
      activities: [
        act(
          'd7a1',
          '09:30',
          'Lands End Trail hike',
          0,
          'Point Lobos Ave trailhead. Muni 38R from Market St, ~35 min. An in-city coastal hike, ~3.4 miles — cliffside Golden Gate views, Sutro Baths ruins, a Mile Rock Beach detour. Easily the best hike inside SF.',
        ),
        act(
          'd7a2',
          '12:30',
          'Lunch near Ocean Beach',
          12,
          'Outer Richmond / Judah St. Cheap eats around La Playa and Judah, or picnic right on the beach.',
        ),
        act(
          'd7a3',
          '13:30',
          'Ocean Beach hang',
          0,
          'Miles of Pacific beach. Too cold and dangerous to swim, but great to hang out — bonfire pits if the rules allow.',
        ),
        act(
          'd7a4',
          '18:30',
          'Twin Peaks sunset',
          3,
          '501 Twin Peaks Blvd. Muni K to Castro, then a steep 15 min walk up (or the 37 bus goes closer to the top). A 360-degree panoramic view of the whole city — windy, bring layers. Sunset ~8:15 PM. Alternative: Bernal Heights, less crowded and a gentler climb.',
        ),
        act(
          'd7a5',
          '21:00',
          'Last night dinner — Mission or Castro',
          17,
          'Walk down from Twin Peaks through Castro. End the night in a favorite neighborhood.',
        ),
      ],
    },
    {
      id: 'd8',
      date: '2026-07-15',
      dayNumber: 8,
      title: 'Last morning and departure',
      theme: 'plane',
      activities: [
        act(
          'd8a1',
          '10:00',
          'Check out and store bags',
          0,
          'SF Central Hotel. Ask the front desk to hold luggage after the 11 AM checkout.',
        ),
        act(
          'd8a2',
          '10:30',
          'Last lap — Hayes Valley or Dolores Park',
          12,
          'Final burrito, coffee, souvenirs. Keep it close to the hotel.',
        ),
        act(
          'd8a3',
          '14:45',
          'Grab bags and head to SFO',
          11,
          'SF Central Hotel to SFO. BART Civic Center to SFO, ~35 min. Leave by 3:00 PM latest for the 6:25 PM Delta DL 756 — arrive SFO ~3:45, a 2.5+ hour buffer.',
        ),
        act(
          'd8a4',
          '18:25',
          'Depart SFO — land MSP 11:56 PM',
          0,
          "Delta DL 756, direct flight, 3h 31m. Carry-on included; checked bags cost extra. Seats aren't included in Basic fare — check in 24 hours early for a better auto-assignment.",
        ),
      ],
    },
  ],
  updatedAt: 0,
}

/** Trip window used by the countdown logic. */
export const TRIP_START = new Date('2026-07-08T11:00:00-05:00') // MSP takeoff (CDT)
export const TRIP_END = new Date('2026-07-15T18:25:00-07:00') // SFO takeoff home (PDT)
