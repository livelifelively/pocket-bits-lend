import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

import { AppParamList } from "./AppParamList";
import { HomeStack } from "../modules/home/HomeStack";
import { VaultStack } from "../modules/vault/VaultStack";
import { RewardsStack } from "../modules/rewards/RewardsStack";

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
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
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Vault" component={VaultStack} />
      <Tabs.Screen name="Rewards" component={RewardsStack} />
    </Tabs.Navigator>
  );
};
