
import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { VaultHistoryNavProps } from "../VaultParamList";

const VaultHistoryScreen = ({navigation} : VaultHistoryNavProps<"VaultHistory">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Vault History</Text>
      <Button title="Back" onPress={() => {navigation.goBack()}} />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default VaultHistoryScreen;
