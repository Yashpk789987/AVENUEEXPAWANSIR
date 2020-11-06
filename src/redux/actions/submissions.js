import _ from "lodash";
import { setLoading, clearError, setError } from "./app";
import get from "../../api/get";
import post from "../../api/post";

export const doCompleteAppend = (submissions, totalCount) => {
  return {
    type: "APPEND",
    payload: {
      submissions,
      totalCount,
    },
  };
};

export const doCompleteRefresh = (submissions, totalCount) => {
  return {
    type: "REFRESH_SUBMISSIONS",
    payload: {
      submissions,
      totalCount,
    },
  };
};

export const doRefreshSsubmissions = () => async (dispatch, getState) => {
  const {
    user: { userId },
    submissions: { submissions },
  } = getState();

  try {
    dispatch(setLoading(true));
    const response = await get(
      `/get-submissions-by-executive-id?executiveId=${userId}&offset=${0}&limit=${
        submissions.length
      }`,
      dispatch
    );
    if (response) {
      if (response.ok) {
        dispatch(
          doCompleteRefresh(response.submissions, response.totalSubmissions)
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

export const doLoadSubmissions = (limit) => async (dispatch, getState) => {
  const {
    user: { userId },
    submissions: { submissions },
  } = getState();

  try {
    dispatch(setLoading(true));
    const response = await get(
      `/get-submissions-by-executive-id?executiveId=${userId}&offset=${submissions.length}&limit=${limit}`,
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

export const doSetSelectedSubmission = (submission) => {
  return {
    type: "SET_SELECTED_SUBMISSION",
    payload: {
      submission,
    },
  };
};

export const doLoadSubmissionById = (submissionId) => async (dispatch) => {
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
  type: "CLEAR_SELECTED_SUBMISSION",
});

export const doRateSubmission = (form, navigation = undefined) => async (
  dispatch
) => {
  try {
    dispatch(setLoading(true));
    const response = await post(`/rate-submission`, form, dispatch);
    if (response) {
      if (response.ok) {
        dispatch(setLoading(false));
        dispatch(clearError());
        dispatch(doRefreshSsubmissions());
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
