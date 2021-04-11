import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import { AppTabsParamList, AppStackParamList } from "./AppParamList";

import HomeScreen from "../modules/bottom-tabs/HomeScreen";
import VaultScreen from "../modules/bottom-tabs/VaultScreen";
import RewardsScreen from "../modules/bottom-tabs/RewardsScreen";

import { VaultActiveDepositsStack, VaultCreationStack, VaultHistoryStack } from "../modules/vault/VaultStack";
import { WalletStack } from "../modules/wallet/WalletStack";

interface AppTabsProps {}
interface AppStackProps {}

const Tabs = createBottomTabNavigator<AppTabsParamList>();
const Stack = createStackNavigator<AppStackParamList>();

const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "Home":
              return <AntDesign name={"home"} size={size} color={color} />;
            case "Rewards":
              return <EvilIcons name={"search"} size={size} color={color} />;
            case "Vault":
              return <EvilIcons name={"search"} size={size} color={color} />;

            default:
              break;
          }
        }
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Vault" component={VaultScreen} />
      <Tabs.Screen name="Rewards" component={RewardsScreen} />
    </Tabs.Navigator>
  );
};

export const AppStack: React.FC<AppStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={AppTabs} />
      {/* VAULT STACKS */}
      <Stack.Screen name="VaultHistoryStack" component={VaultHistoryStack} />
      <Stack.Screen name="VaultCreationStack" component={VaultCreationStack} />
      <Stack.Screen name="VaultActiveDepositsStack" component={VaultActiveDepositsStack} />
      {/* WALLET STACK */}
      <Stack.Screen name="WalletStack" component={WalletStack} />
    </Stack.Navigator>
  );
};
