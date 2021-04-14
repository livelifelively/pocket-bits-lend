import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Title } from "react-native-paper";
import { AppButton } from "../design/AppButton";

import {WhiteView} from "../design/WhiteView";

interface WalletTransactionHistoryProps {
  style?: {}
}

const history = [
  {
    id: 1,
    value: 0.123,
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC'
    },
    transactionType: 'DEPOSIT',
    time: '20 Feb, 21 10:27 a.m.'
  },
  {
    id: 2,
    value: 0.123,
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC'
    },
    transactionType: 'WITHDRAW',
    time: '20 Feb, 21 10:27 a.m.'
  },
  {
    id: 3,
    value: 0.123,
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC'
    },
    transactionType: 'DEPOSIT',
    time: '20 Feb, 21 10:27 a.m.'
  }
]

export const WalletTransactionHistory: React.FC<WalletTransactionHistoryProps> = ({style}) => {
  // const action = 
  return (
    <View style={{...styles.WalletTransactionHistoryWrapper, ...style}}>
      <View style={styles.componentTitle}>
        <Title>History</Title>
      </View>
      {
        history && history.map((val) => {
          const transactionStyles = val.transactionType === 'DEPOSIT' ? styles.walletTransactionDeposit : styles.walletTransactionWithdraw;

          return (
            <WhiteView style={styles.walletTransactionHistory} key={val.id}>
              <View></View>
              <View>
                <Text style={{...styles.walletTransaction, ...transactionStyles}}>{val.transactionType}</Text>
                <Text style={styles.walletTransactionDateTime}>{val.time}</Text>
              </View>
              <View>
                <Text style={styles.walletTransactionValue}>
                  {`${val.value} ${val.crypto.shortName}`}
                </Text>
              </View>
            </WhiteView>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  WalletTransactionHistoryWrapper: {
    flexDirection: 'column',
    width: '100%'
  },
  componentTitle: {
    marginBottom: 15
  },
  walletTransactionHistory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  walletTransaction: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14
  },
  walletTransactionDeposit: {
    color: '#44CBB3'
  },
  walletTransactionWithdraw: {
    color: '#EA6D6D'
  },
  walletTransactionDateTime: {
    color: '#625E59',
    fontSize: 12
  },
  walletTransactionValue: {
    fontSize: 14
  }
})