import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SettingsParamList } from "./SettingsParamList";

import SettingsScreen from "./screens/SettingsScreen";
import ProfileSettingsScreen from "./screens/ProfileSettingsScreen";
import SecuritySettingsScreen from "./screens/SecuritySettingsScreen";
import TwoFactorAuthenticationScreen from "./screens/TwoFactorAuthenticationScreen";
import ChangePasscodeScreen from "./screens/ChangePasscodeScreen";

interface SettingsStackProps {}

const Stack = createStackNavigator<SettingsParamList>();

export const SettingsStack: React.FC<SettingsStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
      initialRouteName="Settings"
    >
      <Stack.Screen options={{ headerTitle: "Sign In" }} name="Settings" component={SettingsScreen} />
      <Stack.Screen options={{ headerTitle: "Sign In" }} name="ProfileSettings" component={ProfileSettingsScreen} />
      <Stack.Screen options={{ headerTitle: "Sign Up" }} name="SecuritySettings" component={SecuritySettingsScreen} />
      <Stack.Screen options={{ headerTitle: "Set Passcode" }} name="TwoFactorAuthentication" component={TwoFactorAuthenticationScreen} />
      <Stack.Screen options={{ headerTitle: "Verify Email" }} name="ChangePasscode" component={ChangePasscodeScreen} />
    </Stack.Navigator>
  );
};
