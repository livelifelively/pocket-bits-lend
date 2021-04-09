import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { VaultNavProps } from "../VaultParamList";

const VaultCreatedScreen = ({navigation} : VaultNavProps<"VaultCreated">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Vault Created</Text>
      <Button title="Okay" onPress={() => {navigation.goBack()}} />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default VaultCreatedScreen;
