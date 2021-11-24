import * as yup from 'yup';

export const contactSchema = yup.object().shape({
  fullname: yup.string().required('Please enter your name').min(3).max(30),
  email: yup.string().required('Please enter your email').email(),
  subject: yup.string().required('Please provide a subject').min(3).max(30),
  message: yup.string().required('Please enter your message').min(10),
});
