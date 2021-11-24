import { useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContext } from '../../context/AuthProvider';
import { addRoomSchema } from '../../validation/addRoomSchema';
import { RoomType } from '../../types/roomType';
import { manageRoom } from '../../apis/manageRoom';
import { PropertyType } from '../../components/PropertyInputs/PropertyInputs.types';
import { FormContainer, Button, Spacer } from './ManageProperty.styles';
import { ButtonOutlinedDanger as Delete } from '../../styles/Button/Button.styles';
import {
  PropertyInputs,
  PropertyOptions,
  Heading,
  Snackbar,
  ErrorModal,
} from '../../components';

interface IPropertyState {
  property: RoomType;
}

const ManageProperty = () => {
  const { state } = useLocation<IPropertyState>();
  const room: RoomType = state.property;
  const history = useHistory();
  const [auth] = useContext<any>(AuthContext);
  const token = auth?.jwt;
  const [error, setError] = useState<any>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [propertyOptions, setPropertyOptions] = useState({
    breakfast_included: room.breakfast_included,
    free_cancellation: room.free_cancellation,
    wifi: room.wifi,
    featured: room.featured,
  });
  const [property, setProperty] = useState<PropertyType>({
    Title: room.Title,
    room_type: room.room_type,
    bed_type: room.bed_type,
    price_per_night: room.price_per_night,
    guest_review: room.guest_review,
    image_01: room.image_01,
    image_02: room.image_02,
    image_03: room.image_03,
    image_04: room.image_04,
    subtitle: room.subtitle,
    property_type: room.property_type,
    neighbourhood: room.neighbourhood,
    description: room.description,
  });
  const roomId = room.id;

  !auth && history.push('/');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PropertyType>({
    resolver: yupResolver(addRoomSchema),
  });

  const handleDelete = async (data) => {
    setError(null);
    const confirm = window.confirm(
      'Are you sure about deleting this property?'
    );

    if (!confirm) return;

    const deleteProperty: any = await manageRoom(
      'DELETE',
      token,
      setError,
      propertyOptions,
      data,
      roomId
    );

    if (deleteProperty?.updated_at) {
      setSuccess(true);
      setTimeout(() => history.push('/all-properties'), 1200);
    } else return error;

    return deleteProperty;
  };

  const onSubmit = async (data: PropertyType) => {
    setError(null);

    const updateProperty: any = await manageRoom(
      'PUT',
      token,
      setError,
      propertyOptions,
      data,
      roomId
    );

    if (updateProperty?.updated_at) {
      setSuccess(true);
      setTimeout(() => history.push('/all-properties'), 1200);
    } else return error;

    return updateProperty;
  };

  const handleChange =
    (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setProperty({
        ...property,
        [prop]: event.target.value,
      });
    };

  const handlePropertyOptions = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPropertyOptions({
      ...propertyOptions,
      [event.target.name]: event.target.checked,
    });
  };

  if (error) return <ErrorModal error={error} message={error?.statusText} />;

  return (
    <>
      <Heading align="center">Managing property</Heading>
      <FormContainer>
        <PropertyOptions
          propertyOptions={propertyOptions}
          handlePropertyOptions={handlePropertyOptions}
        />

        <PropertyInputs
          errors={errors}
          property={property}
          register={register}
          handleChange={handleChange}
        />

        <Button onClick={handleSubmit(onSubmit)}>Update</Button>
        <Spacer />
        <Delete onClick={handleDelete}>Delete Property</Delete>
      </FormContainer>
      {success && <Snackbar message="Successfully updated" />}
    </>
  );
};

export default ManageProperty;
