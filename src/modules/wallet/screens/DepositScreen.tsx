import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { WalletNavProps } from "../WalletParamList";

const DepositScreen = ({navigation}: WalletNavProps<"Deposit">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Receive BTC</Text>
      <Button
        title="Send"
        onPress={() => {
          // send bitcoin, on success go back.
          navigation.goBack();
        }}
      />
      <Button
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
