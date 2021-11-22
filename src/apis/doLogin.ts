import { LOGIN_URL } from '../apis/apis';

export interface ILogin {
  username: string;
  password: string;
}

export const doLogin = async (
  data: ILogin,
  setLoginError: (error) => void
): Promise<void> => {
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
    const response = await fetch(LOGIN_URL, options);

    !response.ok && setLoginError(response);

    return await response.json();
  } catch (error) {
    console.log('Login error: ', error);
  }
};
