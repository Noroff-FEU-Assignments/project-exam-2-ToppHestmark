import * as yup from 'yup';

export const addRoomSchema = yup.object().shape({
  Title: yup.string().required('Please enter property name').min(3).max(20),
  room_type: yup.string().required('Please enter room type').min(3).max(15),
  bed_type: yup.string().required('Please enter bed type').min(3).max(15),
  price_per_night: yup
    .number()
    .required('Please enter price per night')
    .integer()
    .min(1)
    .positive(),
  guest_review: yup
    .string()
    .required('Please enter guest review')
    .min(3)
    .max(15),
  image_01: yup
    .string()
    .required('Please enter an image url')
    .url()
    .matches(/\jpg|jpeg|png+$/i),
  image_02: yup
    .string()
    .url()
    .matches(/\jpg|jpeg|png+$/i),
  image_03: yup
    .string()
    .url()
    .matches(/\jpg|jpeg|png+$/i),
  image_04: yup
    .string()
    .url()
    .matches(/\jpg|jpeg|png+$/i),
  subtitle: yup.string().required('Please enter description').min(5).max(25),
  property_type: yup
    .string()
    .matches(/(Hotel|Guesthouse|Apartment|Holiday|Cabin)/),
  neighbourhood: yup
    .string()
    .matches(/(City|Bergenhus|Ytrebygda|Fana|Paradis)/),
  description: yup.string().required('Please enter description').min(20),
});
