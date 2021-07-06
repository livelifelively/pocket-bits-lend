import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Title } from 'react-native-paper';

import { ReceiveIcon, SendIcon } from '../../icons';
import { WhiteView } from '../design/WhiteView';

interface WalletTransactionHistoryProps {
  style?: Record<string, unknown>;
}

// #TODO #FIXME
const history = [
  {
    id: 1,
    value: 0.123,
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC',
    },
    transactionType: 'Deposit',
    time: '20 Feb, 21 10:27 a.m.',
  },
  {
    id: 2,
    value: 0.123,
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC',
    },
    transactionType: 'Withdrawal',
    time: '20 Feb, 21 10:27 a.m.',
  },
  {
    id: 3,
    value: 0.123,
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC',
    },
    transactionType: 'Deposit',
    time: '20 Feb, 21 10:27 a.m.',
  },
];

export const WalletTransactionHistory: React.FC<WalletTransactionHistoryProps> = ({ style }) => {
  return (
    <View style={{ ...styles.WalletTransactionHistoryWrapper, ...style }}>
      <View style={styles.componentTitle}>
        <Title>History</Title>
      </View>
      {history &&
        history.map((val) => {
          const transactionStyles =
            val.transactionType === 'Deposit' ? styles.walletTransactionDeposit : styles.walletTransactionWithdraw;

          return (
            <WhiteView style={styles.walletTransactionHistory} key={val.id}>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <View style={{ width: 50, height: 50 }}>
                  {val.transactionType === 'Deposit' ? <ReceiveIcon /> : <SendIcon></SendIcon>}
                </View>
                <View style={{ width: 150 }}>
                  <Text style={{ ...styles.walletTransaction, ...transactionStyles }}>{val.transactionType}</Text>
                  <Text style={styles.walletTransactionDateTime}>{val.time}</Text>
                </View>
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.walletTransactionValue}>{`${val.value} ${val.crypto.shortName}`}</Text>
              </View>
            </WhiteView>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  WalletTransactionHistoryWrapper: {
    flexDirection: 'column',
    width: '100%',
  },
  componentTitle: {
    marginBottom: 15,
  },
  walletTransactionHistory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  walletTransaction: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    marginBottom: 5,
  },
  walletTransactionDeposit: {
    color: '#44CBB3',
  },
  walletTransactionWithdraw: {
    color: '#EA6D6D',
  },
  walletTransactionDateTime: {
    color: '#625E59',
    fontSize: 12,
  },
  walletTransactionValue: {
    fontSize: 18,
  },
});
