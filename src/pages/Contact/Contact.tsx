import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '../../validation/contactSchema';
import { TextField } from '@mui/material';
import { ContactType } from './Contact.types';
import {
  Head,
  Heading,
  ErrorModal,
  MessageModal,
  Loading,
} from '../../components';
import { Container, FormWrapper, InputWrapper, Spacer } from './Contact.styles';
import { doContact } from '../../apis/doContacts';
import { initialContactValues } from './initialValues';
import { ButtonPrimary as Button } from '../../styles/Button/Button.styles';

const Contact = () => {
  const [contactError, setContactError] = useState<any>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [values, setValues] = useState<ContactType>(initialContactValues);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactType>({
    resolver: yupResolver(contactSchema),
  });

  async function onSubmit(data: ContactType) {
    setLoading(true);
    setContactError(null);
    setSuccess(false);

    contactError && setLoading(false);
    const makeContact: any = await doContact(data, setContactError);

    if (makeContact?.published_at) {
      setLoading(false);
      setSuccess(true);
      setValues(initialContactValues);
    } else return contactError;
  }

  const handleChange =
    (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  if (contactError)
    return (
      <ErrorModal error={contactError} message={contactError?.statusText} />
    );

  return (
    <>
      <Head
        title="Contact us"
        description="Contact us for more information, ask us about anything or even share some thought with us."
      />
      {loading && <Loading state={loading} />}
      <Heading align="center">Contact us</Heading>

      {success && (
        <MessageModal
          success={success}
          title="Message submitted"
          message="Dear guest. We will reply back to you as soon as possible, thank you for choosing us."
        />
      )}

      <Container>
        <FormWrapper>
          <InputWrapper>
            <TextField
              type="text"
              variant="standard"
              label="Fullname"
              placeholder="Fullname"
              multiline
              error={errors?.fullname ? true : false}
              value={values.fullname}
              helperText={errors?.fullname && errors?.fullname.message}
              {...register('fullname')}
              onChange={handleChange('fullname')}
            />
          </InputWrapper>
          <InputWrapper>
            <TextField
              type="text"
              variant="standard"
              label="Email"
              placeholder="Email"
              multiline
              error={errors?.email ? true : false}
              value={values.email}
              helperText={errors?.email && errors?.email.message}
              {...register('email')}
              onChange={handleChange('email')}
            />
          </InputWrapper>
          <InputWrapper>
            <TextField
              type="text"
              variant="standard"
              label="Subject"
              placeholder="Subject"
              multiline
              error={errors?.subject ? true : false}
              value={values.subject}
              helperText={errors?.subject && errors?.subject.message}
              {...register('subject')}
              onChange={handleChange('subject')}
            />
          </InputWrapper>

          <InputWrapper>
            <TextField
              label="Message"
              variant="standard"
              placeholder="Your message here"
              multiline
              rows={4}
              fullWidth
              error={errors?.message ? true : false}
              value={values?.message}
              helperText={errors?.message && errors?.message.message}
              {...register('message')}
              onChange={handleChange('message')}
            />
          </InputWrapper>
          <Spacer />

          <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
        </FormWrapper>
      </Container>
    </>
  );
};

export default Contact;
