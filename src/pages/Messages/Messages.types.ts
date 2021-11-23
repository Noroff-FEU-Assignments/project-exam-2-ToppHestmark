import { DateTime } from 'luxon';

export interface IMessages {
  created_at: string;
  email: string;
  fullname: string;
  id: number;
  message: string;
  published_at: string;
  subject: string;
  updated_at: string;
}
