import React from 'react';
import { FormControl, TextField } from '@mui/material';
import { GridWrapper, MessageWrapper } from './EnquiryInputs.styles';
import { EnquiryInputsProps } from './EnquiryInputs.types';

const EnquiryInputs = (props: EnquiryInputsProps) => {
  const { errors, enquiries, register, handleEnquiryChange } = props;

  return (
    <>
      <GridWrapper>
        <FormControl sx={{ m: 1, width: '30ch' }}>
          <TextField
            type="text"
            variant="standard"
            label="Firstname"
            placeholder="John"
            multiline
            error={errors?.firstname ? true : false}
            value={enquiries?.firstname}
            helperText={errors?.firstname && errors?.firstname.message}
            {...register('firstname')}
            onChange={handleEnquiryChange('firstname')}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '30ch' }}>
          <TextField
            type="text"
            variant="standard"
            label="Lastname"
            placeholder="Doe"
            multiline
            error={errors?.lastname ? true : false}
            value={enquiries?.lastname}
            helperText={errors?.lastname && errors?.lastname.message}
            {...register('lastname')}
            onChange={handleEnquiryChange('lastname')}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '30ch' }}>
          <TextField
            type="text"
            variant="standard"
            label="Email"
            placeholder="johndoe@gmail.com"
            multiline
            error={errors?.email ? true : false}
            value={enquiries?.email}
            helperText={errors?.email && errors?.email.message}
            {...register('email')}
            onChange={handleEnquiryChange('email')}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '30ch' }}>
          <TextField
            type="number"
            variant="standard"
            label="Phone number"
            placeholder="91 80 80 80"
            multiline
            error={errors?.phone_number ? true : false}
            value={enquiries?.phone_number}
            helperText={errors?.phone_number && errors?.phone_number.message}
            {...register('phone_number')}
            onChange={handleEnquiryChange('phone_number')}
          />
        </FormControl>
      </GridWrapper>

      <MessageWrapper
        variant="standard"
        error={errors?.enquiry_specifications ? true : false}
        sx={{ m: 1 }}
      >
        <TextField
          label="Enquiry specifications"
          variant="standard"
          placeholder="Hi, we will be arriving late from the airport and ..."
          multiline
          rows={4}
          fullWidth
          error={errors?.enquiry_specifications ? true : false}
          value={enquiries?.enquiry_specifications}
          helperText={
            errors?.enquiry_specifications &&
            errors?.enquiry_specifications.message
          }
          {...register('enquiry_specifications')}
          onChange={handleEnquiryChange('enquiry_specifications')}
        />
      </MessageWrapper>
    </>
  );
};

export default EnquiryInputs;
