// Libraries
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { FormGroup, Button } from '@mui/material';
import styled from 'styled-components';

import { AuthContext } from '../context/AuthProvider';
import { addRoomSchema } from '../validation/addRoomSchema';
import PropertyInputs from '../components/PropertyInputs';
import { PropertyType } from '../components/PropertyInputs.types';
import PropertyOptions from '../components/PropertyOptions';
import { manageRoom } from '../apis/manageRoom';

export const FormContainer = styled(FormGroup)`
  width: 100%;
`;

const AddProperty = () => {
  const [auth, setAuth] = useContext<any>(AuthContext);
  const [addError, setAddError] = useState<any>(null);
  const [breakfast, setBreakfast] = useState<boolean>(false);
  const [propertyOptions, setPropertyOptions] = useState({
    breakfast_included: true,
    free_cancellation: false,
    wifi: true,
    featured: false,
  });

  const [property, setProperty] = useState<PropertyType>({
    Title: '',
    room_type: '',
    bed_type: '',
    price_per_night: 0,
    guest_review: '',
    image_01: '',
    subtitle: '',
    property_type: '',
    neighbourhood: '',
    description: '',
  });

  const history = useHistory();
  const token = auth?.jwt;

  // !auth && history.push('/');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PropertyType>({
    resolver: yupResolver(addRoomSchema),
  });

  const onSubmit = async (data: PropertyType) => {
    setAddError(null);
    const addNewRoom = await manageRoom('POST', token, propertyOptions, data);

    console.log('Add property response', addNewRoom);
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

  return (
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

      <Button onClick={handleSubmit(onSubmit)}>Add</Button>
    </FormContainer>
  );
};

export default AddProperty;
