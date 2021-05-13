import React, { useContext } from 'react';
import { ColorSchemeName } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import { AuthStack } from '../modules/auth/AuthStack';
import { PasscodeAuthStack } from '../modules/passcode-auth/PasscodeAuthStack';
import { SetPasscodeStack } from '../modules/set-passcode/SetPasscodeStack';
import { AppStack } from './AppStack';
import Logger from '../services/logger';
import { AuthContext } from '../modules/auth/AuthProvider';
import ErrorBoundary from '../components/design/ErrorBoundary';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const { user, refreshUserFromAsyncStorage } = useContext(AuthContext);

  // refreshUserFromAsyncStorage();

  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ErrorBoundary errorScope="ROOT">
        <ActiveStack user={user} />
      </ErrorBoundary>
    </NavigationContainer>
  );
}

function ActiveStack({ user }: { user: User }) {
  if (user && user.token && user.email && user.passcode === '') {
    Logger.debug('NAVIGATION__ACTIVE_STACK--SET_PASSCODE_STACK', user);
    return <SetPasscodeStack />;
  } else if (user && user.token && user.email && user.passcode.length === 4 && !user.userAuthenticated) {
    Logger.debug('NAVIGATION__ACTIVE_STACK--PASSCODE_AUT_STACK', user);
    return <PasscodeAuthStack />;
  } else if (user && user.token && user.email && user.passcode.length === 4 && user.userAuthenticated) {
    Logger.debug('NAVIGATION__ACTIVE_STACK--APP_STACK', user);
    return <AppStack />;
  }
  Logger.debug('NAVIGATION__ACTIVE_STACK--AUTH_STACK', user);
  return <AuthStack />;
}
