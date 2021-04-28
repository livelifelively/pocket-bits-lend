import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

import { DefaultLayout } from '../../layouts/Default';
import { VaultNavProps } from './TabsParamList';
import { ValueCreated } from '../../components/business/ValueCreated';
import { VaultFixedDeposits } from '../../components/business/VaultFixedDeposits';
import { VaultActiveDeposits } from '../../components/business/VaultActiveDeposits';
import Topbar from '../../components/design/Topbar';
import { YellowActiveVaultIcon, YellowHistoryIcon } from '../../icons';

const VaultScreen = ({ navigation }: VaultNavProps<'VaultCreationStack'>) => {
  return (
    <DefaultLayout>
      <Topbar showBackButton={false} title="Vault" />
      <ValueCreated />
      <View style={styles.vaultActions}>
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              styles.vaultActionsButtons,
              {
                backgroundColor: '#ffffff',
                height: 53,
                width: 53,
                borderRadius: 53,
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}
            onPress={() => {
              navigation.navigate('VaultActiveDepositsStack');
            }}
          >
            <YellowActiveVaultIcon />
          </TouchableOpacity>
          <Text style={styles.vaultActionsSubtext}>Active Deposits</Text>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              styles.vaultActionsButtons,
              {
                backgroundColor: '#ffffff',
                height: 53,
                width: 53,
                borderRadius: 53,
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}
            onPress={() => {
              navigation.navigate('VaultHistoryStack');
            }}
          >
            <YellowHistoryIcon />
          </TouchableOpacity>
          <Text style={styles.vaultActionsSubtext}>History</Text>
        </View>
      </View>
      <VaultFixedDeposits
        style={{ marginBottom: 25 }}
        onPress={(data = {}) => {
          navigation.navigate('VaultCreationStack', data);
        }}
      />
      <VaultActiveDeposits />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  vaultActions: {
    flexDirection: 'row',
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  vaultActionsSubtext: {
    color: '#625E59',
    textAlign: 'center',
    fontSize: 12,
  },
  vaultActionsButtons: {
    marginBottom: 10,
    marginHorizontal: 13,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowColor: '#a3a3a3',
    shadowOffset: { height: 0, width: 0 },
  },
});

export default VaultScreen;
