// Libraries
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { TextField } from '@mui/material';

import { AuthContext } from '../../context/AuthProvider';
import { loginSchema } from '../../validation/loginSchema';
import { doLogin, ILogin } from '../../apis/doLogin';
import {
  Container,
  TitleText,
  InputWrap,
  SubmitButton,
  FormWrapper,
} from './Login.styles';

const Login = () => {
  const [values, setValues] = useState<ILogin>({
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
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: ILogin) => {
    const login: any = await doLogin(data);
    console.log('Login: ', login);

    if (login?.user) {
      setAuth(login);
      history.push('/');
    }
  };

  const handleChange =
    (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <Container>
      <FormWrapper>
        <TitleText>Login</TitleText>
        <InputWrap>
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
        </InputWrap>

        <InputWrap>
          <TextField
            type="password"
            variant="standard"
            label="Password"
            placeholder="Your secret key"
            error={errors.password ? true : false}
            value={values.password}
            helperText={errors?.password && errors?.password.message}
            {...register('password')}
            onChange={handleChange('password')}
          />
        </InputWrap>

        <SubmitButton onClick={handleSubmit(onSubmit)}>Submit</SubmitButton>
      </FormWrapper>
    </Container>
  );
};

export default Login;
