import React from 'react';
import Navigator from './src/navigation';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
import { COLORS } from './src/constants/themes';
import { SafeAreaView } from 'react-native-safe-area-context';

function App() {
  const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      ...DefaultTheme.colors,
      ...COLORS,
    },
  };
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
      <PaperProvider theme={theme}>
        <Navigator />
      </PaperProvider>
    </SafeAreaView>
  );
}

export default App;
