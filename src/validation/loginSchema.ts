import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  username: yup.string().required('Please enter your username').min(3),
  password: yup.string().required('Please enter your password').min(3),
});
