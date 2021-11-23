import { CONTACTS_URL } from './apis';

type MethodsType = 'GET' | 'DELETE';

export const doMessage = async (
  method: MethodsType,
  token: string,
  setMessageError: (error) => void,
  messageId?: number
): Promise<void> => {
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  };

  try {
    const response = await fetch(
      messageId ? `${CONTACTS_URL}/${messageId}` : CONTACTS_URL,
      options
    );

    !response.ok && setMessageError(response);

    return await response.json();
  } catch (error) {
    console.log('Message promise error: ', error);
  }
};
