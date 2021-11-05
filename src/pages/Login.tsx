// Libraries
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { FormControl, FormGroup, Button, TextField } from '@mui/material';
import styled from 'styled-components';

import { LOGIN_URL } from '../apis/apis';
import { AuthContext } from '../context/AuthProvider';
import { loginSchema } from '../validation/loginSchema';

export const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface LoginType {
  username: string;
  password: string;
}

const Login = () => {
  const [loginError, setLoginError] = useState<any>(null);
  const [values, setValues] = useState<LoginType>({
    username: '',
    password: '',
  });
  const history = useHistory();
  const [auth, setAuth] = useContext<any>(AuthContext);

  auth && history.push('/');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(loginSchema),
  });

  async function onSubmit(data: LoginType) {
    setLoginError(null);
    console.log(data);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: data.username,
        password: data.password,
      }),
    };

    try {
      const response = await (await fetch(LOGIN_URL, options)).json();
      const { user, error } = response;

      if (user) {
        setAuth(response);
        history.push('/');
      }

      if (error) {
        setLoginError(error);
      }
    } catch (error) {
      console.log('error', error);
      setLoginError(error);
    }
  }

  const handleChange =
    (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <Container>
      <FormGroup>
        <FormControl sx={{ m: 1, width: '35ch' }}>
          <TextField
            type="text"
            variant="standard"
            label="User"
            placeholder="Username or email"
            multiline
            error={errors?.username ? true : false}
            value={values.username}
            helperText={errors?.username && errors?.username.message}
            {...register('username')}
            onChange={handleChange('username')}
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '35ch' }}>
          <TextField
            type="password"
            variant="standard"
            label="Password"
            placeholder="Your secret key"
            multiline
            error={errors.password ? true : false}
            value={values.password}
            helperText={errors?.password && errors?.password.message}
            {...register('password')}
            onChange={handleChange('password')}
          />
        </FormControl>

        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </FormGroup>
    </Container>
  );
};

export default Login;
