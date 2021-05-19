import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { WhiteView } from '../design/WhiteView';
import { YellowPlusIcon } from '../../icons';
import { WhiteTouchableOpacity } from '../design/WhiteTouchableOpacity';
import TwoColorDoughnutChart from '../design/TwoColorDoughnutChart';

interface WalletBalanceProps {
  style?: Record<string, unknown>;
  onPress: () => void;
  walletDetails: WalletDetails;
}

export const WalletBalance: React.FC<WalletBalanceProps> = ({ style, onPress, walletDetails }) => {
  return (
    <WhiteView style={{ ...styles.walletBalanceWrapper, ...style }}>
      <TwoColorDoughnutChart
        size={150}
        strokeWidth={20}
        secondPercent={(walletDetails.holding.vault.value / walletDetails.holding.total.value) * 100}
      >
        <View>
          <Text style={styles.walletBalanceGraphValue}>{walletDetails.holding.total.value}</Text>
          <Text style={[styles.walletBalanceSubtext, { textAlign: 'center' }]}>Total Balance</Text>
          <Text
            style={styles.walletBalanceGraphCurrencyValue}
          >{`${walletDetails.currency.symbol} ${walletDetails.holding.total.valueInUserCurrency}`}</Text>
        </View>
      </TwoColorDoughnutChart>
      <View style={styles.walletVaultStatus}>
        <View>
          <Text>
            <Text style={styles.walletBalanceValue}>
              {`${walletDetails.holding.available.value} `}
              <Text style={styles.walletBalanceSubtext}>{walletDetails.crypto.shortName}</Text>
            </Text>
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ height: 8, width: 8, backgroundColor: '#FF7E42', borderRadius: 8, marginRight: 5 }}></View>
            <Text style={styles.walletBalanceSubtext}>Balance</Text>
          </View>
          <Text style={styles.walletBalanceSubtext}>
            {'Interest '}
            <Text style={{ ...styles.walletBalanceSubtext, fontFamily: 'Poppins-Bold' }}>12%</Text>
          </Text>
        </View>
        <View>
          <Text>
            <Text style={styles.walletBalanceValue}>
              {`${walletDetails.holding.vault.value} `}
              <Text style={styles.walletBalanceSubtext}>{walletDetails.crypto.shortName}</Text>
            </Text>
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ height: 8, width: 8, backgroundColor: '#363EFF', borderRadius: 8, marginRight: 5 }}></View>
            <Text style={styles.walletBalanceSubtext}>Locked in vault</Text>
          </View>
          <Text style={styles.walletBalanceSubtext}>
            {'Interest '}
            <Text style={{ ...styles.walletBalanceSubtext, fontFamily: 'Poppins-Bold' }}>12%</Text>
          </Text>
        </View>
      </View>
      <View>
        <WhiteTouchableOpacity
          onPress={onPress}
          style={{
            paddingVertical: 7,
            paddingHorizontal: 12,
            borderRadius: 6,
          }}
        >
          <View style={{ width: 25, height: 25 }}>
            <YellowPlusIcon />
          </View>
          <Text style={{ fontSize: 12 }}>Add funds to vault</Text>
        </WhiteTouchableOpacity>
      </View>
    </WhiteView>
  );
};

const styles = StyleSheet.create({
  walletBalanceWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  walletBalanceGraph: {
    height: 135,
    justifyContent: 'center',
    alignContent: 'center',
    width: 135,
    borderRadius: 135,
    borderWidth: 20,
    borderColor: '#363EFF',
  },
  walletBalanceGraphValue: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    textAlign: 'center',
  },
  walletBalanceGraphCurrencyValue: {
    color: '#44CBB3',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  walletBalanceValue: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    textAlign: 'center',
  },
  walletVaultStatus: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 18,
  },
  walletBalanceSubtext: {
    fontSize: 10,
    color: '#5A5A5A',
  },
});
