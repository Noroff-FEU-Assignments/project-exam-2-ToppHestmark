import { BOOKING_URL } from './apis';
import { IEnquiry, IGuestPreference } from '../pages/Enquiry/Enquiry.types';
import { RoomType } from '../types/roomType';
import { DATE_FORMAT } from '../constants/dateFormat';

export const makeBooking = async (
  data: IEnquiry,
  guestPreference: IGuestPreference,
  generatedId: string,
  property: RoomType | undefined
): Promise<void> => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      hotel_name: property?.Title,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      phone_number: data.phone_number,
      date_from: guestPreference.fromDate.toFormat(DATE_FORMAT),
      date_to: guestPreference.toDate.toFormat(DATE_FORMAT),
      number_of_guests: guestPreference?.numberOfGuests,
      subtotal: guestPreference?.total,
      enquiry_specifications: data.enquiry_specifications,
      booking_id: generatedId,
      room_id: property?.id,
      length_of_stays: guestPreference?.lengthOfStays,
    }),
  };

  try {
    const response: any = await fetch(BOOKING_URL, options);

    if (!response.ok) {
      // throw new Error('Something went wrong when connection to server.')
      return response;
    }

    return await response.json();
  } catch (error) {
    console.log('Booking promise error', error);
  }
};
