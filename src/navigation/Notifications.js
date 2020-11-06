import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import EXEC620 from "../screens/EXEC620/EXEC620";
import EXEC621 from "../screens/EXEC621/EXEC621";

const Stack = createStackNavigator();

export default function Notifications() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Index" component={EXEC620} />
      <Stack.Screen name="ParticularNotification" component={EXEC621} />
    </Stack.Navigator>
  );
}
