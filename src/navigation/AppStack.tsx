import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';

import { AppTabsParamList, AppStackParamList } from './AppParamList';

import HomeScreen from '../modules/bottom-tabs/HomeScreen';
import VaultScreen from '../modules/bottom-tabs/VaultScreen';
import RewardsScreen from '../modules/bottom-tabs/RewardsScreen';

import { VaultActiveDepositsStack, VaultCreationStack, VaultHistoryStack } from '../modules/vault/VaultStack';
import { WalletStack } from '../modules/wallet/WalletStack';
import { SettingsStack } from '../modules/settings/SettingsStack';
import { HomeIcon, RewardIcon, VaultIcon } from '../icons';
import { StyleSheet } from 'react-native';

const Tabs = createBottomTabNavigator<AppTabsParamList>();
const Stack = createStackNavigator<AppStackParamList>();

const AppTabs: React.FC = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const linearGradientColors = [];

          if (focused) {
            linearGradientColors.push('rgba(255, 184, 80, 0.94)');
            linearGradientColors.push('rgba(255, 126, 66, 1)');
          } else {
            linearGradientColors.push('transparent');
            linearGradientColors.push('transparent');
          }

          switch (route.name) {
            case 'Home':
              return (
                <LinearGradient colors={linearGradientColors} style={[styles.buttonBackground]}>
                  <HomeIcon strokeColor={focused ? '#ffffff' : '#FFBC5A'} />
                </LinearGradient>
              );
            case 'Rewards':
              return (
                <LinearGradient colors={linearGradientColors} style={[styles.buttonBackground]}>
                  <RewardIcon strokeColor={focused ? '#ffffff' : '#FFBC5A'} />
                </LinearGradient>
              );
            case 'Vault':
              return (
                <LinearGradient colors={linearGradientColors} style={[styles.buttonBackground]}>
                  <VaultIcon strokeColor={focused ? '#ffffff' : '#FFBC5A'} />
                </LinearGradient>
              );

            default:
              break;
          }
        },
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

const styles = StyleSheet.create({
  buttonBackground: { height: 45, width: 45, borderRadius: 23 },
});

export const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
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
