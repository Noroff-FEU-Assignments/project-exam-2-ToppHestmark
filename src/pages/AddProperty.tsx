// Libraries
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { FormGroup, Button } from '@mui/material';
import styled from 'styled-components/macro';

import { ROOMS_URL } from '../settings/apis';
import { AuthContext } from '../context/AuthProvider';
import { addRoomSchema } from '../validation/addRoomSchema';
import PropertyInputs from '../components/form/PropertyInputs';
import { PropertyType } from '../components/form/PropertyInputs.types';
import PropertyOptions from '../components/form/PropertyOptions';

const AddProperty: React.FC = () => {
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
    // description: '',
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

  function onSubmit(data: PropertyType) {
    setAddError(null);
    console.log('Form submit inputs: ', data);
    // console.log('Property options:', propertyOptions);

    // const options = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: 'Bearer ' + token,
    //   },
    //   body: JSON.stringify({
    //     identifier: data.username,
    //     password: data.password,
    //   }),
    // };

    // try {
    //   const response = await (await fetch(ROOMS_URL, options)).json();
    //   const { user, error } = response;

    //   if (user) {
    //     setAuth(response);
    //     history.push('/');
    //   }

    //   if (error) {
    //     setAddError(error);
    //   }
    // } catch (error) {
    //   console.log('error', error);
    //   setAddError(error);
    // }
  }

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
    <FormGroup>
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
    </FormGroup>
  );
};

export default AddProperty;
