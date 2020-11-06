import {setError} from '../redux/actions/app';
import {URL} from './baseurl';

export default async (url, dispatch = undefined) => {
  console.log(`${URL}${url}`);

  try {
    const response = await fetch(`${URL}${url}`);
    if (response.status === 200) {
      return await response.json();
    }
    if (dispatch) {
      dispatch(setError('there is some server error'));
    }
    return false;
  } catch (error) {
    if (dispatch) {
      dispatch(setError('there is some server error'));
    }
    return false;
  }
};
