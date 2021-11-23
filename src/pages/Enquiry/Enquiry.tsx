import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useLocation, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { enquirySchema } from '../../validation/enquirySchema';
import { EnquiryInputs } from '../../components';
import {
  ILocationState,
  IEnquiry,
  IGuestRequest,
  IGuestPreference,
} from './Enquiry.types';
import { RoomType } from '../../types/roomType';
import { InitialGuestPreference, EnquiriesInitial } from './initialValues';
import { makeBooking } from '../../apis/makeBooking';

import { FormContainer } from './Enquiry.styles';

const Enquiry = () => {
  const { state }: any = useLocation<ILocationState>();
  const history = useHistory();

  const [property, setProperty] = useState<RoomType>();
  const [enquiriesError, setEnquiriesError] = useState<any>(null);
  const [guestPreference, setGuestPreference] = useState<IGuestPreference>(
    InitialGuestPreference
  );
  const [enquiries, setEnquiries] = useState<IEnquiry>(EnquiriesInitial);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEnquiry>({
    resolver: yupResolver(enquirySchema),
  });

  const onSubmit = async (data: IEnquiry) => {
    setEnquiriesError(null);
    const confirm = window.confirm(
      "I'm confirming that all of my details is correct."
    );

    if (!confirm) return;

    const generatedId = nanoid(8).toUpperCase();

    const bookRoom = await makeBooking(
      data,
      guestPreference,
      generatedId,
      property
    );

    history.push('/summary', { bookingSummary: bookRoom });
  };

  const handleEnquiryChange =
    (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setEnquiries({
        ...enquiries,
        [prop]: event.target.value,
      });
    };

  useEffect(() => {
    const guestRequest: IGuestRequest = state?.guestRequest;
    const propertyState: RoomType = state?.property;

    setProperty(propertyState);
    setGuestPreference(guestRequest);
  }, []);

  return (
    <>
      <h1>Your're almost there.</h1>
      <h2> Enquiry for {property?.Title} </h2>

      <FormContainer>
        <EnquiryInputs
          errors={errors}
          enquiries={enquiries}
          register={register}
          handleEnquiryChange={handleEnquiryChange}
        />
        <Button onClick={handleSubmit(onSubmit)}>Book</Button>
      </FormContainer>
    </>
  );
};

export default Enquiry;
