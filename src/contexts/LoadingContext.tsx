import React, { useState } from 'react';
import { View } from 'react-native';
import { Portal, Text, ActivityIndicator } from 'react-native-paper';

import Theme from '../theme/index';
// import Logger from '../services/logger';

export const LoadingContext = React.createContext<{
  showLoading: (visibility: boolean) => void;
}>({
  showLoading: () => {},
});

export const LoadingProvider: React.FC = ({ children }) => {
  const [visibility, setVisibility] = useState(() => false);

  return (
    <LoadingContext.Provider
      value={{
        showLoading: (visibility) => {
          setVisibility(visibility);
        },
      }}
    >
      {children}
      {visibility && (
        <Portal>
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ActivityIndicator animating={true} size="large" color={Theme.colors.primary} />
            <Text style={{ marginTop: 10 }}>Loading...</Text>
          </View>
        </Portal>
      )}
    </LoadingContext.Provider>
  );
};
