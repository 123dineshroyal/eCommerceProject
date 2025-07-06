import React from 'react';
import Navigator from './src/navigation';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
import { COLORS } from './src/constants/themes';

function App() {
  const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    ...COLORS
  },
};
  return (
      <PaperProvider theme={theme}>
        <Navigator />
      </PaperProvider>
  );
}

export default App;
