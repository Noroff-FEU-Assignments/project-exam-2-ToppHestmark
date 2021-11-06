import * as yup from 'yup';

export const enquirySchema = yup.object().shape({
  firstname: yup.string().required('Firstname is required').min(3).max(20),
  lastname: yup.string().required('Lastname is required').min(3).max(20),
  email: yup.string().required('Email is required').email(),
  phone_number: yup
    .number()
    .required('Phone number is required')
    .positive()
    .integer(),
  number_of_guests: yup.number().required('Please enter number of guests'),
  enquiry_specifications: yup.string(),
});
