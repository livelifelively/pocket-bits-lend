import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { VaultNavProps } from "../VaultParamList";

const ActiveDepositsScreen = ({navigation} : VaultNavProps<"ActiveDeposits">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Active Deposits</Text>
      <Button title="Back" onPress={() => {navigation.goBack()}} />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ActiveDepositsScreen;
