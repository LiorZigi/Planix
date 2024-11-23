import { PlanixRoutes } from '../../core/@planix/types';
import { Event } from '../../models/Event';

export const eventsTypes: Event[] = [
  {
    name: PlanixRoutes.Barbecue,
    emoji: '🥩',
  },
  {
    name: PlanixRoutes.Picnic,
    emoji: '🍉',
  },
  {
    name: PlanixRoutes.Camping,
    emoji: '🏕️',
  },
  {
    name: PlanixRoutes.Birthday,
    emoji: '🎉',
  },
  {
    name: PlanixRoutes.BachelorParty,
    emoji: '🍻',
  },
  {
    name: PlanixRoutes.Custom,
  },
];
