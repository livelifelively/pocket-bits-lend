import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

import { DefaultLayout } from '../../../layouts/Default';
import { WalletNavProps } from '../WalletParamList';
import { WalletBalance } from '../../../components/business/WalletBalance';
import Topbar from '../../../components/design/Topbar';
import { WalletTransactionHistory } from '../../../components/business/WalletTransactionHistory';
import { CopyOutlineIcon, ReceiveIcon, SendIcon } from '../../../icons';

const WalletScreen = ({ navigation }: WalletNavProps<'Wallet'>) => {
  return (
    <DefaultLayout>
      <Topbar
        onBackButtonPress={() => {
          navigation.goBack();
        }}
        title="Wallet"
      />
      <WalletBalance style={styles.component} onPress={() => {}} />
      <View style={{ ...styles.walletActions, ...styles.component }}>
        <View>
          <TouchableOpacity
            style={[
              styles.walletActionsButtons,
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
              navigation.navigate('Withdraw');
            }}
          >
            <SendIcon />
          </TouchableOpacity>
          <Text style={styles.walletActionsSubtext}>Send</Text>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.walletActionsButtons,
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
              navigation.navigate('Deposit');
            }}
          >
            <ReceiveIcon />
          </TouchableOpacity>
          <Text style={styles.walletActionsSubtext}>Receive</Text>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.walletActionsButtons,
              {
                backgroundColor: '#ffffff',
                height: 53,
                width: 53,
                borderRadius: 53,
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}
            onPress={() => {}}
          >
            <CopyOutlineIcon />
          </TouchableOpacity>
          <Text style={styles.walletActionsSubtext}>Copy address</Text>
        </View>
      </View>
      <WalletTransactionHistory />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  component: {
    marginBottom: 20,
  },
  walletActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  walletActionsButtons: {
    marginBottom: 10,
    marginHorizontal: 13,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowColor: '#a3a3a3',
    shadowOffset: { height: 0, width: 0 },
  },
  walletActionsSubtext: {
    color: '#625E59',
    textAlign: 'center',
    fontSize: 12,
  },
});

export default WalletScreen;
