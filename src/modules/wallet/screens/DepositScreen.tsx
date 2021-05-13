import React from 'react';
import { StyleSheet, View, TouchableOpacity, Clipboard } from 'react-native';
import { Text, Title } from 'react-native-paper';

import { DefaultLayout } from '../../../layouts/Default';
import { WalletNavProps } from '../WalletParamList';
import Topbar from '../../../components/design/Topbar';
import { YellowCopyIcon, YellowShareIcon } from '../../../icons';
import { WhiteTouchableOpacity } from '../../../components/design/WhiteTouchableOpacity';

const DepositScreen = ({ navigation, route }: WalletNavProps<'Deposit'>) => {
  const { walletDetails } = route.params;

  const copyToClipboard = () => {
    Clipboard.setString(walletDetails.address);
  };

  return (
    <DefaultLayout backgroundColor="#ffffff">
      <Topbar
        onBackButtonPress={() => {
          navigation.goBack();
        }}
        title="Receive BTC"
      />
      <View style={styles.depositQRCode}></View>
      <Title style={styles.component}>Scan the QR Code</Title>
      <Title style={styles.component}>OR</Title>
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
          <Text style={{ color: '#625E59', fontSize: 12 }}>3F8QCEXUrRQcjoyp2J8ng71xre3vd33dcer</Text>
        </View>
        <TouchableOpacity onPress={copyToClipboard} style={{ marginRight: 10 }}>
          <YellowCopyIcon />
        </TouchableOpacity>
      </View>
      <WhiteTouchableOpacity
        onPress={() => {
          navigation.navigate('Withdraw');
        }}
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
    width: 175,
    height: 175,
    marginBottom: 50,
    backgroundColor: '#000',
  },
  component: {
    marginBottom: 30,
  },
});

export default DepositScreen;
