import { DateTime } from 'luxon';
import { RoomType } from '../../types/roomType';

export interface IEnquiry {
  firstname: string;
  lastname: string;
  email: string;
  phone_number: number | string;
  enquiry_specifications: string;
}

export interface IGuestRequest {
  fromDate: DateTime;
  toDate: DateTime;
  lengthOfStays: number;
  numberOfGuests: string | number;
  total: number;
}

export interface ILocationState {
  state: {
    property: RoomType | undefined;
    guestRequest: IGuestRequest | undefined;
  };
}

export type IGuestPreference = IGuestRequest;
