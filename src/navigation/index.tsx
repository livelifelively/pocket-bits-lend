import React, { useContext } from 'react';
import { ColorSchemeName } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import { AuthContext } from '../modules/auth/AuthProvider';
import { AuthStack } from '../modules/auth/AuthStack';
import { PasscodeAuthStack } from '../modules/passcode-auth/PasscodeAuthStack';
import { SetPasscodeStack } from '../modules/set-passcode/SetPasscodeStack';
import { AppStack } from './AppStack';
import Logger from '../services/logger';
import { User } from '../types';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const { user } = useContext(AuthContext);

  Logger.info('NAVIGATION', user);

  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ActiveStack user={user} />
    </NavigationContainer>
  );
}

function ActiveStack({ user }: { user: User }) {
  if (user && user.token && user.email && user.passcode === '') {
    return <SetPasscodeStack />;
  } else if (user && user.token && user.email && user.passcode.length === 4 && !user.userAuthenticated) {
    return <PasscodeAuthStack />;
  } else if (user && user.token && user.email && user.passcode.length === 4 && user.userAuthenticated) {
    return <AppStack />;
  }
  return <AuthStack />;
}
