import { NeighbourhoodTypes, PropertyTypes } from './partials';

export interface RoomType {
  id?: number;
  breakfast_included: boolean;
  free_cancellation: boolean;
  wifi: boolean;
  featured: boolean;
  Title: string;
  room_type: string;
  bed_type: string;
  price_per_night: number;
  guest_review: string;
  image_01: string;
  subtitle: string;
  property_type: PropertyTypes;
  neighbourhood: NeighbourhoodTypes;
  description: string;
}
