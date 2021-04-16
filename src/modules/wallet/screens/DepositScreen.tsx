import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Title } from "react-native-paper";

import { DefaultLayout } from "../../../layouts/Default";
import { WalletNavProps } from "../WalletParamList";
import { AppButton } from "../../../components/design/AppButton";
import Topbar from "../../../components/design/Topbar";
import { WhiteView } from "../../../components/design/WhiteView";

const DepositScreen = ({navigation}: WalletNavProps<"Deposit">) => {
  return (
    <DefaultLayout>
      <Topbar
        onBackButtonPress={() => {
          navigation.goBack();
        }}
        title="Receive BTC"
      />
      <View style={styles.depositQRCode}></View>
      <Title style={styles.component}>Scan the QR Code</Title>
      <Title style={styles.component}>OR</Title>
      <WhiteView style={styles.component}>
        <Text>3F8QCEXUrRQcjoyp2J8ng71xre3vd33dcer</Text>
        <AppButton title="Copy" onPress={() => {}} />
      </WhiteView>
      <AppButton title="Share" onPress={() => {}} />
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  depositQRCode: {
    width: 175,
    height: 175,
    marginBottom: 50,
    backgroundColor: '#000'
  },
  component: {
    marginBottom: 30
  }
});

export default DepositScreen;
