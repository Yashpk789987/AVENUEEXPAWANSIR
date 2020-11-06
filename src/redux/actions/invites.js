import { setLoading, clearError, setError } from "./app";
import post from "../../api/post";

export const invite = (form, navigation = undefined) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await post("/invite", form, dispatch);
    if (response) {
      if (response.ok) {
        dispatch(setLoading(false));
        dispatch(clearError());
        if (navigation) {
          navigation.goBack();
        }
        return;
      }
    }
    dispatch(setLoading(false));
    dispatch(setError(response.message || "there is some server error"));
    setTimeout(() => dispatch(clearError()), 2500);
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError("there is some server error"));
    setTimeout(() => dispatch(clearError()), 2500);
  }
};
