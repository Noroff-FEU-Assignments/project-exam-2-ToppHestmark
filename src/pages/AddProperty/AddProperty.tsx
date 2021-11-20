// Libraries
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

import { AuthContext } from '../../context/AuthProvider';
import { addRoomSchema } from '../../validation/addRoomSchema';
import { PropertyInputs, PropertyOptions } from '../../components';
import { PropertyType } from '../../components/PropertyInputs/PropertyInputs.types';
import { manageRoom } from '../../apis/manageRoom';
import { initialProperty, initialOptions } from './initialValues';
import { FormContainer } from './AddProperty.styles';

const AddProperty = () => {
  const [auth] = useContext<any>(AuthContext);
  const [addError, setAddError] = useState<any>(null);
  const [propertyOptions, setPropertyOptions] = useState(initialOptions);

  const [property, setProperty] = useState<PropertyType>(initialProperty);

  const history = useHistory();
  const token = auth?.jwt;

  !auth && history.push('/');

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
