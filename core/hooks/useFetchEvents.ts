import { eventsTypes } from '../../mocks/events-types/event-types';
import { Event } from '../../models/Event';

export function useFetchEvents(): Promise<Event[]> {
  // Simulate fetching events from an API with 1 second delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventsTypes);
    }, 1000);
  });
}
