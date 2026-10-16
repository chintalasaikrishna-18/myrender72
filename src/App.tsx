import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import { ArrowRight, CalendarDays, ChevronRight, Clock3, MapPin, Search, SlidersHorizontal, Sparkles, UsersRound, WifiOff, X } from 'lucide-react'
import { ApiError, getEvent, getEvents, type Event } from './lib/api'

const dateFormatter = new Intl.DateTimeFormat('en-IN', { month: 'short', day: 'numeric' })
const longDateFormatter = new Intl.DateTimeFormat('en-IN', { weekday: 'long', month: 'long', day: 'numeric' })

function formatDate(value: string) {
  return dateFormatter.format(new Date(`${value}T00:00:00`))
}

function Header() {
  return <header className="site-header">
    <Link className="brand" to="/" aria-label="Field Notes home"><span>F</span> field notes</Link>
    <nav aria-label="Main navigation">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/events">Explore</NavLink>
      <a href="#about">About</a>
    </nav>
    <Link className="header-cta" to="/events">Find an event <ArrowRight size={15} /></Link>
  </header>
}

function Footer() {
  return <footer id="about" className="site-footer">
    <Link className="brand" to="/"><span>F</span> field notes</Link>
    <p>Good things happen when people show up.</p>
    <p className="footer-meta">An independent events directory<br />Built for Render72.</p>
  </footer>
}

function App() {
  return <div className="app-shell"><Header /><main><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/events" element={<Events />} />
    <Route path="/events/:id" element={<EventDetail />} />
    <Route path="*" element={<NotFound />} />
  </Routes></main><Footer /></div>
}

function Home() {
  return <>
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow"><Sparkles size={15} /> The campus is calling</p>
        <h1>Make your next <em>good story</em> happen.</h1>
        <p className="hero-intro">Workshops, late-night conversations, a strange idea brought to life. Find the event that pulls you out of the ordinary.</p>
        <div className="hero-actions"><Link className="button button-primary" to="/events">Explore events <ArrowRight size={17} /></Link><a className="text-link" href="#how-it-works">How it works <ChevronRight size={16} /></a></div>
      </div>
      <div className="hero-art" aria-label="Collage of creative campus moments">
        <div className="hero-sun" />
        <p className="art-label">out in the world</p>
        <div className="art-image art-image-a"><img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Sketches and a phone on a desk" /></div>
        <div className="art-image art-image-b"><img src="https://images.pexels.com/photos/6270232/pexels-photo-6270232.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Live music performance" /></div>
        <span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="doodle">✦</span>
      </div>
    </section>
    <section className="intro-strip"><span>Today, not someday.</span><p>Field Notes is a quieter, clearer way to discover what is happening around you.</p><Link to="/events">See what’s on <ArrowRight size={16} /></Link></section>
    <section id="how-it-works" className="how-section">
      <div><p className="eyebrow">A small invitation</p><h2>Follow the interesting thing.</h2></div>
      <div className="steps">
        <article><span>01</span><h3>Browse the signal</h3><p>Discover events by mood, craft, category or simply the image that makes you curious.</p></article>
        <article><span>02</span><h3>Know the details</h3><p>Dates, places, team sizes and practical notes—gathered before you commit.</p></article>
        <article><span>03</span><h3>Show up well</h3><p>Save the date, bring a friend, and leave with a story you did not have yesterday.</p></article>
      </div>
    </section>
    <section className="closing-cta"><p className="eyebrow">Something is always beginning</p><h2>The most interesting room<br />is the one you walk into.</h2><Link className="button button-light" to="/events">Browse all events <ArrowRight size={17} /></Link></section>
  </>
}

function Events() {
  const [events, setEvents] = useState<Event[]>([])
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [error, setError] = useState<ApiError | null>(null)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [onlyOpen, setOnlyOpen] = useState(false)

  const load = useCallback(() => {
    setStatus('loading')
    setError(null)
    getEvents().then((data) => { setEvents(data); setStatus('success') }).catch((reason: ApiError) => { setError(reason); setStatus('error') })
  }, [])

  useEffect(() => {
    const requestId = window.setTimeout(load, 0)
    return () => window.clearTimeout(requestId)
  }, [load])
  const categories = useMemo(() => ['All', ...Array.from(new Set(events.map((event) => event.category)))], [events])
  const visibleEvents = useMemo(() => events.filter((event) => {
    const matchesQuery = `${event.name} ${event.category} ${event.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase())
    return matchesQuery && (category === 'All' || event.category === category) && (!onlyOpen || event.registration_status === 'OPEN')
  }), [events, query, category, onlyOpen])

  return <section className="events-page">
    <div className="events-heading"><p className="eyebrow">The open calendar</p><h1>Make room for<br /><em>something new.</em></h1><p>Every event worth stepping away from your screen for.</p></div>
    <div className="event-controls">
      <label className="search-box"><Search size={18} /><span className="sr-only">Search events</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by idea, craft or mood" /></label>
      <label className="open-toggle"><input checked={onlyOpen} onChange={(event) => setOnlyOpen(event.target.checked)} type="checkbox" /> <span>Open to join</span></label>
      <div className="category-scroll" aria-label="Filter by category"><SlidersHorizontal size={16} /><div>{categories.map((item) => <button onClick={() => setCategory(item)} className={category === item ? 'selected' : ''} key={item}>{item}</button>)}</div></div>
    </div>
    {status === 'loading' && <EventSkeleton />}
    {status === 'error' && <FailureState error={error} retry={load} />}
    {status === 'success' && visibleEvents.length === 0 && <EmptyState clear={() => { setQuery(''); setCategory('All'); setOnlyOpen(false) }} />}
    {status === 'success' && visibleEvents.length > 0 && <><p className="result-count">{visibleEvents.length} event{visibleEvents.length === 1 ? '' : 's'} to consider</p><div className="event-grid">{visibleEvents.map((event) => <EventCard key={event.id} event={event} />)}</div></>}
  </section>
}

function EventCard({ event }: { event: Event }) {
  const seatPercentage = Math.min(100, Math.round((event.seats_filled / event.total_seats) * 100))
  return <Link to={`/events/${event.id}`} className="event-card">
    <div className="card-image">{event.cover_image_url ? <img src={event.cover_image_url} alt={event.cover_image_alt ?? ''} loading="lazy" /> : <div className="image-fallback" />}<span className={`status-pill ${event.registration_status.toLowerCase()}`}>{event.registration_status.replace('_', ' ')}</span><span className="card-date">{formatDate(event.schedule_summary.start_date)}</span></div>
    <div className="card-content"><p className="card-category">{event.category} <span>·</span> {event.event_mode.toLowerCase()}</p><h2>{event.name}</h2><p className="card-blurb">{event.blurb}</p><div className="card-bottom"><span>{event.price === 0 ? 'Free' : `₹${event.price}${event.is_per_head ? ' / person' : ' / team'}`}</span><span>{event.seats_filled}/{event.total_seats} spots <i><b style={{ width: `${seatPercentage}%` }} /></i></span></div></div>
  </Link>
}

function EventDetail() {
  const { id } = useParams()
  const [event, setEvent] = useState<Event | null>(null)
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [error, setError] = useState<ApiError | null>(null)
  const load = useCallback(() => {
    if (!id) return
    setStatus('loading'); setError(null)
    getEvent(id).then((data) => { setEvent(data); setStatus('success') }).catch((reason: ApiError) => { setError(reason); setStatus('error') })
  }, [id])
  useEffect(() => {
    const requestId = window.setTimeout(load, 0)
    return () => window.clearTimeout(requestId)
  }, [load])
  if (status === 'loading') return <section className="detail-loading"><EventSkeleton /></section>
  if (status === 'error') return <section className="detail-loading"><FailureState error={error} retry={load} /></section>
  if (!event) return <NotFound />
  const schedule = event.schedules?.[0]
  return <article className="event-detail">
    <div className="detail-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,22,20,.83), rgba(10,22,20,.2)), url(${event.banner_image_url ?? event.cover_image_url})` }}><Link to="/events" className="back-link">← All events</Link><div><p className="detail-category">{event.category} · {event.event_type.toLowerCase()}</p><h1>{event.name}</h1><p>{event.blurb}</p></div></div>
    <div className="detail-layout"><div className="detail-main"><section><h2>What this is about</h2><p className="detail-copy">{event.description ?? event.blurb}</p></section>{event.highlights && <section><h2>The good bits</h2><ul className="feature-list">{event.highlights.map((item) => <li key={item}>{item}</li>)}</ul></section>}{event.eligibility && <section><h2>Who it’s for</h2><ul className="feature-list">{event.eligibility.map((item) => <li key={item}>{item}</li>)}</ul></section>}</div>
      <aside className="detail-aside"><div className="detail-card"><p className={`status-pill ${event.registration_status.toLowerCase()}`}>{event.registration_status.replace('_', ' ')}</p><h2>{event.price === 0 ? 'Free entry' : `₹${event.price} ${event.is_per_head ? 'per person' : 'per team'}`}</h2><dl><div><dt><CalendarDays size={17} /> Date</dt><dd>{schedule ? longDateFormatter.format(new Date(`${schedule.event_date}T00:00:00`)) : formatDate(event.schedule_summary.start_date)}</dd></div><div><dt><Clock3 size={17} /> Time</dt><dd>{schedule?.start_time ?? event.schedule_summary.start_time}–{schedule?.end_time ?? event.schedule_summary.end_time}</dd></div><div><dt><MapPin size={17} /> Location</dt><dd>{schedule?.venue ?? event.event_mode}</dd></div><div><dt><UsersRound size={17} /> Team</dt><dd>{event.min_teamsize === event.max_teamsize ? `${event.min_teamsize} ${event.min_teamsize === 1 ? 'person' : 'people'}` : `${event.min_teamsize}–${event.max_teamsize} people`}</dd></div></dl><button className="button button-primary" type="button">Save this event <ArrowRight size={17} /></button></div></aside></div>
  </article>
}

function EventSkeleton() { return <div className="event-grid" aria-label="Loading events">{Array.from({ length: 6 }).map((_, index) => <div className="event-card skeleton" key={index}><div className="card-image" /><div className="card-content"><i /><h2 /><p /><p /></div></div>)}</div> }

function FailureState({ error, retry }: { error: ApiError | null, retry: () => void }) { return <div className="state-card"><WifiOff size={30} /><h2>We lost the thread.</h2><p>{error?.kind === 'timeout' ? 'The events service is taking longer than usual.' : 'The events service is unavailable right now.'} Your filters are still here—try again in a moment.</p><button className="button button-primary" onClick={retry}>Try again <ArrowRight size={17} /></button></div> }
function EmptyState({ clear }: { clear: () => void }) { return <div className="state-card"><Search size={30} /><h2>No good match, yet.</h2><p>Try another word, or open up your filters. The next thing could be somewhere unexpected.</p><button className="button button-primary" onClick={clear}><X size={17} /> Clear filters</button></div> }
function NotFound() { return <section className="state-card not-found"><h1>That page wandered off.</h1><p>We could not find what you were looking for.</p><Link className="button button-primary" to="/events">Explore events <ArrowRight size={17} /></Link></section> }

export default App
