import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  VaultHistoryParamList,
  VaultCreationParamList,
  VaultActiveDepositsParamList,
  // VaultCreationNavProps,
  // VaultActiveDepositsNavProps,
  // VaultHistoryNavProps
} from './VaultParamList';

import ActiveDepositsScreen from './screens/ActiveDepositsScreen';
import CreateVaultScreen from './screens/CreateVaultScreen';
import VaultCreatedScreen from './screens/VaultCreatedScreen';
import VaultHistoryScreen from './screens/VaultHistoryScreen';

const VaultHistory = createStackNavigator<VaultHistoryParamList>();
const VaultActiveDeposits = createStackNavigator<VaultActiveDepositsParamList>();
const VaultCreation = createStackNavigator<VaultCreationParamList>();

export const VaultCreationStack: React.FC = ({ route }) => {
  return (
    <VaultCreation.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="CreateVault"
    >
      <VaultCreation.Screen options={{ headerTitle: 'Wallet' }} name="CreateVault">
        {(props) => <CreateVaultScreen {...props} vaults={route.params} />}
      </VaultCreation.Screen>
      <VaultCreation.Screen name="VaultCreated" component={VaultCreatedScreen} />
    </VaultCreation.Navigator>
  );
};

export const VaultHistoryStack: React.FC = () => {
  return (
    <VaultHistory.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="VaultHistory"
    >
      <VaultHistory.Screen name="VaultHistory" component={VaultHistoryScreen} />
    </VaultHistory.Navigator>
  );
};

export const VaultActiveDepositsStack: React.FC = () => {
  return (
    <VaultActiveDeposits.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="ActiveDeposits"
    >
      <VaultActiveDeposits.Screen name="ActiveDeposits" component={ActiveDepositsScreen} />
    </VaultActiveDeposits.Navigator>
  );
};
