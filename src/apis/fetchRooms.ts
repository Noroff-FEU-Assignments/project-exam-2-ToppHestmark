import { ROOMS_URL } from './apis';

export const fetchRooms = async (
  setError: (error) => void,
  id?: number | string
): Promise<void> => {
  try {
    const res = await fetch(`${ROOMS_URL}/${id}`);
    if (!res.ok) return setError(res);

    return await res.json();
  } catch (error) {
    console.log('Fetch rooms error: ', error);
  }
};
