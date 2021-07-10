import React, { useContext } from 'react';
import { StyleSheet, View, TouchableOpacity, Clipboard } from 'react-native';
import { Text, Title } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';

import { DefaultLayout } from '../../../layouts/Default';
import { WalletNavProps } from '../WalletParamList';

import { YellowCopyIcon, YellowShareIcon } from '../../../icons';
import { WhiteTouchableOpacity } from '../../../components/design/WhiteTouchableOpacity';
import { GlobalAlertsContext } from '../../../contexts/GlobalAlertsContext';

const DepositScreen = ({ navigation, route }: WalletNavProps<'Deposit'>) => {
  const { walletDetails } = route.params;
  const { toast } = useContext(GlobalAlertsContext);

  // #FIXME get from api only
  const address = walletDetails && walletDetails.address ? walletDetails.address : '';

  const copyToClipboard = () => {
    Clipboard.setString(address);
    Clipboard.getString().then((res) => console.log(res));
    toast({
      logId: 'WALLET_ADDRESS_COPIED',
      title: 'Address copied',
    });
  };

  return (
    // #TODO #FIXME add crypto coin id here
    <DefaultLayout
      topBar={{
        showBackButton: true,
        title: 'Receive BTC',
        onBackButtonPress: () => {
          navigation.goBack();
        },
      }}
      backgroundColor="#ffffff"
    >
      {address.length > 0 && (
        <>
          <View style={styles.depositQRCode}>
            <QRCode value={address} size={200} />
          </View>
          <Title style={styles.component}>Scan the QR Code</Title>
          <Title style={styles.component}>OR</Title>
        </>
      )}
      <View
        style={{
          marginBottom: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#FAFAFA',
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: 15,
          borderRadius: 15,
          paddingVertical: 20,
        }}
      >
        <View>
          <Text style={{ color: '#625E59', fontSize: 12 }}>{address}</Text>
        </View>
        <TouchableOpacity onPress={copyToClipboard} style={{ marginLeft: 10, width: 30, height: 30 }}>
          <YellowCopyIcon />
        </TouchableOpacity>
      </View>
      <WhiteTouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingHorizontal: 15,
          paddingVertical: 8,
          borderRadius: 8,
          width: 130,
        }}
      >
        <View style={{ width: 19, height: 19, marginRight: 20 }}>
          <YellowShareIcon />
        </View>
        <View>
          <Text>Share</Text>
        </View>
      </WhiteTouchableOpacity>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  depositQRCode: {
    marginBottom: 30,
  },
  component: {
    marginBottom: 30,
  },
});

export default DepositScreen;
