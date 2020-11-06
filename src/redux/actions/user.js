import post from "../../api/post";
import { setLoading, setError, clearError } from "./app";
import get from "../../api/get";

export const signIn = (isLoggedIn) => ({
  type: "SIGN_IN",
  payload: {
    isLoggedIn,
  },
});

export const cancel = () => {
  return {
    type: "CANCEL",
  };
};

export const goNext = () => {
  return {
    type: "GO_TO_NEXT",
  };
};

export const completeStep1 = (mobileNumber) => {
  return {
    type: "STEP_1",
    payload: {
      mobileNumber,
    },
  };
};

export const completeStep3 = (userId) => {
  return {
    type: "STEP_3",
    payload: {
      userId,
    },
  };
};

export const completeStep4 = (form) => {
  return {
    type: "STEP_4",
    payload: {
      form,
    },
  };
};

export const completeStep5 = (form) => {
  return {
    type: "STEP_5",
    payload: {
      form,
    },
  };
};

export const completeLogin = (userId) => {
  return {
    type: "LOGIN",
    payload: {
      userId,
    },
  };
};

export const doStep1 = (form) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await post("/verify-mobile", form, dispatch);
    if (response) {
      if (response.ok) {
        setTimeout(() => alert(response.otp), 100);
        dispatch(completeStep1(form.mobileNumber));
        dispatch(setLoading(false));
        dispatch(clearError());
        dispatch(goNext());
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

export const resendCode = () => (dispatch, getState) => {
  const { mobileNumber } = getState().user;
  dispatch(setLoading(true));
  return new Promise((resolve, reject) => {
    post("/resend-code", { userMobileNumber: mobileNumber }, dispatch)
      .then((response) => {
        if (response) {
          if (response.ok) {
            setTimeout(() => alert(response.otp), 100);
            dispatch(setLoading(false));
            dispatch(clearError());
            resolve("code sent on your mobile number");
          } else {
            reject(response.message || "there is some server error");
            dispatch(setLoading(false));
            dispatch(
              setError(response.message || "there is some server error")
            );
            setTimeout(() => dispatch(clearError()), 2500);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        // eslint-disable-next-line prefer-promise-reject-errors
        reject("there is some server error");
        dispatch(setLoading(false));
        dispatch(setError("there is some server error"));
        setTimeout(() => dispatch(clearError()), 2500);
      });
  });
};

export const doStep2 = (form) => (dispatch) => {
  dispatch(setLoading(true));
  return new Promise((resolve, reject) => {
    post("/verify-code", form, dispatch)
      .then((response) => {
        if (response) {
          if (response.ok) {
            dispatch(setLoading(false));
            dispatch(goNext());
            dispatch(clearError());
            return resolve();
          }
        }
        dispatch(setLoading(false));
        dispatch(setError(response.message || "you have entered wrong otp"));
        setTimeout(() => dispatch(clearError()), 2500);
        return reject(response.message || "you have entered wrong otp");
      })
      .catch((err) => {
        console.log(err);
        // eslint-disable-next-line prefer-promise-reject-errors
        reject("there is some server error");
        dispatch(setLoading(false));
        dispatch(setError("there is some server error"));
        setTimeout(() => dispatch(clearError()), 2500);
      });
  });
};

export const doStep3 = (form) => (dispatch) => {
  dispatch(setLoading(true));
  return new Promise((resolve, reject) => {
    post("/verify-repo-code", form, dispatch)
      .then((response) => {
        if (response) {
          if (response.ok) {
            dispatch(completeStep3(response.userId));
            dispatch(setLoading(false));
            dispatch(goNext());
            dispatch(clearError());
            return resolve();
          }
        }
        dispatch(setLoading(false));
        dispatch(
          setError(response.message || "you have entered wrong repo code")
        );
        setTimeout(() => dispatch(clearError()), 2500);
        return reject(response.message || "you have entered wrong repo code");
      })
      .catch((err) => {
        console.log(err);
        // eslint-disable-next-line prefer-promise-reject-errors
        reject("there is some server error");
        dispatch(setLoading(false));
        dispatch(setError("there is some server error"));
        setTimeout(() => dispatch(clearError()), 2500);
      });
  });
};

export const doStep4 = (form) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await post("/create-account", form, dispatch);
    if (response) {
      if (response.ok) {
        dispatch(completeStep4(form));
        dispatch(setLoading(false));
        dispatch(clearError());
        dispatch(goNext());
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

export const doStep5 = (form) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await post("/set-account-details", form, dispatch);
    if (response) {
      if (response.ok) {
        dispatch(setLoading(false));
        dispatch(clearError());
        dispatch(signIn(true));
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

export const doLogin = (form) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await post("/login", form, dispatch);
    if (response) {
      if (response.ok) {
        dispatch(completeLogin(response.userId));
        dispatch(setLoading(false));
        dispatch(clearError());
        dispatch(signIn(true));
        return;
      }
    }
    dispatch(setLoading(false));
    dispatch(setError("invalid credientials..."));
    setTimeout(() => dispatch(clearError()), 2500);
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError("there is some server error"));
    setTimeout(() => dispatch(clearError()), 2500);
  }
};

export const doVerifyForNewPassword = (form, navigation = undefined) => async (
  dispatch
) => {
  try {
    dispatch(setLoading(true));
    const response = await post("/forgot-password", form, dispatch);
    if (response) {
      if (response.ok) {
        setTimeout(() => alert(response.otp), 100);
        dispatch(setLoading(false));
        dispatch(clearError());
        if (navigation) {
          navigation.navigate("VerifyCode", {
            ...form,
          });
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

export const resendCodeForNewPassword = (mobileNumber) => (dispatch) => {
  dispatch(setLoading(true));
  return new Promise((resolve, reject) => {
    post("/forgot-password", { mobileNumber }, dispatch)
      .then((response) => {
        if (response) {
          if (response.ok) {
            setTimeout(() => alert(response.otp), 100);
            dispatch(setLoading(false));
            dispatch(clearError());
            resolve("code sent on your mobile number");
          } else {
            reject(response.message || "there is some server error");
            dispatch(setLoading(false));
            dispatch(
              setError(response.message || "there is some server error")
            );
            setTimeout(() => dispatch(clearError()), 2500);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        // eslint-disable-next-line prefer-promise-reject-errors
        reject("there is some server error");
        dispatch(setLoading(false));
        dispatch(setError("there is some server error"));
        setTimeout(() => dispatch(clearError()), 2500);
      });
  });
};

export const doVerifyCodeForNewPassword = (
  form,
  navigation = undefined
) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await post("/forget-password-verify-code", form, dispatch);
    if (response) {
      if (response.ok) {
        dispatch(setLoading(false));
        dispatch(clearError());
        if (navigation) {
          navigation.navigate("SetNewPassword", {
            userId: response.userId,
          });
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

export const doSetNewPassword = (form, navigation) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await post("/set-new-password", form, dispatch);
    if (response) {
      if (response.ok) {
        dispatch(setLoading(false));
        dispatch(clearError());
        navigation.navigate("PasswordUpdated");
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

export const doSetNewPasswordFRomProfile = (form, navigation) => async (
  dispatch
) => {
  try {
    dispatch(setLoading(true));
    const response = await post("/set-new-password", form, dispatch);
    if (response) {
      if (response.ok) {
        dispatch(setLoading(false));
        dispatch(clearError());
        navigation.navigate("PasswordUpdated");
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

export const doAfterLoad = (userInfo) => {
  return {
    type: "LOAD_DATA",
    payload: {
      userInfo,
    },
  };
};

export const doLoadData = () => async (dispatch, getState) => {
  const {
    user: { userId },
  } = getState();
  try {
    dispatch(setLoading(true));
    const response = await get(
      `/fetch-user-details?userId=${userId}`,
      dispatch
    );
    if (response) {
      if (response.ok) {
        dispatch(doAfterLoad(response.data));
        dispatch(setLoading(false));
        dispatch(clearError());
        dispatch(goNext());
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

export const doContactUs = (form, navigation = undefined) => async (
  dispatch
) => {
  try {
    dispatch(setLoading(true));
    const response = await post("/contact-us", form, dispatch);
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

export const updateProfile = (form) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await post("/update-profile", form, dispatch);
    if (response) {
      if (response.ok) {
        dispatch(setLoading(false));
        dispatch(clearError());
        dispatch(doLoadData());
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

export const doLogout = () => {
  return {
    type: "LOGOUT",
  };
};
