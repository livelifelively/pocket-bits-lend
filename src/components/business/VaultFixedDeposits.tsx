import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Title } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import { getAllVaultsRates } from '../../redux/actions/VaultActions';
import Dropdown from '../design/Dropdown';
import CryptoIcon from '../design/CryptoIcon';
import { WhiteView } from '../design/WhiteView';
import { YellowView } from '../design/YellowView';

interface VaultFixedDepositsProps {
  style?: Record<string, unknown>;
  onPress: (data: any) => void;
}

// TODO #FIXME get it from wallets
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
  const [fixedDepositsWallet, setFixedDepositsWallet] = useState(() => fixedDepositTokens[3]);
  const [viewAllVaultOptions, setViewAllVaultOptions] = useState(() => false);
  const dispatch = useDispatch();
  const activeFixedDeposits = useSelector((state) => {
    const rates = state.vaults.rates && state.vaults.rates[fixedDepositsWallet.coinId];
    return rates;
  });

  useEffect(() => {
    dispatch(getAllVaultsRates(fixedDepositsWallet.coinId));
  }, [fixedDepositsWallet]);

  const visibleActiveFixedDeposits =
    activeFixedDeposits && activeFixedDeposits.length > 4 && !viewAllVaultOptions
      ? activeFixedDeposits.slice(0, 4)
      : activeFixedDeposits;

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
        {visibleActiveFixedDeposits ? (
          visibleActiveFixedDeposits.map((val, index) => {
            return (
              <WhiteView
                style={{
                  ...styles.vaultFixedDeposit,
                }}
                key={val.id}
              >
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    onPress({ all: activeFixedDeposits, active: val });
                  }}
                >
                  <Text style={styles.vaultFixedDepositInterestRate}>{val.interestRatePercent}%</Text>
                  <Text style={[styles.subtext, { textAlign: 'center' }]}>Interest Rate</Text>
                  <YellowView style={[styles.vaultFixedDepositDuration, { paddingVertical: 8, paddingHorizontal: 0 }]}>
                    <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 12 }}>
                      {`${val.vaultDuration.value} ${val.vaultDuration.timeUnit}`} Vault
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
      {activeFixedDeposits && activeFixedDeposits.length > 4 && (
        <View>
          <TouchableOpacity onPress={() => setViewAllVaultOptions(!viewAllVaultOptions)}>
            <Text style={[styles.subtext, { textAlign: 'right' }]}>+ view {viewAllVaultOptions ? 'less' : 'more'}</Text>
          </TouchableOpacity>
        </View>
      )}
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
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 20,
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
