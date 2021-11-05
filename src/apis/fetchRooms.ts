import { ROOMS_URL } from './apis';

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
