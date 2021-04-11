import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../layouts/Default";
import { VaultNavProps } from "./TabsParamList";


const VaultScreen = ({navigation}: VaultNavProps<"VaultCreationStack">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Vault</Text>
      <Button title="Active Deposits" onPress={() => {navigation.navigate("VaultActiveDepositsStack")}} />
      <Button title="History" onPress={() => { navigation.navigate("VaultHistoryStack")}} />
      <Button title="Create Vault" onPress={() => {navigation.navigate("VaultCreationStack")}} />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default VaultScreen;
