import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text, Title } from 'react-native-paper';

import { getAllActiveVaults } from '../../redux/actions/VaultActions';

import { VaultActiveDepositsListUnit } from './VaultActiveDepositsListUnit';

interface VaultActiveDepositsProps {
  style?: Record<string, unknown>;
  showTitle?: boolean;
  expandableListUnit?: boolean;
}

export const VaultActiveDeposits: React.FC<VaultActiveDepositsProps> = ({
  style,
  showTitle = true,
  expandableListUnit = false,
}) => {
  const dispatch = useDispatch();
  const activeDeposits = useSelector((state) => {
    return state.vaults.active;
  });

  useEffect(() => {
    dispatch(getAllActiveVaults());
  }, []);

  return (
    <View style={{ ...styles.vaultActiveDepositsWrapper, ...style }}>
      {showTitle && (
        <View style={styles.componentTitle}>
          <Title>
            {'Active Deposits '}
            <Text style={styles.activeDepositsCount}>({activeDeposits.length})</Text>
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
