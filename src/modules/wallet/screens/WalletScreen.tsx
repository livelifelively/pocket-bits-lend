import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { WalletNavProps } from "../WalletParamList";
import { AppButton } from "../../../components/design/AppButton";

const WalletScreen = ({navigation}: WalletNavProps<"Wallet">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Wallet</Text>
      <AppButton
        title="Receive"
        onPress={() => {
          navigation.navigate("Deposit");
        }}
      />
      <AppButton
        title="Send"
        onPress={() => {
          navigation.navigate("Withdraw");
        }}
      />
      <AppButton
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default WalletScreen;
