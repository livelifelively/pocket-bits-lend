import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Title } from 'react-native-paper';

import Dropdown from '../design/Dropdown';
import CryptoIcon from '../design/CryptoIcon';
import { WhiteView } from '../design/WhiteView';
import { YellowView } from '../design/YellowView';

interface VaultFixedDepositsProps {
  style?: Record<string, unknown>;
  onPress: (data: any) => void;
}

const vaults = [
  {
    id: 1,
    interestRatePercent: 10,
    vaultDuration: {
      value: 1,
      timeUnit: 'month',
    },
    coinId: 'BTC',
  },
  {
    id: 2,
    interestRatePercent: 13,
    vaultDuration: {
      value: 3,
      timeUnit: 'months',
    },
    coinId: 'BTC',
  },
  {
    id: 3,
    interestRatePercent: 16,
    vaultDuration: {
      value: 6,
      timeUnit: 'months',
    },
    coinId: 'BTC',
  },
  {
    id: 4,
    interestRatePercent: 23,
    vaultDuration: {
      value: 1,
      timeUnit: 'year',
    },
    coinId: 'BTC',
  },
  {
    id: 11,
    interestRatePercent: 10,
    vaultDuration: {
      value: 1,
      timeUnit: 'month',
    },
    coinId: 'ETH',
  },
  {
    id: 12,
    interestRatePercent: 13,
    vaultDuration: {
      value: 3,
      timeUnit: 'months',
    },
    coinId: 'ETH',
  },
  {
    id: 13,
    interestRatePercent: 16,
    vaultDuration: {
      value: 6,
      timeUnit: 'months',
    },
    coinId: 'ETH',
  },
  {
    id: 14,
    interestRatePercent: 23,
    vaultDuration: {
      value: 1,
      timeUnit: 'year',
    },
    coinId: 'ETH',
  },
  {
    id: 21,
    interestRatePercent: 10,
    vaultDuration: {
      value: 1,
      timeUnit: 'month',
    },
    coinId: 'USDT',
  },
  {
    id: 22,
    interestRatePercent: 13,
    vaultDuration: {
      value: 3,
      timeUnit: 'months',
    },
    coinId: 'USDT',
  },
  {
    id: 23,
    interestRatePercent: 16,
    vaultDuration: {
      value: 6,
      timeUnit: 'months',
    },
    coinId: 'USDT',
  },
  {
    id: 24,
    interestRatePercent: 23,
    vaultDuration: {
      value: 1,
      timeUnit: 'year',
    },
    coinId: 'USDT',
  },
  {
    id: 31,
    interestRatePercent: 10,
    vaultDuration: {
      value: 1,
      timeUnit: 'month',
    },
    coinId: 'XRP',
  },
  {
    id: 32,
    interestRatePercent: 13,
    vaultDuration: {
      value: 3,
      timeUnit: 'months',
    },
    coinId: 'XRP',
  },
  {
    id: 33,
    interestRatePercent: 16,
    vaultDuration: {
      value: 6,
      timeUnit: 'months',
    },
    coinId: 'XRP',
  },
  {
    id: 34,
    interestRatePercent: 23,
    vaultDuration: {
      value: 1,
      timeUnit: 'year',
    },
    coinId: 'XRP',
  },
];

const fixedDepositTokens = [
  {
    coinId: 'BTC',
  },
  {
    coinId: 'ETH',
  },
  {
    coinId: 'USDT',
  },
  {
    coinId: 'XRP',
  },
];

export const VaultFixedDeposits: React.FC<VaultFixedDepositsProps> = ({ style, onPress }) => {
  const [fixedDepositsWallet, setFixedDepositsWallet] = useState(() => fixedDepositTokens[0]);
  const [activeFixedDeposits, setActiveFixedDeposits] = useState(() => null);

  useEffect(() => {
    const activeVault = vaults.filter((val) => val.coinId === fixedDepositsWallet.coinId);
    setActiveFixedDeposits(activeVault);
  }, [fixedDepositsWallet]);

  return (
    <View style={{ ...styles.vaultFixedDepositsWrapper, ...style }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <Title style={styles.title}>Fixed Deposits</Title>
        <Dropdown
          options={fixedDepositTokens}
          activeOption={fixedDepositsWallet}
          onMenuItemSelect={(val) => setFixedDepositsWallet(val)}
          keyVal={(val: any) => val.coinId}
          titleVal={(val: any) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ marginRight: 20 }}>
                <CryptoIcon shortName={val.coinId} />
              </View>
              <View>
                <Text>{val.coinId}</Text>
              </View>
            </View>
          )}
          wrapperStyles={{ backgroundColor: '#fff', width: 130, paddingHorizontal: 18 }}
        />
      </View>
      <View style={styles.vaultFixedDepositsList}>
        {activeFixedDeposits ? (
          activeFixedDeposits.map((val) => {
            return (
              <WhiteView style={styles.vaultFixedDeposit} key={val.id}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    onPress({ all: activeFixedDeposits, active: val });
                  }}
                >
                  <Text style={styles.vaultFixedDepositInterestRate}>{val.coinId}</Text>
                  <Text style={styles.vaultFixedDepositInterestRate}>{val.interestRatePercent}%</Text>
                  <Text style={[styles.subtext, { textAlign: 'center' }]}>Interest Rate</Text>
                  <YellowView style={styles.vaultFixedDepositDuration}>
                    <Text style={{ textAlign: 'center' }}>
                      {`${val.vaultDuration.value} ${val.vaultDuration.timeUnit}`} vault
                    </Text>
                  </YellowView>
                </TouchableOpacity>
              </WhiteView>
            );
          })
        ) : (
          <></>
        )}
      </View>
      <View>
        <Text style={[styles.subtext, { textAlign: 'right' }]}>+ view more</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 25,
  },
  vaultFixedDepositsWrapper: {
    width: '100%',
  },
  vaultFixedDepositsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vaultFixedDeposit: {
    width: '48%',
    marginBottom: 10,
  },
  vaultFixedDepositInterestRate: {
    color: '#FFB850',
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  subtext: {
    color: '#625E59',
    fontSize: 12,
  },
  vaultFixedDepositDuration: {
    marginTop: 15,
  },
});
