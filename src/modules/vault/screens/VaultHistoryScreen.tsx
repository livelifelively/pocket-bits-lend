import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { DefaultLayout } from '../../../layouts/Default';
import { VaultHistoryNavProps } from '../VaultParamList';

import { WhiteView } from '../../../components/design/WhiteView';
import CryptoIcon from '../../../components/design/CryptoIcon';

// #TODO #FIXME
const vaultHistory = [
  {
    id: 1,
    currentBalance: 0.123,
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC',
    },
    interestRate: 12,
    duration: '1 month',
    startDate: '19 Mar, 21',
    endDate: '19 Mar, 21',
    withdrawDate: '19 Mar, 21',
  },
  {
    id: 2,
    currentBalance: 0.123,
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC',
    },
    interestRate: 12,
    duration: '1 month',
    startDate: '19 Mar, 21',
    endDate: '19 Mar, 21',
    withdrawDate: '19 Mar, 21',
  },
  {
    id: 3,
    currentBalance: 0.123,
    crypto: {
      name: 'Bitcoin',
      shortName: 'ETH',
    },
    interestRate: 12,
    duration: '1 month',
    startDate: '19 Mar, 21',
    endDate: '19 Mar, 21',
    withdrawDate: '19 Mar, 21',
  },
  {
    id: 4,
    currentBalance: 0.123,
    crypto: {
      name: 'Bitcoin',
      shortName: 'USDT',
    },
    interestRate: 12,
    duration: '1 month',
    startDate: '19 Mar, 21',
    endDate: '19 Mar, 21',
    withdrawDate: '19 Mar, 21',
  },
];

const VaultHistoryScreen = ({ navigation }: VaultHistoryNavProps<'VaultHistory'>) => {
  return (
    <DefaultLayout
      topBar={{
        showBackButton: true,
        title: 'Vault History',
        onBackButtonPress: () => {
          navigation.goBack();
        },
      }}
    >
      {vaultHistory &&
        vaultHistory.map((val) => {
          return (
            <WhiteView style={styles.vaultHistoryListUnit} key={val.id}>
              <View style={{ width: 60 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 60 }}>
                  <View style={{ marginRight: 15 }}>
                    <CryptoIcon shortName={val.crypto.shortName} />
                  </View>
                  <Text>{val.crypto.shortName}</Text>
                </View>
                <Text style={[styles.subtext, { textAlign: 'center' }]}>Token</Text>
              </View>
              <View>
                <Text style={styles.vaultHistoryListUnitBalance}>{val.currentBalance}</Text>
                <Text style={[styles.subtext, { textAlign: 'center' }]}>Amount</Text>
              </View>
              <View>
                <Text style={styles.vaultHistoryDates}>{val.startDate}</Text>
                <Text style={[styles.subtext, { textAlign: 'center' }]}>Start Date</Text>
              </View>
              <View>
                <Text style={styles.vaultHistoryDates}>{val.withdrawDate}</Text>
                <Text style={[styles.subtext, { textAlign: 'center' }]}>Withdraw Date</Text>
              </View>
            </WhiteView>
          );
        })}
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  vaultHistoryListUnitBalance: {
    fontFamily: 'Poppins-Bold',
  },
  subtext: {
    color: '#625E59',
    fontSize: 10,
    marginTop: 5,
  },
  vaultHistoryListUnit: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    alignItems: 'center',
  },
  vaultHistoryDates: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default VaultHistoryScreen;
