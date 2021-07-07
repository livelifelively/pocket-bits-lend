import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { AuthProvider } from './src/modules/auth/AuthProvider';
import { APIRequestsProvider } from './src/contexts/APIRequestsContext';
import Theme from './src/theme';
import store from './src/redux/Store';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ReduxProvider store={store}>
          <PaperProvider theme={Theme}>
            <AuthProvider>
              <APIRequestsProvider>
                <Navigation colorScheme={colorScheme} />
              </APIRequestsProvider>
            </AuthProvider>
          </PaperProvider>
        </ReduxProvider>
      </SafeAreaProvider>
    );
  }
}
