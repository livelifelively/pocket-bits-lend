import React, { useEffect, useState } from 'react';
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
  const [wallets, setWallets] = useState<[] | [WalletDetails]>(() => []);

  const onloadAPICalls = async () => {
    const data = await walletsAllGet({});
    setWallets(data);
  };

  useEffect(() => {
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
        wallets.map((val: WalletDetails) => {
          const changeDirectionColor = val.crypto.changeInPercent.changeDirection === '+' ? '#44CBB3' : '#EA6D6D';

          return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => onWalletPress(val)} key={val.id}>
              <WhiteView style={styles.WalletRowWrapper}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: 75,
                  }}
                >
                  <View style={{ marginRight: 15 }}>{cryotpyIcon(val.crypto.shortName)}</View>
                  <Text style={styles.cryptoName}>{val.crypto.shortName}</Text>
                </View>
                <View style={{ flex: 2 }}>
                  <Text style={styles.cryptoHolding}>{val.holding.total.value}</Text>
                  <Text
                    style={styles.cryptoHoldingSubtext}
                  >{`${val.currency.symbol} ${val.holding.total.valueInUserCurrency}`}</Text>
                </View>
                <View style={{ flex: 2 }}>
                  <Text
                    style={styles.cryptoHoldingValue}
                  >{`${val.currency.symbol} ${val.crypto.valueInUserCurrency}`}</Text>
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
    textAlign: 'center',
  },
  cryptoHoldingSubtext: {
    fontSize: 10,
    width: '100%',
    textAlign: 'center',
  },
  cryptoHoldingValue: {
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'right',
  },
  cryptoHoldingValueSubtext: {
    fontSize: 10,
    textAlign: 'center',
  },
});
