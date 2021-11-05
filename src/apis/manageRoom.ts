import { PropertyOptions } from '../components/PropertyOptions.types';
import { PropertyType } from '../components/PropertyInputs.types';
import { ROOMS_URL } from './apis';

type MethodsType = 'POST' | 'PUT' | 'DELETE';

export const manageRoom = async (
  method: MethodsType,
  token: string,
  propertyOptions: PropertyOptions,
  data: PropertyType
): Promise<void> => {
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify({
      breakfast_included: propertyOptions.breakfast_included,
      free_cancellation: propertyOptions.free_cancellation,
      wifi: propertyOptions.wifi,
      featured: propertyOptions.featured,
      Title: data.Title,
      room_type: data.room_type,
      bed_type: data.bed_type,
      price_per_night: data.price_per_night,
      guest_review: data.guest_review,
      image_01: data.image_01,
      subtitle: data.subtitle,
      property_type: data.property_type,
      neighbourhood: data.neighbourhood,
      description: data.description,
    }),
  };

  try {
    const response = await (await fetch(ROOMS_URL, options)).json();

    if (response.created_at) {
      console.log('Successfully created a room: ', response);
    }

    return response;
  } catch (error) {
    console.log('error', error);
  }
};
