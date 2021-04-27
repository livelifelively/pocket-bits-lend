import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthParamList } from './AuthParamList';

import HomeGuestScreen from './screens/HomeGuestScreen';
import LoginEmailScreen from './screens/LoginEmailScreen';
import LoginPasscodeScreen from './screens/LoginPasscodeScreen';
import SignupScreen from './screens/SignupScreen';
import SetPasscodeScreen from './screens/SetPasscodeScreen';
import VerifyEmailScreen from './screens/VerifyEmailScreen';

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
      initialRouteName="HomeGuest"
    >
      <Stack.Screen name="HomeGuest" component={HomeGuestScreen} />
      <Stack.Screen name="LoginEmail" component={LoginEmailScreen} />
      <Stack.Screen name="LoginPasscode" component={LoginPasscodeScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name="SetPasscode" component={SetPasscodeScreen} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
    </Stack.Navigator>
  );
};
