import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from '@navigation/index';
import AppThemeProvider from '@components/AppThemeProvider';
import ApolloClientProvider from '@components/ApolloClientProvider';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <AppThemeProvider>
          <ApolloClientProvider>
            <Navigation />
          </ApolloClientProvider>
        </AppThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
