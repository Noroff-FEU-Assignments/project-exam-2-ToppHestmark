// Libraries
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../context/AuthProvider';
import { addRoomSchema } from '../../validation/addRoomSchema';
import {
  PropertyInputs,
  PropertyOptions,
  Heading,
  Snackbar,
  ErrorModal,
} from '../../components';
import { PropertyType } from '../../components/PropertyInputs/PropertyInputs.types';
import { manageRoom } from '../../apis/manageRoom';
import { initialProperty, initialOptions } from './initialValues';
import { Container, Form, Button } from './AddProperty.styles';

const AddProperty = () => {
  const [auth] = useContext<any>(AuthContext);
  const [error, setError] = useState<any>(null);
  const [success, setSuccess] = useState<boolean>(false);
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
    setError(null);

    const addNewRoom: any = await manageRoom(
      'POST',
      token,
      setError,
      propertyOptions,
      data
    );

    if (addNewRoom?.created_at) {
      setPropertyOptions(initialOptions);
      setProperty(initialProperty);
      setSuccess(true);
    } else return error;

    return addNewRoom;
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
      <Heading align="center">Add new property</Heading>
      <Container>
        <Form>
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
        </Form>
        {success && <Snackbar message="Successfully added new property" />}
      </Container>
    </>
  );
};

export default AddProperty;
