import _ from "lodash";
import { setLoading, clearError, setError } from "./app";
import get from "../../api/get";

export const doCompleteLoad = (data) => {
  return {
    type: "LOAD_PAYMENTS",
    payload: {
      data,
    },
  };
};

export const doLoadPayments = () => async (dispatch, getState) => {
  const {
    user: { userId },
  } = getState();

  try {
    dispatch(setLoading(true));
    const response = await get(`/get-payments?executiveId=${userId}`, dispatch);
    if (response) {
      if (response.ok) {
        dispatch(doCompleteLoad(_.omit(response, ["ok"])));
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
