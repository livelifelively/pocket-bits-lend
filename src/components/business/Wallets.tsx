import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import useComponentError from '../../hooks/useComponentError';
import { WhiteTouchableOpacity } from '../design/WhiteTouchableOpacity';
import { getAllWallets } from '../../redux/actions/WalletsActions';

import CryptoIcon from '../design/CryptoIcon';

interface WalletsProps {
  style?: Record<string, unknown>;
  onPress: (walletDetails: Record<string, unknown>) => void;
}

export const Wallets: React.FC<WalletsProps> = ({ style, onPress }) => {
  const wallets = useSelector((state) => state?.wallets?.balance);

  const [componentError] = useState(() => {
    return { hasError: false, message: '', id: '' };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllWallets());
  }, []);

  useComponentError(componentError);

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
            <WhiteTouchableOpacity onPress={() => onWalletPress(val)} key={val.id} style={styles.WalletRowWrapper}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  width: 75,
                }}
              >
                <View style={{ marginRight: 15 }}>
                  <CryptoIcon shortName={val.crypto.shortName} />
                </View>
                <Text style={styles.cryptoName}>{val.crypto.shortName}</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text style={styles.cryptoHolding}>{val.holding.total.value}</Text>
                <Text
                  style={styles.cryptoHoldingSubtext}
                >{`${val.currency.symbol} ${val.holding.total.valueInUserCurrency}`}</Text>
              </View>
              <View style={{ flex: 4 }}>
                <Text
                  style={styles.cryptoHoldingValue}
                >{`${val.currency.symbol} ${val.crypto.valueInUserCurrency}`}</Text>
                <Text style={{ ...styles.cryptoHoldingValueSubtext, color: changeDirectionColor }}>
                  {`${val.crypto.changeInPercent.changeDirection}${val.crypto.changeInPercent.changeValue}%`}
                </Text>
              </View>
            </WhiteTouchableOpacity>
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
    marginBottom: 15,
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: '100%',
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
    textAlign: 'right',
  },
});
