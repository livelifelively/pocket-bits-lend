import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { WalletNavProps } from "../WalletParamList";
import { AppButton } from "../../../components/design/AppButton";
import { Title } from "react-native-paper";
import { WalletBalance } from "../../../components/business/WalletBalance";
import Topbar from "../../../components/design/Topbar";
import { WalletTransactionHistory } from "../../../components/business/WalletTransactionHistory";

const WalletScreen = ({navigation}: WalletNavProps<"Wallet">) => {
  return (
    <DefaultLayout>
      <Topbar
        onBackButtonPress={() => {
          navigation.goBack();
        }}
        title="Wallet"
      />
      <WalletBalance style={styles.component} onPress={() => {}} />
      <View style={{...styles.walletActions, ...styles.component}}>
        <AppButton
          title="Send"
          onPress={() => {
            navigation.navigate("Withdraw");
          }}
        />
        <AppButton
          title="Receive"
          onPress={() => {
            navigation.navigate("Deposit");
          }}
        />
        <AppButton
          title="Copy address"
          onPress={() => {}}
        />
      </View>
      <WalletTransactionHistory />
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  component: {
    marginBottom: 20
  },
  walletActions: {
    flexDirection: 'row'
  }
});

export default WalletScreen;
