// Libraries
import { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { TextField } from '@mui/material';

import { AuthContext } from '../../context/AuthProvider';
import { loginSchema } from '../../validation/loginSchema';
import { doLogin, ILogin } from '../../apis/doLogin';
import { initialLoginValues } from './initialValues';
import { Head, Loading } from '../../components';

import {
  Container,
  TitleText,
  InputWrap,
  SubmitButton,
  FormWrapper,
  ErrorMessage,
} from './Login.styles';

const Login = () => {
  const history = useHistory();
  const [loginError, setLoginError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [values, setValues] = useState<ILogin>(initialLoginValues);
  const [auth, setAuth] = useContext<any>(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: ILogin) => {
    setLoginError(null);
    setLoading(true);

    const login: any = await doLogin(data, setLoginError);

    if (login?.user) {
      setLoading(false);
      setAuth(login);
      setValues(initialLoginValues);
      history.push('/all-properties');
    }

    setLoading(false);

    return login;
  };

  const handleChange =
    (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setLoginError(null);
      setValues({ ...values, [prop]: event.target.value });
    };

  useEffect(
    () => auth && history.push('/'),

    []
  );

  return (
    <Container>
      <Head
        title="Sign in"
        description="Sign in as admin ang start managing the properties."
      />
      {loading && <Loading state={loading} />}
      <FormWrapper>
        <TitleText>Login</TitleText>
        <ErrorMessage>
          {loginError?.status === 400 && 'Identifier or password invalid.'}
        </ErrorMessage>
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
