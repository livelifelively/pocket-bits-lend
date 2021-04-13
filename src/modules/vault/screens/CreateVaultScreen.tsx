import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { VaultCreationNavProps } from "../VaultParamList";
import { AppButton } from "../../../components/design/AppButton";

const CreateVaultScreen = ({navigation} : VaultCreationNavProps<"CreateVault">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Create Vault</Text>
      <AppButton title="Lock in Vault" onPress={() => {navigation.navigate("VaultCreated")}} />
      <AppButton title="Back" onPress={() => {navigation.goBack()}} />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default CreateVaultScreen;
