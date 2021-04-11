import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { WalletNavProps } from "../WalletParamList";

const WalletScreen = ({navigation}: WalletNavProps<"Wallet">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Wallet</Text>
      <Button
        title="Receive"
        onPress={() => {
          navigation.navigate("Deposit");
        }}
      />
      <Button
        title="Send"
        onPress={() => {
          navigation.navigate("Withdraw");
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

export default WalletScreen;
