import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import EXEC616 from "../screens/EXEC616/EXEC616";
import EXEC643 from "../screens/EXEC643/EXEC643";

const Stack = createStackNavigator();

export default function Payments() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Index" component={EXEC643} />
      <Stack.Screen name="ContactUs" component={EXEC616} />
    </Stack.Navigator>
  );
}
