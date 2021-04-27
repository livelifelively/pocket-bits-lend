import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { AppTabsParamList, AppStackParamList } from './AppParamList';

import HomeScreen from '../modules/bottom-tabs/HomeScreen';
import VaultScreen from '../modules/bottom-tabs/VaultScreen';
import RewardsScreen from '../modules/bottom-tabs/RewardsScreen';

import { VaultActiveDepositsStack, VaultCreationStack, VaultHistoryStack } from '../modules/vault/VaultStack';
import { WalletStack } from '../modules/wallet/WalletStack';
import { SettingsStack } from '../modules/settings/SettingsStack';
import { HomeIcon, RewardIcon, VaultIcon } from '../icons';

// interface AppTabsProps {}
// interface AppStackProps {}

const Tabs = createBottomTabNavigator<AppTabsParamList>();
const Stack = createStackNavigator<AppStackParamList>();

const AppTabs: React.FC = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          switch (route.name) {
          case 'Home':
            return <HomeIcon />;
          case 'Rewards':
            return <RewardIcon />;
          case 'Vault':
            return <VaultIcon />;

          default:
            break;
          }
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Vault" component={VaultScreen} />
      <Tabs.Screen name="Rewards" component={RewardsScreen} />
    </Tabs.Navigator>
  );
};

export const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
    >
      <Stack.Screen name="Landing" component={AppTabs} />
      {/* VAULT STACKS */}
      <Stack.Screen name="VaultHistoryStack" component={VaultHistoryStack} />
      <Stack.Screen name="VaultCreationStack" component={VaultCreationStack} />
      <Stack.Screen name="VaultActiveDepositsStack" component={VaultActiveDepositsStack} />
      {/* WALLET STACK */}
      <Stack.Screen name="WalletStack" component={WalletStack} />
      <Stack.Screen name="SettingsStack" component={SettingsStack} />
    </Stack.Navigator>
  );
};
