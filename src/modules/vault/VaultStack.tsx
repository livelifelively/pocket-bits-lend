import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { VaultParamList } from "./VaultParamList";

import VaultScreen from "./screens/VaultScreen";
import ActiveDepositsScreen from "./screens/ActiveDepositsScreen";
import CreateVaultScreen from "./screens/CreateVaultScreen";
import VaultCreatedScreen from "./screens/VaultCreatedScreen";
import VaultHistoryScreen from "./screens/VaultHistoryScreen";

interface VaultStackProps {}

const Stack = createStackNavigator<VaultParamList>();

export const VaultStack: React.FC<VaultStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
      initialRouteName="Vault"
    >
      <Stack.Screen options={{ headerTitle: "Sign In" }} name="Vault" component={VaultScreen} />
      <Stack.Screen options={{ headerTitle: "Sign In" }} name="ActiveDeposits" component={ActiveDepositsScreen} />
      <Stack.Screen options={{ headerTitle: "Sign Up" }} name="CreateVault" component={CreateVaultScreen} />
      <Stack.Screen options={{ headerTitle: "Set Passcode" }} name="VaultCreated" component={VaultCreatedScreen} />
      <Stack.Screen options={{ headerTitle: "Verify Email" }} name="VaultHistory" component={VaultHistoryScreen} />
    </Stack.Navigator>
  );
};
