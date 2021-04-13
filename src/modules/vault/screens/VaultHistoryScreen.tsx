
import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { VaultHistoryNavProps } from "../VaultParamList";
import { AppButton } from "../../../components/design/AppButton";

const VaultHistoryScreen = ({navigation} : VaultHistoryNavProps<"VaultHistory">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Vault History</Text>
      <AppButton title="Back" onPress={() => {navigation.goBack()}} />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default VaultHistoryScreen;
