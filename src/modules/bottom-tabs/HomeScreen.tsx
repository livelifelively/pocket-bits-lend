import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../layouts/Default";
import { HomeNavProps } from "./TabsParamList";

const HomeScreen = ({navigation}: HomeNavProps<"VaultCreationStack">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>HomeScreen</Text>
      {/* <Button
        title="Wallet"
        onPress={() => {
          navigation.navigate("Wallet");
        }}
      /> */}
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
