import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, Clipboard } from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { getWalletAddress } from '../../../redux/actions/WalletsActions';

import { DefaultLayout } from '../../../layouts/Default';
import { WalletBalance } from '../../../components/business/WalletBalance';

import { WalletTransactionHistory } from '../../../components/business/WalletTransactionHistory';
import { CopyOutlineIcon, ReceiveIcon, SendIcon } from '../../../icons';
import { GlobalAlertsContext } from '../../../contexts/GlobalAlertsContext';
import { WhiteTouchableOpacity } from '../../../components/design/WhiteTouchableOpacity';

const WalletScreen = ({ navigation, walletDetails }) => {
  const walletAddress = useSelector((state) => {
    return state?.wallets?.address[walletDetails.crypto.shortName];
  });
  const { toast } = useContext(GlobalAlertsContext);
  const dispatch = useDispatch();

  const copyToClipboard = () => {
    Clipboard.setString(walletAddress.depositAddress);
  };

  useEffect(() => {
    dispatch(getWalletAddress(walletDetails.crypto.shortName));
  }, [walletDetails.crypto.shortName]);

  return (
    <DefaultLayout
      topBar={{
        showBackButton: true,
        title: 'Wallet',
        onBackButtonPress: () => {
          navigation.goBack();
        },
      }}
    >
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
              navigation.navigate('Deposit', {
                walletDetails: { ...walletDetails, address: walletAddress?.depositAddress },
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
