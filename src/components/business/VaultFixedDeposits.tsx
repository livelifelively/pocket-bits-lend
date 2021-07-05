import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Title } from 'react-native-paper';

import Dropdown from '../design/Dropdown';
import CryptoIcon from '../design/CryptoIcon';
import { WhiteView } from '../design/WhiteView';
import { YellowView } from '../design/YellowView';
import { APIRequestsContext } from '../../contexts/APIRequestsContext';
import { vaultsInterestRates } from '../../api/vault/requests';
interface VaultFixedDepositsProps {
  style?: Record<string, unknown>;
  onPress: (data: any) => void;
}

// TODO #FIXME
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
  const [activeFixedDeposits, setActiveFixedDeposits] = useState(() => null);
  const { apiRequestHandler } = useContext(APIRequestsContext);
  const [viewAllVaultOptions, setViewAllVaultOptions] = useState(() => false);

  const getInterestRates = async () => {
    const data = await vaultsInterestRates({ coinId: fixedDepositsWallet.coinId }, apiRequestHandler);
    setActiveFixedDeposits(data);
  };

  useEffect(() => {
    getInterestRates();
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
          activeFixedDeposits.map((val, index) => {
            return (
              <WhiteView
                style={{ ...styles.vaultFixedDeposit, ...{ display: index > 3 && !viewAllVaultOptions ? 'none' : '' } }}
                key={val.id}
              >
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    onPress({ all: activeFixedDeposits, active: val });
                  }}
                >
                  {/* <Text style={styles.vaultFixedDepositInterestRate}>{val.coinId}</Text> */}
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
      <View>
        <TouchableOpacity onPress={() => setViewAllVaultOptions(!viewAllVaultOptions)}>
          <Text style={[styles.subtext, { textAlign: 'right' }]}>+ view {viewAllVaultOptions ? 'less' : 'more'}</Text>
        </TouchableOpacity>
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
    marginBottom: 15,
    paddingHorizontal: 20,
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
