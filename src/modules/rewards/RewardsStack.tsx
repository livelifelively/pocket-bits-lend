import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RewardsParamList } from "./RewardsParamList";

import RewardsScreen from "./screens/RewardsScreen";

interface RewardsStackProps {}

const Stack = createStackNavigator<RewardsParamList>();

export const RewardsStack: React.FC<RewardsStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
      initialRouteName="Rewards"
    >
      <Stack.Screen options={{ headerTitle: "Rewards" }} name="Rewards" component={RewardsScreen} />
    </Stack.Navigator>
  );
};
