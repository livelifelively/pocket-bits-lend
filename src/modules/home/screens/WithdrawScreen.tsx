import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { HomeNavProps } from "../HomeParamList";

const WithdrawScreen = ({navigation}: HomeNavProps<"Withdraw">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Send BTC</Text>
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

export default WithdrawScreen;
