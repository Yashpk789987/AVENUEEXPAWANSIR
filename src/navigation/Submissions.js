import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EXEC615 from '../screens/EXEC615/EXEC6150';
import EXEC616 from '../screens/EXEC616/EXEC616';
import EXEC617 from '../screens/EXEC617/EXEC617';

const Stack = createStackNavigator();

export default function Submissions() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Index" component={EXEC615} />
      <Stack.Screen name="ParticularSubmission" component={EXEC616} />
      <Stack.Screen name="RateSubmission" component={EXEC617} />
    </Stack.Navigator>
  );
}
