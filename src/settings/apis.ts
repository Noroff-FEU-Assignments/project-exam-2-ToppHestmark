export const LOCALHOST_URL = 'http://localhost:1337';

export const BASE_URL = LOCALHOST_URL;
export const LOGIN_URL = `${BASE_URL}/auth/local`;
export const ROOMS_URL = `${BASE_URL}/rooms`;

export const fetchRooms = async (id?: number | string): Promise<void> => {
  try {
    const res = await fetch(`${ROOMS_URL}/${id}`);
    if (!res.ok) {
      throw new Error('Something went wrong when fetching data!');
    }

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
