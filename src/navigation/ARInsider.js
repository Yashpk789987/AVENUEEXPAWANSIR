import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import EXEC627 from "../screens/EXEC627/EXEC627";
import EXEC631 from "../screens/EXEC631/EXEC631";
import EXEC632 from "../screens/EXEC632/EXEC632";

const Stack = createStackNavigator();

export default function ARInsider() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Index" component={EXEC627} />
      <Stack.Screen name="ParticularARInsider" component={EXEC631} />
      <Stack.Screen name="RateSubmissionARInsider" component={EXEC632} />
    </Stack.Navigator>
  );
}
