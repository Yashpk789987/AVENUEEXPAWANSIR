import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";

import EXEC5 from "../screens/EXEC5/EXEC5";
import EXECAPP1 from "../screens/EXECAPP1/EXECAPP1";
import EXEC4 from "../screens/EXEC4/EXEC4";
import SignUp from "./SignUp";
import Invite from "./Invite";
import ForgotPassword from "./ForgotPassword";
import EXEC63 from "../screens/EXEC63/EXEC63";
import Profile from "./Profile";
import { doLoadData } from "../redux/actions/user";
import Submissions from "./Submissions";
import SavedSubmissions from "./SavedSubmissions";
import ARInsider from "./ARInsider";
import Payments from "./Payments";
import Notifications from "./Notifications";

const Stack = createStackNavigator();

export default () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(doLoadData());
    }
  }, [isLoggedIn, dispatch]);

  if (isLoggedIn) {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={EXEC63} />
        <Stack.Screen name="Submissions" component={Submissions} />
        <Stack.Screen name="SavedSubmissions" component={SavedSubmissions} />
        <Stack.Screen name="ARInsider" component={ARInsider} />
        <Stack.Screen name="Payments" component={Payments} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Invite" component={Invite} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Index" component={EXECAPP1} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={EXEC5} />
      <Stack.Screen name="TermsAndConditions" component={EXEC4} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};
