import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Title, Text } from 'react-native-paper';
import { walletsAllGet } from '../../api/wallet/requests';

import { TetherIcon, EtheriumIcon, BitcoinIcon } from '../../icons';
import { WhiteView } from '../design/WhiteView';

interface WalletsProps {
  style?: Record<string, unknown>;
  onPress: (walletDetails: Record<string, unknown>) => void;
}

const wallets = [
  {
    id: 1,
    currency: {
      name: 'United States Dollor',
      shortName: 'USD',
      symbol: '$',
    },
    holding: {
      value: '0.000',
      holdingValueInUserCurrency: '0.000',
    },
    crypto: {
      valueInUserCurrency: '50,021',
      name: 'Bitcoin',
      shortName: 'BTC',
      changeInPercent: {
        changeDirection: '-',
        changeValue: '2.56',
      },
    },
  },
  {
    id: 2,
    currency: {
      name: 'United States Dollor',
      shortName: 'USD',
      symbol: '$',
    },
    holding: {
      value: '0.000',
      holdingValueInUserCurrency: '0.000',
    },
    crypto: {
      valueInUserCurrency: '50,021',
      name: 'Etherium',
      shortName: 'ETH',
      changeInPercent: {
        changeDirection: '-',
        changeValue: '2.56',
      },
    },
  },
  {
    id: 3,
    currency: {
      name: 'United States Dollor',
      shortName: 'USD',
      symbol: '$',
    },
    holding: {
      value: '0.000',
      holdingValueInUserCurrency: '0.000',
    },
    crypto: {
      valueInUserCurrency: '50,021',
      name: 'USDT',
      shortName: 'USDT',
      changeInPercent: {
        changeDirection: '-',
        changeValue: '2.56',
      },
    },
  },
];

// {
//   "addressPresent": false,
//   "availableBalance": "00",
//   "coinId": "USDT",
//   "vaultBalance": "0.000000",
// }

const cryotpyIcon = (shortName: string) => {
  switch (shortName) {
    case 'USDT':
      return <TetherIcon />;

    case 'BTC':
      return <BitcoinIcon />;

    case 'ETH':
      return <EtheriumIcon />;

    default:
      break;
  }
};

export const Wallets: React.FC<WalletsProps> = ({ style, onPress }) => {
  useEffect(() => {
    async function onloadAPICalls() {
      const data = await walletsAllGet({});
      // console.log(data);
    }

    onloadAPICalls();
  }, []);

  const onWalletPress = (walletDetails = {}) => {
    onPress(walletDetails);
  };

  return (
    <View style={{ ...styles.WalletsWrapper, ...style }}>
      <View>
        <Title>Wallets</Title>
      </View>
      {wallets &&
        wallets.map((val) => {
          const changeDirectionColor = val.crypto.changeInPercent.changeDirection === '+' ? '#44CBB3' : '#EA6D6D';

          return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => onWalletPress(val)} key={val.id}>
              <WhiteView style={styles.WalletRowWrapper}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: 75 }}>
                  <View style={{ marginRight: 15 }}>{cryotpyIcon(val.crypto.shortName)}</View>
                  <Text style={styles.cryptoName}>{val.crypto.shortName}</Text>
                </View>
                <View>
                  <Text style={styles.cryptoHolding}>{val.holding.value}</Text>
                  <Text
                    style={styles.cryptoHoldingSubtext}
                  >{`${val.currency.symbol} ${val.holding.holdingValueInUserCurrency}`}</Text>
                </View>
                <View>
                  <Text
                    style={styles.cryptoHoldingValue}
                  >{`${val.currency.symbol}${val.crypto.valueInUserCurrency}`}</Text>
                  <Text style={{ ...styles.cryptoHoldingValueSubtext, color: changeDirectionColor }}>
                    {`${val.crypto.changeInPercent.changeDirection}${val.crypto.changeInPercent.changeValue}%`}
                  </Text>
                </View>
              </WhiteView>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  WalletsWrapper: {
    width: '100%',
  },
  WalletRowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 30,
  },
  walletCryptoDetails: {},
  cryptoName: {
    fontWeight: '400',
    fontSize: 20,
  },
  cryptoHolding: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
  },
  cryptoHoldingSubtext: {
    fontSize: 10,
    width: '100%',
    textAlign: 'center',
  },
  cryptoHoldingValue: {
    fontWeight: '400',
    fontSize: 16,
  },
  cryptoHoldingValueSubtext: {
    fontSize: 10,
    textAlign: 'center',
  },
});
