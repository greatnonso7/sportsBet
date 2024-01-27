import {ThemeProvider} from '@emotion/react';
import Navigation from './navigation';
import React from 'react';
import theme from 'theme';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar />
        <Navigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
