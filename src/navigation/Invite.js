import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import EXEC648 from "../screens/EXEC648/EXEC648";
import EXEC649 from "../screens/EXEC649/EXEC649";

const Stack = createStackNavigator();

export default function Invite() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Index" component={EXEC648} />
      <Stack.Screen name="InviteForm" component={EXEC649} />
    </Stack.Navigator>
  );
}
