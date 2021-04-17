import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { WalletNavProps } from "../WalletParamList";
import { AppButton } from "../../../components/design/AppButton";
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
        <View>
          <AppButton
            title="S"
            color="white"
            style={styles.walletActionsButtons}
            onPress={() => {
              navigation.navigate("Withdraw");
            }}
          />
          <Text style={styles.walletActionsSubtext}>Send</Text>
        </View>
        <View>
          <AppButton
            title="R"
            color="white"
            style={styles.walletActionsButtons}
            onPress={() => {
              navigation.navigate("Deposit");
            }}
          />
          <Text style={styles.walletActionsSubtext}>Receive</Text>
        </View>
        <View>
          <AppButton
            title="C"
            color="white"
            style={styles.walletActionsButtons}
            onPress={() => {}}
          />
          <Text style={styles.walletActionsSubtext}>Copy address</Text>
        </View>
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
  },
  walletActionsButtons: {
    marginBottom: 10, marginHorizontal: 13, shadowOpacity: 0.3, shadowRadius: 5, shadowColor: '#a3a3a3', shadowOffset: { height: 0, width: 0 }
  },
  walletActionsSubtext: {
    color: '#625E59',
    textAlign: 'center'
  }
});

export default WalletScreen;
