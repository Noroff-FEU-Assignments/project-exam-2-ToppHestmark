export interface PropertyOptions {
  breakfast_included: boolean;
  free_cancellation: boolean;
  wifi: boolean;
  featured: boolean;
}

export interface PropertyOptionsProps {
  propertyOptions: PropertyOptions;
  handlePropertyOptions: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
