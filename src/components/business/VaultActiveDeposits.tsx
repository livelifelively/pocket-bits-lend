import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Title } from 'react-native-paper';

import { VaultActiveDepositsListUnit } from './VaultActiveDepositsListUnit';

interface VaultActiveDepositsProps {
  style?: {},
  showTitle?: boolean,
  expandableListUnit?: boolean
}

const activeDeposits = [
  {
    id: 1,
    currentBalance: 0.123,
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC'
    },
    interestRate: 12,
    duration: '1 month',
    startDate: '19 Mar, 21',
    endDate: '19 Mar, 21',
  },
  {
    id: 2,
    currentBalance: 0.123,
    crypto: {
      name: 'Bitcoin',
      shortName: 'ETH'
    },
    interestRate: 12,
    duration: '1 month',
    startDate: '19 Mar, 21',
    endDate: '19 Mar, 21',
  },
  {
    id: 3,
    currentBalance: 0.123,
    crypto: {
      name: 'Bitcoin',
      shortName: 'USDT'
    },
    interestRate: 12,
    duration: '1 month',
    startDate: '19 Mar, 21',
    endDate: '19 Mar, 21',
  },
  {
    id: 4,
    currentBalance: 0.123,
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC'
    },
    interestRate: 12,
    duration: '1 month',
    startDate: '19 Mar, 21',
    endDate: '19 Mar, 21',
  }
];

export const VaultActiveDeposits: React.FC<VaultActiveDepositsProps> = ({style, showTitle=true, expandableListUnit=false}) => {
  return (
    <View style={{...styles.vaultActiveDepositsWrapper, ...style}}>
      {
        showTitle && (
          <View style={styles.componentTitle}>
            <Title>
              {'Active Deposits '}
              <Text style={styles.activeDepositsCount}>(4)</Text>
            </Title>
          </View>
        )
      }
      {
        activeDeposits && activeDeposits.map((val) => {
          return (
            <VaultActiveDepositsListUnit expandableListUnit={expandableListUnit} depositDetails={val} key={val.id} />
          );
        })
      }
    </View>
  );
};

const styles = StyleSheet.create({
  vaultActiveDepositsWrapper: {
    flexDirection: 'column',
    width: '100%'
  },
  componentTitle: {
    marginBottom: 15
  },
  activeDepositsCount: {
    color: '#FFB850',
    fontFamily: 'Poppins-Bold'
  }
});