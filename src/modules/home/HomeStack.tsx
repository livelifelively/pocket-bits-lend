import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeParamList } from "./HomeParamList";

import DepositScreen from "./screens/DepositScreen";
// import HomeScreen from "../HomeScreen";
import WalletScreen from "./screens/WalletScreen";
import WithdrawScreen from "./screens/WithdrawScreen";

interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamList>();

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
      initialRouteName="Wallet"
    >
      {/* <Stack.Screen options={{ headerTitle: "Home" }} name="Home" component={HomeScreen} /> */}
      <Stack.Screen options={{ headerTitle: "Wallet" }} name="Wallet" component={WalletScreen} />
      <Stack.Screen options={{ headerTitle: "Deposit" }} name="Deposit" component={DepositScreen} />
      <Stack.Screen options={{ headerTitle: "Withdraw" }} name="Withdraw" component={WithdrawScreen} />
    </Stack.Navigator>
  );
};
