import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { DefaultLayout } from "../../../layouts/Default";
import { WalletNavProps } from "../WalletParamList";
import Topbar from "../../../components/design/Topbar";
import { AppTextInput } from "../../../components/design/AppTextInput";
import { PasteIcon } from "../../../icons";
import { AppButton } from "../../../components/design/AppButton";
import { WhiteTouchableOpacity } from "../../../components/design/WhiteTouchableOpacity";

const availableFundsInCrypto = 1.41;

type Wallet = {
  id: number,
  crypto: {
    name: string,
    shortName: string
  },
  amount: number
}

const accounts = [
  {
    id: 1,
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC'
    },
    amount: 1.41
  },
  {
    id: 2,
    crypto: {
      name: 'Etherium',
      shortName: 'ETH'
    },
    amount: 1.41
  },
  {
    id: 3,
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC'
    },
    amount: 1.41
  },
  {
    id: 4,
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC'
    },
    amount: 1.41
  }
]

const activeAccount = accounts[0]

const WithdrawScreen = ({navigation}: WalletNavProps<"Withdraw">) => {
  const [amount, setAmount] = useState<string>('')
  const [destinationAddress, setDestinationAddress] = useState('');
  
  const onCryptoAmountChange = (text: string) => {
    const inputNumber = parseInt(text)
    if (!isNaN(inputNumber))setAmount(`${inputNumber}`)
    else setAmount('')
  }

  const onDestinationAddressChange = (text: string) => {
    // validate address
    setDestinationAddress('')
  }

  return (
    <DefaultLayout backgroundColor='#FFFFFF'>
      <Topbar
        onBackButtonPress={() => {
          navigation.goBack();
        }}
        title="Send BTC"
      />
      <View style={{ paddingHorizontal:45, marginTop: 55 }}>
        <View style={[styles.inputAmount]}>
          <AppTextInput
            autoCorrect={false}
            value={`${destinationAddress}`}
            style={styles.inputAmountTextInput}
            onChangeText={onDestinationAddressChange}
            placeholder={`Destination Address`}
            keyboardType="number-pad"
            maxLength={15}
          />
          <View style={[styles.inputAmountText]}>
            <View style={{marginBottom: 10, marginTop: 10}}><PasteIcon /></View>
            <View><Text style={[styles.subtext, {textAlign: 'center'}]}>Paste</Text></View>
          </View>
        </View>
        <View style={[styles.inputAmount]}>
          <AppTextInput
            autoCorrect={false}
            value={`${destinationAddress}`}
            style={styles.inputAmountTextInput}
            onChangeText={onDestinationAddressChange}
            placeholder={`Destination Address`}
            keyboardType="number-pad"
            maxLength={15}
          />
          <View style={[styles.inputAmountText]}>
            <Text>{activeAccount.amount} {activeAccount.crypto.shortName}</Text>
            <Text style={[styles.subtext, {textAlign: 'center'}]}>Available</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'flex-end', marginBottom: 20, alignItems: 'center'}}>
          <WhiteTouchableOpacity style={styles.percentButtons}>
            <Text style={styles.percentButtonsText}>25%</Text>
          </WhiteTouchableOpacity>
          <WhiteTouchableOpacity style={styles.percentButtons}>
            <Text style={styles.percentButtonsText}>50%</Text>
          </WhiteTouchableOpacity>
          <WhiteTouchableOpacity style={styles.percentButtons}>
            <Text style={styles.percentButtonsText}>75%</Text>
          </WhiteTouchableOpacity>
          <WhiteTouchableOpacity style={styles.percentButtons}>
            <Text style={styles.percentButtonsText}>100%</Text>
          </WhiteTouchableOpacity>
        </View>
        <AppButton title="Send" onPress={() => navigation.goBack()} />
      </View>
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  component: {
    marginBottom: 15
  },
  percentButtons: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginLeft: 10,
    borderRadius: 2
  },
  percentButtonsText: {
    fontSize: 12
  },
  inputAmount: {flexDirection: 'row', alignItems: 'center', width: 280, backgroundColor: '#f7f7f7', justifyContent: 'space-between', borderRadius: 15, marginBottom: 15},
  inputAmountTextInput: {padding: 20, backgroundColor: '#f7f7f7', fontSize: 14, borderRadius: 15, width: 200},
  inputAmountText: {paddingVertical: 10, borderLeftWidth: 1, borderLeftColor: '#e5e5e5', alignItems: 'center', justifyContent: 'center', width: 80},
  subtext: {
    color: '#625E59',
    fontSize: 10,
    marginTop: 5
  },
});

export default WithdrawScreen;
