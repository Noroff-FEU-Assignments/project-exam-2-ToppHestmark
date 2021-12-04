import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useLocation, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { enquirySchema } from '../../validation/enquirySchema';
import { Heading, EnquiryInputs, ErrorModal, Loading } from '../../components';
import {
  ILocationState,
  IEnquiry,
  IGuestRequest,
  IGuestPreference,
} from './Enquiry.types';
import { RoomType } from '../../types/roomType';
import { InitialGuestPreference, EnquiriesInitial } from './initialValues';
import { makeBooking } from '../../apis/makeBooking';
import Numbers from '../../utils/Numbers';

import { FormContainer, Title, Text, ButtonWrapper } from './Enquiry.styles';
import { ButtonPrimary as Button } from '../../styles/Button/Button.styles';

const Enquiry = () => {
  const { state }: any = useLocation<ILocationState>();
  const history = useHistory();

  const [property, setProperty] = useState<RoomType>();
  const [enquiryError, setEnquiryError] = useState<any>(null);
  const [guestPreference, setGuestPreference] = useState<IGuestPreference>(
    InitialGuestPreference
  );
  const [enquiries, setEnquiries] = useState<IEnquiry>(EnquiriesInitial);
  const [loading, setLoading] = useState<boolean>(false);
  const totalPrice = Numbers.formatPrice(guestPreference.total);

  const goBack = () => history.goBack();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEnquiry>({
    resolver: yupResolver(enquirySchema),
  });

  const onSubmit = async (data: IEnquiry) => {
    setEnquiryError(null);
    const confirm = window.confirm(
      "I'm confirming that all of my details is correct."
    );

    if (!confirm) return;
    setLoading(true);

    const generatedId = nanoid(8).toUpperCase();

    enquiryError && setLoading(false);

    const bookRoom: any = await makeBooking(
      data,
      guestPreference,
      generatedId,
      property,
      setEnquiryError
    );

    if (bookRoom?.created_at) {
      setLoading(false);
      return history.push('/summary', { bookingSummary: bookRoom });
    }
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
      <Heading align="center">Your're almost there.</Heading>
      {loading && <Loading state={loading} />}
      {enquiryError && (
        <ErrorModal error={enquiryError} message={enquiryError?.statusText} />
      )}

      <FormContainer>
        <Title> Enquiry for {property?.Title} </Title>
        <Text>
          {' '}
          {guestPreference.numberOfGuests} guests,{' '}
          {guestPreference.lengthOfStays} nights
          <br />$ {totalPrice}
        </Text>
        <EnquiryInputs
          errors={errors}
          enquiries={enquiries}
          register={register}
          handleEnquiryChange={handleEnquiryChange}
        />
        <ButtonWrapper>
          <Button onClick={goBack}>Back</Button>
          <Button onClick={handleSubmit(onSubmit)}>Book</Button>
        </ButtonWrapper>
      </FormContainer>
    </>
  );
};

export default Enquiry;
