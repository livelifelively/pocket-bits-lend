import React, { useEffect, useState } from 'react';
import { ColorSchemeName } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import { AuthStack } from '../modules/auth/AuthStack';
import { PasscodeAuthStack } from '../modules/passcode-auth/PasscodeAuthStack';
import { SetPasscodeStack } from '../modules/set-passcode/SetPasscodeStack';
import { AppStack } from './AppStack';
import Logger from '../services/logger';
import AsyncStorage from '@react-native-community/async-storage';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const [user, setUser] = useState<User>(() => null);

  useEffect(() => {
    const getUser = async () => {
      const loggedInUser = await AsyncStorage.getItem('user');
      if (loggedInUser) {
        const loggedInUserObject: User = JSON.parse(loggedInUser);
        Logger.info('NAVIGATION', loggedInUserObject);
        setUser(loggedInUserObject);
      } else {
        setUser(null);
      }
    };
    getUser();
  }, []);

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
