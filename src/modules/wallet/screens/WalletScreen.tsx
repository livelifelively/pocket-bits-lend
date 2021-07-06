import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Clipboard } from 'react-native';
import { Text } from 'react-native-paper';

import { DefaultLayout } from '../../../layouts/Default';
import { WalletBalance } from '../../../components/business/WalletBalance';
import Topbar from '../../../components/design/Topbar';
import { WalletTransactionHistory } from '../../../components/business/WalletTransactionHistory';
import { CopyOutlineIcon, ReceiveIcon, SendIcon } from '../../../icons';
import { walletAddressGet } from '../../../api/wallet/requests';
import { GlobalAlertsContext } from '../../../contexts/GlobalAlertsContext';
import { APIRequestsContext } from '../../../contexts/APIRequestsContext';
import { WhiteTouchableOpacity } from '../../../components/design/WhiteTouchableOpacity';

const WalletScreen = ({ navigation, walletDetails }) => {
  const [walletAddress, setWalletAddress] = useState(() => '');
  const { toast } = useContext(GlobalAlertsContext);
  const { apiRequestHandler } = useContext(APIRequestsContext);

  const onloadAPICalls = async (coinId: CoinId) => {
    try {
      const data = await walletAddressGet({ coinId }, apiRequestHandler);
      // setWallets(data);
    } catch (e) {
      // setComponentError({
      //   hasError: true,
      //   message: 'API request failed',
      //   id: 'COMPONENT__WALLETS--API_REQUEST_FAILED',
      // });
    }
  };

  const copyToClipboard = () => {
    Clipboard.setString(walletAddress);
  };

  useEffect(() => {
    onloadAPICalls(walletDetails.crypto.shortName);
  }, [walletDetails.crypto.shortName]);

  return (
    <DefaultLayout>
      <Topbar
        onBackButtonPress={() => {
          navigation.goBack();
        }}
        title="Wallet"
      />
      <WalletBalance style={styles.component} onPress={() => {}} walletDetails={walletDetails} />
      <View style={{ ...styles.walletActions, ...styles.component }}>
        <View style={{ alignItems: 'center' }}>
          <WhiteTouchableOpacity
            onPress={() => {
              navigation.navigate('Withdraw', { walletDetails: { ...walletDetails, address: walletAddress } });
            }}
            style={{
              backgroundColor: '#ffffff',
              height: 53,
              width: 53,
              borderRadius: 53,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 10,
            }}
          >
            <SendIcon />
          </WhiteTouchableOpacity>
          <Text style={styles.walletActionsSubtext}>Send</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <WhiteTouchableOpacity
            onPress={() => {
              navigation.navigate('Deposit', { walletDetails: { ...walletDetails, address: walletAddress } });
            }}
            style={{
              backgroundColor: '#ffffff',
              height: 53,
              width: 53,
              borderRadius: 53,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 10,
            }}
          >
            <ReceiveIcon />
          </WhiteTouchableOpacity>
          <Text style={styles.walletActionsSubtext}>Receive</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <WhiteTouchableOpacity
            onPress={() => {
              copyToClipboard();
              toast({
                logId: 'WALLET_ADDRESS_COPIED',
                title: 'Address copied',
              });
            }}
            style={{
              backgroundColor: '#ffffff',
              height: 53,
              width: 53,
              borderRadius: 53,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 10,
            }}
          >
            <CopyOutlineIcon />
          </WhiteTouchableOpacity>
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
