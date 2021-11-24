import { RoomType } from '../../types/roomType';

export const getPropertyOptions = (room: RoomType) => ({
  breakfast_included: room.breakfast_included,
  free_cancellation: room.free_cancellation,
  wifi: room.wifi,
  featured: room.featured,
});

export const getPropertyValues = (room: RoomType) => ({
  Title: room.Title,
  room_type: room.room_type,
  bed_type: room.bed_type,
  price_per_night: room.price_per_night,
  guest_review: room.guest_review,
  image_01: room.image_01,
  image_02: room.image_02,
  image_03: room.image_03,
  image_04: room.image_04,
  subtitle: room.subtitle,
  property_type: room.property_type,
  neighbourhood: room.neighbourhood,
  description: room.description,
});
