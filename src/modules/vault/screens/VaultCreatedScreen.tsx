import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { VaultCreationNavProps } from "../VaultParamList";
import { AppButton } from "../../../components/design/AppButton";

const VaultCreatedScreen = ({navigation} : VaultCreationNavProps<"VaultCreated">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Vault Created</Text>
      <AppButton title="Okay" onPress={() => {navigation.goBack()}} />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default VaultCreatedScreen;
