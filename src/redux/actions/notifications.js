import { setLoading, clearError, setError } from "./app";
import get from "../../api/get";
import post from "../../api/post";

export const doCompleteLoad = (notifications) => {
  return {
    type: "LOAD_NOTIFICATIONS",
    payload: {
      notifications,
    },
  };
};

export const doLoadNotifications = () => async (dispatch, getState) => {
  const {
    user: { userId },
  } = getState();

  try {
    dispatch(setLoading(true));
    const response = await get(
      `/get-notifications?executiveId=${userId}`,
      dispatch
    );
    if (response) {
      if (response.ok) {
        dispatch(doCompleteLoad(response.notifications));
        dispatch(setLoading(false));
        dispatch(clearError());
        return;
      }
    }
    dispatch(setLoading(false));
    dispatch(setError(response.message || "there is some server error"));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError("there is some server error"));
  }
};

export const doSave = (form, navigation = undefined) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await post(`/read-notification-by-id`, form, dispatch);
    if (response) {
      if (response.ok) {
        dispatch(setLoading(false));
        dispatch(clearError());
        dispatch(doLoadNotifications());
        if (navigation) navigation.popToTop();
        return;
      }
    }
    dispatch(setLoading(false));
    dispatch(setError(response.message || "there is some server error"));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError("there is some server error"));
  }
};
