import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Text } from 'native-base';

import { store, persistor } from './src/redux/store';
import Main from './src/navigation/Main';

const App = () => (
  <NavigationContainer>
    <PersistGate loading={<Text>Loaing</Text>} persistor={persistor}>
      <Provider store={store}>
        <StatusBar translucent backgroundColor="transparent" />
        <Main />
      </Provider>
    </PersistGate>
  </NavigationContainer>
);

export default App;

// eslint-disable-next-line no-lone-blocks
// apiKey='AIzaSyD54ZtfRSPB7S80fXTMx96wWtHRPH9UL2k'
