import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import { InfoIcon } from '../../icons';
import { GlobalAlertsContext } from '../../contexts/GlobalAlertsContext';

import { YellowView } from '../design/YellowView';

interface ValueCreatedProps {
  style?: Record<string, unknown>;
}

const data = {
  amountDeposited: {
    currency: {
      symbol: '$',
      name: 'United States Dollor',
      shortName: 'USD',
    },
    value: 45000,
  },
  interestEarned: {
    currency: {
      symbol: '$',
      name: 'United States Dollor',
      shortName: 'USD',
    },
    value: 3607,
  },
};

export const ValueCreated: React.FC<ValueCreatedProps> = () => {
  const { alert } = useContext(GlobalAlertsContext);

  return (
    <YellowView style={styles.valueCreatedWrapper}>
      <View
        style={{
          marginBottom: 20,
          flexDirection: 'row-reverse',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <TouchableOpacity
          style={{ height: 13, width: 13 }}
          onPress={() => {
            alert({
              logId: 'VALUE_CREATED',
              title: 'This is the information that should be displayed here.',
              ctas: {
                acknowledge: { action: () => {}, label: 'Okay' },
              },
            });
          }}
        >
          <InfoIcon style={{ height: 13, width: 13 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.valueCreatedDetails}>
        <View>
          <Text
            style={styles.valueCreatedDetailsTitle}
          >{`${data.amountDeposited.currency.symbol}${data.amountDeposited.value}`}</Text>
          <Text style={styles.valueCreatedDetailsSubtext}>Amount Deposited</Text>
        </View>
        <View>
          <Text
            style={styles.valueCreatedDetailsTitle}
          >{`${data.interestEarned.currency.symbol}${data.interestEarned.value}`}</Text>
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
    padding: 20,
  },
  valueCreatedDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueCreatedDetailsTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    textAlign: 'center',
  },
  valueCreatedDetailsSubtext: {
    fontSize: 12,
  },
});
