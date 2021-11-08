import * as yup from 'yup';

export const numberOfGuestsSchema = yup.object().shape({
  number_of_guests: yup.number().min(1).max(10),
});
