import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Title, Text } from "react-native-paper";

import {WhiteView} from "../design/WhiteView";

interface WalletsProps {
  style?: {},
  onPress: (walletDetails:{}) => void
}

const wallets = [
  {
    id: 1,
    cryptoCurrencyName: 'Bitcoin',
    cryptoCurrencyShortName: 'BTC',
    currency: {
      name: 'United States Dollor',
      shortName: 'USD',
      symbol: '$'
    },
    holding: '0.000',
    holdingSubtext: '0.000',
    holdingValueInCurrency: '50,021',
    changeInPercent: {
      changeDirection: '+',
      changeValue: '2.56'
    }
  },
  {
    id: 2,
    cryptoCurrencyName: 'Etherium',
    cryptoCurrencyShortName: 'ETH',
    currency: {
      name: 'United States Dollor',
      shortName: 'USD',
      symbol: '$'
    },
    holding: '0.000',
    holdingSubtext: '0.000',
    holdingValueInCurrency: '50,021',
    changeInPercent: {
      changeDirection: '+',
      changeValue: '2.56'
    }
  },
  {
    id: 3,
    cryptoCurrencyName: 'USDT',
    cryptoCurrencyShortName: 'USDT',
    currency: {
      name: 'United States Dollor',
      shortName: 'USD',
      symbol: '$'
    },
    holding: '0.000',
    holdingSubtext: '0.000',
    holdingValueInCurrency: '50,021',
    changeInPercent: {
      changeDirection: '+',
      changeValue: '2.56'
    }
  }
]

export const Wallets: React.FC<WalletsProps> = ({children, style, onPress}) => {
  const onWalletPress = (walletDetails={}) => {
    onPress(walletDetails)
  }

  return (
    <View style={{...styles.WalletsWrapper, ...style}}>
      <View>
        <Title>Wallets</Title>
      </View>
      {
        wallets && wallets.map((val) => {
          return (
            <TouchableOpacity onPress={() => onWalletPress(val)} key={val.id}>
              <WhiteView style={styles.WalletRowWrapper}>
                <View>
                  <Text style={styles.cryptoName}>{val.cryptoCurrencyShortName}</Text>
                </View>
                <View>
                  <Text style={styles.cryptoHolding}>{val.holding}</Text>
                  <Text style={styles.cryptoHoldingSubtext}>
                    <Text>{val.currency.symbol}</Text>
                    <Text>{val.holdingSubtext}</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.cryptoHoldingValue}>{`${val.currency.symbol}${val.holdingValueInCurrency}`}</Text>
                  <Text style={styles.cryptoHoldingValueSubtext}>
                    <Text>{val.changeInPercent.changeDirection}</Text>
                    <Text>{`${val.changeInPercent.changeValue}%`}</Text>
                  </Text>
                </View>
              </WhiteView>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  WalletsWrapper: {
    width: '100%'
  },
  WalletRowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  walletCryptoDetails: {
    
  },
  cryptoName: {
    fontWeight: '400',
    fontSize: 20
  },
  cryptoHolding: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18
  },
  cryptoHoldingSubtext: {
    fontSize: 10,
    textAlign: 'center',
    width: '100%'
  },
  cryptoHoldingValue: {
    fontWeight: '400',
    fontSize: 16
  },
  cryptoHoldingValueSubtext: {
    fontSize: 10,
  }
})