import { LOGIN_URL } from '../apis/apis';

export interface ILogin {
  username: string;
  password: string;
}

export const doLogin = async (data: ILogin): Promise<void> => {
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

    const { error } = response;

    if (error) return error;

    return response;
  } catch (error) {
    console.log('Login error: ', error);
  }
};
