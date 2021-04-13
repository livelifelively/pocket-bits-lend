import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { WalletNavProps } from "../WalletParamList";
import { AppButton } from "../../../components/design/AppButton";

const DepositScreen = ({navigation}: WalletNavProps<"Deposit">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Receive BTC</Text>
      <AppButton
        title="Send"
        onPress={() => {
          // send bitcoin, on success go back.
          navigation.goBack();
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

export default DepositScreen;
