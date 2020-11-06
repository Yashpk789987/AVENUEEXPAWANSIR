import { setError } from '../redux/actions/app';
import { URL } from './baseurl';

export default async (url, data = {}, dispatch = undefined) => {
  console.log(`${URL}${url} ${JSON.stringify(data)}`);

  try {
    const response = await fetch(`${URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.log(error);
    if (dispatch) {
      dispatch(setError('there is some server error'));
    }
    return false;
  }
};
