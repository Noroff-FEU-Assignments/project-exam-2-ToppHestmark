import { PropertyOptions } from '../components/PropertyOptions/PropertyOptions.types';
import { PropertyType } from '../components/PropertyInputs/PropertyInputs.types';
import { ROOMS_URL } from './apis';

type MethodsType = 'POST' | 'PUT' | 'DELETE';

export const manageRoom = async (
  method: MethodsType,
  token: string,
  setError: (error) => void,
  propertyOptions?: PropertyOptions,
  data?: PropertyType,
  roomId?: string | number
): Promise<void> => {
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify({
      breakfast_included: propertyOptions?.breakfast_included,
      free_cancellation: propertyOptions?.free_cancellation,
      wifi: propertyOptions?.wifi,
      featured: propertyOptions?.featured,
      Title: data?.Title,
      room_type: data?.room_type,
      bed_type: data?.bed_type,
      price_per_night: data?.price_per_night,
      guest_review: data?.guest_review,
      image_01: data?.image_01,
      image_02: data?.image_02,
      image_03: data?.image_03,
      image_04: data?.image_04,
      subtitle: data?.subtitle,
      property_type: data?.property_type,
      neighbourhood: data?.neighbourhood,
      description: data?.description,
    }),
  };

  try {
    const response = await fetch(
      roomId ? `${ROOMS_URL}/${roomId}` : ROOMS_URL,
      options
    );

    !response.ok && setError(response);

    return await response.json();
  } catch (error) {
    console.log('Room promise error: ', error);
  }
};
