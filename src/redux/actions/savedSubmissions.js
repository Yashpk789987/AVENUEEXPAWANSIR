import _ from "lodash";
import { setLoading, clearError, setError } from "./app";
import get from "../../api/get";

export const doCompleteAppend = (savedSubmissions, totalCount) => {
  return {
    type: "APPEND_SAVED_SUBMISSIONS",
    payload: {
      savedSubmissions,
      totalCount,
    },
  };
};

export const doLoadSavedSubmissions = (limit) => async (dispatch, getState) => {
  const {
    user: { userId },
    savedSubmissions: { savedSubmissions },
  } = getState();

  try {
    dispatch(setLoading(true));
    const response = await get(
      `/saved-submissions?executiveId=${userId}&offset=${savedSubmissions.length}&limit=${limit}`,
      dispatch
    );
    if (response) {
      if (response.ok) {
        dispatch(
          doCompleteAppend(response.submissions, response.totalSubmissions)
        );
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

export const doSetSelectedSubmission = (savedSubmission) => {
  return {
    type: "SET_SELECTED_SAVED_SUBMISSION",
    payload: {
      savedSubmission,
    },
  };
};

export const doLoadSavedSubmissionById = (submissionId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await get(
      `/get-submission-by-id?submissionId=${submissionId}`,
      dispatch
    );
    if (response) {
      if (response.ok) {
        dispatch(doSetSelectedSubmission(_.omit(response, ["ok"])));
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

export const doClearSelectedSubmission = () => ({
  type: "CLEAR_SELECTED_SAVED_SUBMISSION",
});
