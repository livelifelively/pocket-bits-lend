import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { VaultActiveDepositsNavProps } from "../VaultParamList";
import { AppButton } from "../../../components/design/AppButton";

const ActiveDepositsScreen = ({navigation} : VaultActiveDepositsNavProps<"ActiveDeposits">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Active Deposits</Text>
      <AppButton title="Back" onPress={() => {navigation.goBack()}} />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ActiveDepositsScreen;
