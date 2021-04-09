import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { HomeNavProps } from "../HomeParamList";

const DepositScreen = ({navigation}: HomeNavProps<"Deposit">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Receive BTC</Text>
      <Button
        title="Send"
        onPress={() => {
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
