import 'react-native-gesture-handler';
import React from 'react';
import Navigation from '@navigation/index';
import AppThemeProvider from '@components/AppThemeProvider';
import ApolloClientProvider from '@components/ApolloClientProvider';

function App(): JSX.Element {
  return (
    <AppThemeProvider>
      <ApolloClientProvider>
        <Navigation />
      </ApolloClientProvider>
    </AppThemeProvider>
  );
}

export default App;
