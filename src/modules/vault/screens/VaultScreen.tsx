import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { VaultNavProps } from "../VaultParamList";


const VaultScreen = ({navigation}: VaultNavProps<"Vault">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Vault</Text>
      <Button title="Active Deposits" onPress={() => {navigation.navigate("ActiveDeposits")}} />
      <Button title="History" onPress={() => { navigation.navigate("VaultHistory")}} />
      <Button title="1 Month Vault" onPress={() => {navigation.navigate("CreateVault")}} />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default VaultScreen;
