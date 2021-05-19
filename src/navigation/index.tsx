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
import { GlobalAlertsProvider } from '../contexts/GlobalAlertsContext';
import { OnboardingStack } from '../modules/onboarding/OnboardingStack';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const { user, refreshUserFromAsyncStorage } = useContext(AuthContext);

  refreshUserFromAsyncStorage();

  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ErrorBoundary errorScope="ROOT">
        <GlobalAlertsProvider>
          <ActiveStack user={user} />
        </GlobalAlertsProvider>
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
  } else if (user && user.onboarded) {
    Logger.debug('NAVIGATION__ACTIVE_STACK--AUTH_STACK', user);
    return <AuthStack />;
  }

  Logger.debug('NAVIGATION__ACTIVE_STACK--ONBOARDING_STACK', user);
  return <OnboardingStack />;
}
