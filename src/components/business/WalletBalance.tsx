import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { AppButton } from "../design/AppButton";

import {WhiteView} from "../design/WhiteView";

interface WalletBalanceProps {
  style?: {},
  onPress: () => void
}

export const WalletBalance: React.FC<WalletBalanceProps> = ({children, style, onPress}) => {
  return (
    <WhiteView style={{...styles.walletBalanceWrapper, ...style}}>
      <View style={styles.walletBalanceGraph}>
        <Text style={styles.walletBalanceGraphValue}>0.433</Text>
        <Text style={styles.walletBalanceSubtext}>Total Balance</Text>
        <Text style={styles.walletBalanceGraphCurrencyValue}>$18,324</Text>
      </View>
      <View style={styles.walletVaultStatus}>
        <View>
          <Text>
            <Text style={styles.walletBalanceValue}>
              {`0.215 `}
              <Text style={styles.walletBalanceSubtext}>BTC</Text>
            </Text>
          </Text>
          <Text style={styles.walletBalanceSubtext}>Balance</Text>
          <Text style={styles.walletBalanceSubtext}>
            {`Interest `}
            <Text style={{...styles.walletBalanceSubtext, fontFamily: 'Poppins-Bold'}}>12%</Text>
          </Text>
        </View>
        <View>
          <Text>
            <Text style={styles.walletBalanceValue}>
              {`0.215 `}
              <Text style={styles.walletBalanceSubtext}>BTC</Text>
            </Text>
          </Text>
          <Text style={styles.walletBalanceSubtext}>Locked in vault</Text>
          <Text style={styles.walletBalanceSubtext}>
            {`Interest `}
            <Text style={{...styles.walletBalanceSubtext, fontFamily: 'Poppins-Bold'}}>12%</Text>
          </Text>
        </View>
      </View>
      <View>
        <AppButton
          title="Add funds to vault"
          onPress={onPress}
          color="white"
          size='small'
          style={{shadowOpacity: 0.3, shadowRadius: 5, shadowColor: '#a3a3a3', shadowOffset: { height: 0, width: 0 }}}
        />
      </View>
    </WhiteView>
  )
}

const styles = StyleSheet.create({
  walletBalanceWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  walletBalanceGraph: {
    height: 135,
    justifyContent: 'center',
    alignContent: 'center'
  },
  walletBalanceGraphValue: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    textAlign: 'center'
  },
  walletBalanceGraphCurrencyValue: {
    color: '#44CBB3',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center'
  },
  walletBalanceValue: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    textAlign: 'center'
  },
  walletVaultStatus: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 15
  },
  walletBalanceSubtext: {
    fontSize: 10,
    color: '#5A5A5A'
  }
})