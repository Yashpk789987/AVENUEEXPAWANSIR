import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import EXEC64 from "../screens/EXEC64/EXEC64";
import EXEC67 from "../screens/EXEC67/EXEC67";
import EXEC646 from "../screens/EXEC646/EXEC646";
import EXEC612 from "../screens/EXEC612/EXEC612";

const Stack = createStackNavigator();

export default function Profile() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Index" component={EXEC64} />
      <Stack.Screen name="ContactUs" component={EXEC67} />
      <Stack.Screen name="ChangePassword" component={EXEC646} />
      <Stack.Screen name="PasswordUpdated" component={EXEC612} />
    </Stack.Navigator>
  );
}
