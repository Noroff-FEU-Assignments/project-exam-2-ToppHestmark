import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useLocation, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormGroup, Button } from '@mui/material';
import { RoomType } from '../types/roomType';
import { enquirySchema } from '../validation/enquirySchema';
import { EnquiryInputs } from '../components';

export const FormContainer = styled(FormGroup)`
  width: 100%;
`;

export interface EnquiryType {
  firstname: string;
  lastname: string;
  email: string;
  phone_number: number | string;
  enquiry_specifications: string;
}

const Enquiry = () => {
  const { state }: any = useLocation<{ property: RoomType | undefined }>();
  const property: RoomType = state?.property;
  const history = useHistory();

  const [enquiriesError, setEnquiriesError] = useState<any>(null);
  const [enquiries, setEnquiries] = useState<EnquiryType>({
    firstname: '',
    lastname: '',
    email: '',
    phone_number: '',
    enquiry_specifications: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnquiryType>({
    resolver: yupResolver(enquirySchema),
  });

  // Convert this to Async
  const onSubmit = (data: EnquiryType) => {
    setEnquiriesError(null);
    // Please include booking_id

    console.log('Enquiries data: ', data);
  };

  const handleEnquiryChange =
    (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setEnquiries({
        ...enquiries,
        [prop]: event.target.value,
      });
    };

  return (
    <div>
      <h1>Your're almost there.</h1>
      <h2> Enquiry for {property.Title} </h2>

      <FormContainer>
        <EnquiryInputs
          errors={errors}
          enquiries={enquiries}
          register={register}
          handleEnquiryChange={handleEnquiryChange}
        />
        <Button onClick={handleSubmit(onSubmit)}>Book</Button>
      </FormContainer>
    </div>
  );
};

export default Enquiry;
