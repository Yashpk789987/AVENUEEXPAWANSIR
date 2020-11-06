import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EXEC68 from '../screens/EXEC68/EXEC68';
import EXEC69 from '../screens/EXEC69/EXEC69';
import EXEC610 from '../screens/EXEC610/EXEC610';
import EXEC611 from '../screens/EXEC611/EXEC611';
import EXEC67 from '../screens/EXEC67/EXEC67';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="VerifyMobile" component={EXEC68} />
      <Stack.Screen name="VerifyCode" component={EXEC69} />
      <Stack.Screen name="ContactUs" component={EXEC67} />
      <Stack.Screen name="SetNewPassword" component={EXEC610} />
      <Stack.Screen name="PasswordUpdated" component={EXEC611} />
    </Stack.Navigator>
  );
};
