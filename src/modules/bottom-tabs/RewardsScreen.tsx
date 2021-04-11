import React from "react";
import { Text, StyleSheet } from "react-native";

import { DefaultLayout } from "../../layouts/Default";
import { RewardsNavProps } from "./TabsParamList";

const RewardScreen = ({navigation}: RewardsNavProps<"VaultCreationStack">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Reward Screen</Text>
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default RewardScreen;
