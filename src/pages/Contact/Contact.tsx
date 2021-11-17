import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '../../validation/contactSchema';
import { CONTACTS_URL } from '../../apis/apis';
import { FormControl, FormGroup, Button, TextField } from '@mui/material';

export interface ContactType {
  fullname: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [contactError, setContactError] = useState<any>(null);
  const [values, setValues] = useState<ContactType>({
    fullname: '',
    email: '',
    subject: '',
    message: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactType>({
    resolver: yupResolver(contactSchema),
  });

  async function onSubmit(data: ContactType) {
    setContactError(null);
    // console.log(data);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullname: data.fullname,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }),
    };

    try {
      const response = await (await fetch(CONTACTS_URL, options)).json();
      console.log('Contact response: ', response);
    } catch (error) {
      console.log('error', error);
      setContactError(error);
    }
  }

  const handleChange =
    (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <div>
      <h1>Contact us</h1>
      <FormGroup>
        <FormControl sx={{ m: 1, width: '35ch' }}>
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
        </FormControl>
        <FormControl sx={{ m: 1, width: '35ch' }}>
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
        </FormControl>
        <FormControl sx={{ m: 1, width: '35ch' }}>
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
        </FormControl>

        <FormControl sx={{ m: 1, width: '35ch' }}>
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
        </FormControl>

        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </FormGroup>
    </div>
  );
};

export default Contact;
