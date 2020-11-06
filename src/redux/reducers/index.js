/* eslint-disable no-param-reassign */

import { combineReducers } from "redux";

import app from "./app";
import user from "./user";
import submissions from "./submissions";
import savedSubmissions from "./savedSubmissions";
import payments from "./payments";
import arinsiders from "./arinsiders";
import notifications from "./notifications";

const appReducer = combineReducers({
  user,
  app,
  submissions,
  savedSubmissions,
  arinsiders,
  payments,
  notifications,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
