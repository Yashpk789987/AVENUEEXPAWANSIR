import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import EXEC623 from "../screens/EXEC623/EXEC623";
import EXEC624 from "../screens/EXEC624/EXEC624";

const Stack = createStackNavigator();

export default function SavedSubmissions() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Index" component={EXEC623} />
      <Stack.Screen name="ParticularSavedSubmission" component={EXEC624} />
    </Stack.Navigator>
  );
}
