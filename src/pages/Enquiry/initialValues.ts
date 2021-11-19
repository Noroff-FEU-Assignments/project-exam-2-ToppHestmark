import { DateTime } from 'luxon';

export const InitialGuestPreference = {
  fromDate: DateTime.now(),
  toDate: DateTime.now(),
  lengthOfStays: 1,
  numberOfGuests: 1,
  total: 0,
};

export const EnquiriesInitial = {
  firstname: '',
  lastname: '',
  email: '',
  phone_number: '',
  enquiry_specifications: '',
};
