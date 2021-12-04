import { FormControl, TextField } from '@mui/material';
import { EnquiryInputsProps } from './EnquiryInputs.types';
import { GridWrapper, MessageWrapper } from './EnquiryInputs.styles';

const EnquiryInputs = (props: EnquiryInputsProps) => {
  const { errors, enquiries, register, handleEnquiryChange } = props;

  return (
    <>
      <GridWrapper>
        <FormControl>
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
        <FormControl>
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
        <FormControl>
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
        <FormControl>
          <TextField
            type="string"
            variant="standard"
            label="Phone number"
            placeholder="8 digits"
            multiline
            error={errors?.phone_number ? true : false}
            value={enquiries?.phone_number}
            helperText={errors?.phone_number && 'Invalid number'}
            {...register('phone_number')}
            onChange={handleEnquiryChange('phone_number')}
          />
        </FormControl>
      </GridWrapper>

      <MessageWrapper
        variant="standard"
        error={errors?.enquiry_specifications ? true : false}
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
