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

const WalletScreen = ({ navigation, walletDetails }) => {
  const [walletAddress, setWalletAddress] = useState(() => '');
  const { toast } = useContext(GlobalAlertsContext);

  const onloadAPICalls = async (coinId: CoinId) => {
    try {
      const data = await walletAddressGet({ coinId });
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
              navigation.navigate('Withdraw', { walletDetails: { ...walletDetails, address: walletAddress } });
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
              navigation.navigate('Deposit', { walletDetails: { ...walletDetails, address: walletAddress } });
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
            onPress={(e) => {
              copyToClipboard();
              toast({
                logId: 'WALLET_ADDRESS_COPIED',
                title: 'Address copied',
              });
            }}
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
