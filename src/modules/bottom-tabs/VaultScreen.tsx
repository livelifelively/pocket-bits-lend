import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../layouts/Default";
import { VaultNavProps } from "./TabsParamList";
import { AppButton } from "../../components/design/AppButton";

const VaultScreen = ({navigation}: VaultNavProps<"VaultCreationStack">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Vault</Text>
      <AppButton title="Active Deposits" onPress={() => {navigation.navigate("VaultActiveDepositsStack")}} />
      <AppButton title="History" onPress={() => { navigation.navigate("VaultHistoryStack")}} />
      <AppButton title="Create Vault" onPress={() => {navigation.navigate("VaultCreationStack")}} />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default VaultScreen;
