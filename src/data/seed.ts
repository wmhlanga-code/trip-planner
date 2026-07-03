import type { TripState, Activity } from '../types'

function act(id: string, time: string, name: string, cost: number, notes: string): Activity {
  return { id, time, name, cost, notes, splitWith: [] }
}

/**
 * Seed data for the trip. Flights + crew names + the full day-by-day plan are
 * locked in from the group's real itinerary. Everything here is still editable
 * in-app — costs are per-person tips baked into an even 5-way split total, so
 * adjust freely if plans change.
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
    address: '444 Embarcadero West, Oakland, CA 94607',
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
      title: 'Arrival night',
      theme: 'ferry-moon',
      activities: [
        act(
          'd1a1',
          '22:54',
          'Land at SFO — BART to hotel',
          60,
          'BART: SFO → Lake Merritt (~40 min), then walk 10 min to 444 Embarcadero West. Tip: use Uber instead — about $12/person from the airport.',
        ),
        act(
          'd1a2',
          '23:45',
          'Late food near Jack London Square',
          60,
          'Grab food near the hotel or order delivery. Drop bags, settle in — early night. ~$10–15/person.',
        ),
      ],
    },
    {
      id: 'd2',
      date: '2026-07-09',
      dayNumber: 2,
      title: 'SF Waterfront & Exploratorium',
      theme: 'pier',
      activities: [
        act(
          'd2a1',
          '09:00',
          'Oakland Ferry to SF Ferry Building',
          35,
          '5-min walk from hotel. 30-min bay crossing with great views — best first look at SF. Grab breakfast at the Ferry Building marketplace. $7/person each way.',
        ),
        act(
          'd2a2',
          '10:00',
          'Exploratorium — Pier 15',
          160,
          'Walk 10 min north along Embarcadero. 500+ interactive exhibits: science, art, AI. Plan 3–4 hours. Thursdays have an 18+ After Dark session 6–10 PM. ~$30–35/person entry, opens 10 AM.',
        ),
        act(
          'd2a3',
          '14:30',
          "Fisherman's Wharf & Pier 39",
          0,
          "Walk north along the waterfront. Sea lions at Pier 39, Ghirardelli Square. Skip the sit-down Pier restaurants — overpriced. Free to walk around.",
        ),
        act(
          'd2a4',
          '17:00',
          'North Beach + Chinatown',
          85,
          'City Lights Bookstore, Coit Tower views, pizza for dinner. Then Chinatown — Dragon Gate, markets, boba. Dinner ~$12–15/person. BART home to Lake Merritt ~$4/person (~20 min).',
        ),
      ],
    },
    {
      id: 'd3',
      date: '2026-07-10',
      dayNumber: 3,
      title: 'Mission District + OMCA',
      theme: 'park',
      activities: [
        act(
          'd3a1',
          '09:30',
          'BART to Mission District',
          20,
          'Lake Merritt → 16th St Mission (~20 min). Head to Mission Dolores Park — the sunniest park in SF, with skyline views from the upper hill. BART ~$4/person.',
        ),
        act(
          'd3a2',
          '10:00',
          'Mission Dolores Park',
          0,
          'Lay out and soak up the sun. Walk to Clarion Alley murals after — 5 min away, a full block of community mural art, unmissable. Bring corner-store snacks. Free.',
        ),
        act(
          'd3a3',
          '12:30',
          'Mission tacos + Castro District',
          85,
          'El Farolito or La Taqueria on 24th St (~$11/person). Walk to Castro — Rainbow Honor Walk, Harvey Milk shop, fun stores. Bi-Rite Creamery on the way back (~$6/person).',
        ),
        act(
          'd3a4',
          '17:00',
          'Friday Nights at OMCA (Oakland)',
          140,
          "BART back to Lake Merritt, 2-min walk to the museum. Free live music, food trucks, outdoor gardens every Friday Apr–Oct, 5–9 PM — Oakland's best weekly event. Outdoor area is free; museum entry ~$16/person + food trucks ~$12/person if you go in.",
        ),
      ],
    },
    {
      id: 'd4',
      date: '2026-07-11',
      dayNumber: 4,
      title: 'Golden Gate + Haight-Ashbury',
      theme: 'bridge',
      activities: [
        act(
          'd4a1',
          '08:30',
          'Ferry to SF + Muni 28 to Golden Gate Bridge',
          50,
          'Ferry to Ferry Building, then Muni 28 bus to the bridge (~45 min total). Walk across — windy and stunning. Go before 10 AM. Ferry ~$7/person + Muni ~$3/person.',
        ),
        act(
          'd4a2',
          '10:30',
          'Baker Beach',
          0,
          'Hike down to Baker Beach below the south tower — the best ground-level bridge photo of the trip. Bring a jacket, it\'s windy. 10 min walk from the bridge. Free.',
        ),
        act(
          'd4a3',
          '13:00',
          'Haight-Ashbury + Painted Ladies',
          60,
          'Bus 33 to Haight. Amoeba Music, Relic Vintage, Wasteland thrift stores. Food along Haight St (~$12/person). Walk 15 min east to the Painted Ladies at Alamo Square for the iconic photo.',
        ),
        act(
          'd4a4',
          '18:30',
          'Ocean Beach sunset',
          15,
          'N-Judah Muni streetcar west to the end of the line. Walk to the Pacific and watch the sunset (~8:15 PM in July). Muni ~$3/person, sunset itself is free. If foggy, skip the beach and extend Haight/Castro time instead.',
        ),
      ],
    },
    {
      id: 'd5',
      date: '2026-07-12',
      dayNumber: 5,
      title: 'Six Flags Discovery Kingdom',
      theme: 'coaster',
      activities: [
        act(
          'd5a1',
          '08:30',
          'Transit to Six Flags — Vallejo',
          50,
          'BART: Lake Merritt → El Cerrito del Norte (~30 min), then Uber to Vallejo (~25 min). Park opens 10 AM — arrive at opening to hit the big coasters before lines explode. ~$10/person total transit.',
        ),
        act(
          'd5a2',
          '10:00',
          'Six Flags — morning coaster run',
          325,
          'Hit Superman Ultimate Flight, Joker, and Batman: The Ride first — lines double by noon. Animal exhibits (dolphins, tigers) between rides. ~$60–80/person entry — buy online ahead of time to save $20–30; group discount available for 5+.',
        ),
        act(
          'd5a3',
          '12:30',
          'Full park — water rides + shows',
          85,
          'Roar coaster, V2: Vertical Velocity, Boomerang. Check the stunt show + animal presentation schedule — free inside. Water park section for hot days. Park food ~$15–20/person — bring snacks to save.',
        ),
        act(
          'd5a4',
          '18:00',
          'Head back to Oakland',
          90,
          "Uber back to BART El Cerrito del Norte → Lake Merritt. Grab dinner near the hotel — you'll be wiped out but it'll have been worth it. ~$18/person for the return trip + dinner.",
        ),
      ],
    },
    {
      id: 'd6',
      date: '2026-07-13',
      dayNumber: 6,
      title: 'Mount Diablo Hike',
      theme: 'mountain',
      activities: [
        act(
          'd6a1',
          '07:30',
          'Uber to Mount Diablo State Park',
          50,
          '~35 min from Oakland, no direct transit. Pick up food and 2L+ water each before leaving — park opens at sunrise. Uber ~$35–45 total + $10/car day-use fee, split 5 ways.',
        ),
        act(
          'd6a2',
          '08:30',
          'Summit Trail hike — 3,849 ft',
          0,
          'Best route: Mitchell Canyon to Summit (~9 miles round trip, moderate–strenuous), or drive to Summit Visitor Center for shorter 2–4 mile trails. Start early before midday heat. Trail shoes required. Free with park entry.',
        ),
        act(
          'd6a3',
          '12:00',
          'Summit — lunch + views',
          0,
          'On clear July days you can see the Golden Gate Bridge, SF skyline, Central Valley, and sometimes the Sierra Nevada. Eat a packed lunch at the summit (grab it from a grocery store the night before to save money) and visit the free Summit Museum.',
        ),
        act(
          'd6a4',
          '14:00',
          'Descent + lower trails',
          0,
          'Hike back down the same route or the fire road loop. Golden eagles, deer, and squirrels are common. Trail winds through chaparral and oak woodland. Take it slow on the descent.',
        ),
        act(
          'd6a5',
          '17:00',
          'Return to Oakland + big dinner',
          85,
          "Uber back to Jack London Square. Everett & Jones BBQ nearby is Oakland-legendary and very filling — you've earned it. ~$17/person. Alternative if low energy: skip the hike for a Lake Merritt walk + Temescal neighbourhood instead.",
        ),
      ],
    },
    {
      id: 'd7',
      date: '2026-07-14',
      dayNumber: 7,
      title: 'Berkeley + Lake Merritt',
      theme: 'clocktower',
      activities: [
        act(
          'd7a1',
          '09:30',
          'BART to UC Berkeley',
          85,
          'Lake Merritt → Downtown Berkeley (~25 min). Walk the campus, visit Sproul Plaza, climb Sather Tower for 360° Bay views. Telegraph Ave for cheap eats and street vendors. BART ~$4 + tower $3 + food ~$10/person.',
        ),
        act(
          'd7a2',
          '12:30',
          'Temescal + Telegraph Ave murals',
          30,
          'BART to 19th St Oakland. Walk Telegraph Ave through Temescal — street art, vintage shops, coffee, Amoeba Music Oakland. Very walkable from BART. Coffee ~$6/person.',
        ),
        act(
          'd7a3',
          '14:30',
          'Lake Merritt — kayak or pedal boat',
          20,
          'Walk to Lake Merritt. Rent a pedal boat or kayak from the boating center, or do the free 3.4-mile loop walk. Bonsai Garden nearby. Chill afternoon after a big week. Boat ~$4/person, walk is free.',
        ),
        act(
          'd7a4',
          '18:00',
          'Jack London Square — last Oakland night',
          85,
          "Walk back to the hotel area. Dinner on the waterfront, stroll the marina, watch the SF skyline and Bay Bridge light up right outside your door. Dinner ~$15–20/person.",
        ),
        act(
          'd7a5',
          '20:00',
          'Joji concert',
          350,
          'Ticket ~$70/person — confirm the exact venue and set time.',
        ),
      ],
    },
    {
      id: 'd8',
      date: '2026-07-15',
      dayNumber: 8,
      title: 'Last morning + departure',
      theme: 'sunset',
      activities: [
        act(
          'd8a1',
          '09:00',
          'Ferry to SF — last morning ride',
          75,
          'One final ferry crossing. Walk the Embarcadero, ride the Powell-Hyde Cable Car through Nob Hill. Grab breakfast near Union Square. Ferry $7 + cable car $8/person.',
        ),
        act(
          'd8a2',
          '11:30',
          'Mission District — last burrito',
          85,
          'BART to 16th St Mission. Final group lunch at El Farolito or La Taqueria. Walk Valencia St, coffee at Ritual Coffee Roasters — last SF neighbourhood stroll. Lunch ~$11 + coffee ~$6/person.',
        ),
        act(
          'd8a3',
          '18:30',
          'Bernal Heights Park — final sunset',
          0,
          '360° panorama: Golden Gate, Bay Bridge, downtown SF, the Pacific all at once — the best group photo of the whole trip. Sunset ~8:15 PM, less crowded than Twin Peaks. BART 24th St Mission, walk up. Free.',
        ),
        act(
          'd8a4',
          '21:00',
          'Hotel → BART to SFO — departure',
          55,
          'Back to Oakland by 9 PM, pack up. BART Lake Merritt → SFO (~40 min). Arrive SFO by 10:30 PM. Leave the hotel by 9:30 PM at the latest. BART ~$11/person.',
        ),
      ],
    },
  ],
  updatedAt: 0,
}

/** Trip window used by the countdown logic. */
export const TRIP_START = new Date('2026-07-08T11:00:00-05:00') // MSP takeoff (CDT)
export const TRIP_END = new Date('2026-07-15T18:25:00-07:00') // SFO takeoff home (PDT)
