import { NeighbourhoodTypes, PropertyTypes } from '../../types/partials';

export interface PropertyType {
  Title: string;
  room_type: string;
  bed_type: string;
  price_per_night: number;
  guest_review: string;
  image_01: string;
  image_02: string;
  image_03: string;
  image_04: string;
  subtitle: string;
  property_type: PropertyTypes;
  neighbourhood: NeighbourhoodTypes;
  description: string;
}

export interface InputProps {
  errors: any;
  property: PropertyType;
  register: any;
  handleChange: (
    prop: any
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}
