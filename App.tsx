import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { AuthProvider } from "./src/modules/auth/AuthProvider";
import Theme from "./src/theme";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/* <Navigation colorScheme={colorScheme} /> */}
        <PaperProvider theme={Theme}>
          <AuthProvider>
            <Navigation colorScheme={colorScheme} />
          </AuthProvider>
        </PaperProvider>
        {/* <StatusBar style="dark" /> */}
      </SafeAreaProvider>
    );
  }
}
