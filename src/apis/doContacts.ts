import { CONTACTS_URL } from './apis';
import { ContactType } from '../pages/Contact/Contact.types';

export const doContact = async (
  data: ContactType,
  setContactError: (error) => void
): Promise<void> => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullname: data.fullname,
      email: data.email,
      subject: data.subject,
      message: data.message.trim(),
    }),
  };

  try {
    const response = await fetch(CONTACTS_URL, options);

    !response.ok && setContactError(response);

    return await response.json();
  } catch (error) {
    console.log('Message promise error: ', error);
  }
};
