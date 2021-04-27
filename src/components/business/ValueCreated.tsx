import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { InfoIcon } from '../../icons';

import {YellowView} from '../design/YellowView';

interface ValueCreatedProps {
  style?: Record<string, unknown>
}

const data = {
  amountDeposited: {
    currency: {
      symbol: '$',
      name: 'United States Dollor',
      shortName: 'USD'
    },
    value: 45000
  },
  interestEarned: {
    currency: {
      symbol: '$',
      name: 'United States Dollor',
      shortName: 'USD'
    },
    value: 3607
  }
};

export const ValueCreated: React.FC<ValueCreatedProps> = () => {
  return (
    <YellowView style={styles.valueCreatedWrapper}>
      <View style={{marginBottom: 20, flexDirection: 'row-reverse', alignItems: 'center', width: '100%', backgroundColor: 'red'}}>
        <InfoIcon style={{height: 13, width: 13}} />
      </View>
      <View style={styles.valueCreatedDetails}>
        <View>
          <Text style={styles.valueCreatedDetailsTitle}>{`${data.amountDeposited.currency.symbol}${data.amountDeposited.value}`}</Text>
          <Text style={styles.valueCreatedDetailsSubtext}>Amount Deposited</Text>
        </View>
        <View>
          <Text style={styles.valueCreatedDetailsTitle}>{`${data.interestEarned.currency.symbol}${data.interestEarned.value}`}</Text>
          <Text style={styles.valueCreatedDetailsSubtext}>Interest Earned</Text>
        </View>
      </View>
    </YellowView>
  );
};

const styles = StyleSheet.create({
  valueCreatedWrapper: {
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 20
  },
  valueCreatedDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  valueCreatedDetailsTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    textAlign: 'center'
  },
  valueCreatedDetailsSubtext: {
    fontSize: 12
  }
});