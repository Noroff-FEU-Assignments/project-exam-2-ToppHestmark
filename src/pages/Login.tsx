// Libraries
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  FormGroup,
  Button,
  FormHelperText,
} from '@mui/material';

import { LOGIN_URL } from '../apis/apis';
import { AuthContext } from '../context/AuthProvider';
import { loginSchema } from '../validation/loginSchema';

interface LoginType {
  username: string;
  password: string;
  showPassword: boolean;
}
interface LoginSchema {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [loginError, setLoginError] = useState<any>(null);
  const [values, setValues] = useState<LoginType>({
    username: '',
    password: '',
    showPassword: false,
  });
  const history = useHistory();
  const [auth, setAuth] = useContext<any>(AuthContext);

  auth && history.push('/');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
  });

  async function onSubmit(data: LoginSchema) {
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

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div
      style={{
        marginTop: 30,
        width: '100%',
      }}
    >
      <FormGroup>
        <FormControl
          error={errors.username ? true : false}
          sx={{ m: 1, width: '35ch' }}
        >
          <InputLabel>Username</InputLabel>
          <Input
            type="text"
            value={values.username}
            {...register('username')}
            onChange={handleChange('username')}
          />
          <FormHelperText> {errors.username?.message} </FormHelperText>
        </FormControl>

        <FormControl
          error={errors.password ? true : false}
          sx={{ m: 1, width: '35ch' }}
        >
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            {...register('password')}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText> {errors.password?.message} </FormHelperText>
        </FormControl>

        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </FormGroup>
    </div>
  );
};

export default Login;
