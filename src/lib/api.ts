export type Event = {
  id: string
  name: string
  blurb: string
  description?: string
  cover_image_url?: string
  cover_image_alt?: string
  banner_image_url?: string
  category: string
  tags: string[]
  event_type: string
  event_mode: string
  event_status: string
  is_featured: boolean
  is_technical: boolean
  price: number
  is_per_head: boolean
  min_teamsize: number
  max_teamsize: number
  total_seats: number
  seats_filled: number
  registration_deadline: string
  registration_status: string
  schedule_summary: {
    start_date: string
    start_time: string
    end_date: string
    end_time: string
  }
  highlights?: string[]
  eligibility?: string[]
  schedules?: Array<{ event_date: string; start_time: string; end_time: string; venue: string }>
}

type EventListResponse = { events: Event[] }
type EventResponse = { event: Event }

const apiUrl = import.meta.env.VITE_EVENTS_API_URL ?? 'https://render72.pages.dev/api/test/events'

export class ApiError extends Error {
  constructor(message: string, public readonly kind: 'timeout' | 'http' | 'unknown') {
    super(message)
  }
}

async function request<T>(url: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(url, { signal, headers: { Accept: 'application/json' } })

  if (!response.ok) {
    throw new ApiError(`The event service returned ${response.status}.`, 'http')
  }

  return response.json() as Promise<T>
}

function withTimeout<T>(callback: (signal: AbortSignal) => Promise<T>, timeout = 8000) {
  const controller = new AbortController()
  const timeoutId = window.setTimeout(() => controller.abort(), timeout)

  return callback(controller.signal)
    .catch((error: unknown) => {
      if (error instanceof DOMException && error.name === 'AbortError') {
        throw new ApiError('The event service took too long to respond.', 'timeout')
      }
      if (error instanceof ApiError) throw error
      throw new ApiError('We could not reach the event service.', 'unknown')
    })
    .finally(() => window.clearTimeout(timeoutId))
}

export function getEvents() {
  return withTimeout(async (signal) => {
    const data = await request<EventListResponse>(apiUrl, signal)
    return Array.isArray(data.events) ? data.events : []
  })
}

export function getEvent(id: string) {
  return withTimeout(async (signal) => {
    const data = await request<EventResponse>(`${apiUrl}/${encodeURIComponent(id)}`, signal)
    return data.event
  })
}
