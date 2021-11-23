import { BOOKING_URL } from './apis';

type BookingMethods = 'GET' | 'DELETE';

export const manageBooking = async (
  method: BookingMethods,
  token: string,
  setError: (error) => void,
  id?: string
): Promise<void> => {
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  };

  try {
    const response: any = await fetch(
      id ? `${BOOKING_URL}/${id}` : BOOKING_URL,
      options
    );

    if (!response.ok) {
      return setError(response);
    }

    return await response.json();
  } catch (error) {
    console.log('Manage booking promise error: ', error);
  }
};
