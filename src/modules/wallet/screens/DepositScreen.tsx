import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Title } from "react-native-paper";

import { DefaultLayout } from "../../../layouts/Default";
import { WalletNavProps } from "../WalletParamList";
import { AppButton } from "../../../components/design/AppButton";
import Topbar from "../../../components/design/Topbar";

const DepositScreen = ({navigation}: WalletNavProps<"Deposit">) => {
  return (
    <DefaultLayout style={{backgroundColor: '#ffffff'}}>
      <Topbar
        onBackButtonPress={() => {
          navigation.goBack();
        }}
        title="Receive BTC"
      />
      <View style={styles.depositQRCode}></View>
      <Title style={styles.component}>Scan the QR Code</Title>
      <Title style={styles.component}>OR</Title>
      <View style={{marginBottom: 25, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FAFAFA', width: '100%', alignItems: 'center', paddingHorizontal: 15, borderRadius: 15}}>
        <View>
          <Text style={{color: '#625E59', fontSize: 12}}>3F8QCEXUrRQcjoyp2J8ng71xre3vd33dcer</Text>
        </View>
        <AppButton title="C" onPress={() => {}} />
      </View>
      <AppButton
        title="Share"
        color="white"
        size="small"
        style={{marginBottom: 10, marginHorizontal: 13, shadowOpacity: 0.3, shadowRadius: 5, shadowColor: '#a3a3a3', shadowOffset: { height: 0, width: 0 }, elevation: 1}}
        onPress={() => {
          navigation.navigate("Withdraw");
        }}
      />
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
