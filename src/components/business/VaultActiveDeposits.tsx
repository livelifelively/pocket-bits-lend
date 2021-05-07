import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Title } from 'react-native-paper';
import { vaultsAllGet } from '../../api/vault/requests';

import { VaultActiveDepositsListUnit } from './VaultActiveDepositsListUnit';

interface VaultActiveDepositsProps {
  style?: Record<string, unknown>;
  showTitle?: boolean;
  expandableListUnit?: boolean;
}

// {
//   id: val.id,
//   principal: val.principal,
//   coinId: val.coinId,
//   tenure: {
//     id: val.tenure,
//     label: capitalize(val.tenure.split('_').join(' ')),
//   },
//   interestEarned: val.interestEarned,
//   createdAt: val.createdAt,
//   maturityDate: val.maturityDate,
// }

export const VaultActiveDeposits: React.FC<VaultActiveDepositsProps> = ({
  style,
  showTitle = true,
  expandableListUnit = false,
}) => {
  const [activeDeposits, setActiveDeposits] = useState(() => []);

  useEffect(() => {
    const onloadAPICalls = async () => {
      const data = await vaultsAllGet({});
      setActiveDeposits(data);
    };

    onloadAPICalls();
  }, []);

  return (
    <View style={{ ...styles.vaultActiveDepositsWrapper, ...style }}>
      {showTitle && (
        <View style={styles.componentTitle}>
          <Title>
            {'Active Deposits '}
            <Text style={styles.activeDepositsCount}>(4)</Text>
          </Title>
        </View>
      )}
      {activeDeposits &&
        activeDeposits.map((val) => {
          return (
            <VaultActiveDepositsListUnit expandableListUnit={expandableListUnit} depositDetails={val} key={val.id} />
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  vaultActiveDepositsWrapper: {
    flexDirection: 'column',
    width: '100%',
  },
  componentTitle: {
    marginBottom: 15,
  },
  activeDepositsCount: {
    color: '#FFB850',
    fontFamily: 'Poppins-Bold',
  },
});
