import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { VaultCreationNavProps } from "../VaultParamList";

const CreateVaultScreen = ({navigation} : VaultCreationNavProps<"CreateVault">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Create Vault</Text>
      <Button title="Lock in Vault" onPress={() => {navigation.navigate("VaultCreated")}} />
      <Button title="Back" onPress={() => {navigation.goBack()}} />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default CreateVaultScreen;
