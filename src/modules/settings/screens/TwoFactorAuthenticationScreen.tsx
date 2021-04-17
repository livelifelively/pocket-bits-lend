import React, { useState } from "react";
import { Text, StyleSheet, Button, View } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { SettingsNavProps } from "../SettingsParamList";
import { AppButton } from "../../../components/design/AppButton";
import Topbar from "../../../components/design/Topbar";
import { WhiteView } from "../../../components/design/WhiteView";
import { Title } from "react-native-paper";
import { AppTextInput } from "../../../components/design/AppTextInput";

const TwoFactorAuthenticationScreen = ({navigation}: SettingsNavProps<"TwoFactorAuthentication">) => {
  const [verificationCode, setVerificationCode] = useState('')
  const onVerificationCodeChange = () => {}

  return (
    <DefaultLayout backgroundColor='#ffffff'>
      <Topbar
        onBackButtonPress={() => {
          navigation.goBack();
        }}
        title="TwoFactorAuthentication"
      />
      <View style={styles.twoFactorAuthQRCode}></View>
      <Title style={styles.component}>Scan the QR Code</Title>
      <Title style={styles.component}>OR</Title>
      <Title style={styles.component}>Copy this Key</Title>
      <View style={{...styles.component, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FAFAFA', width: '100%', alignItems: 'center', paddingHorizontal: 15, borderRadius: 15}}>
        <View>
          <Text style={{color: '#625E59', fontSize: 12}}>3F8QCEXUrRQcjoyp2J8ng71xre3vd33dcer</Text>
        </View>
        <AppButton title="C" onPress={() => {}} />
      </View>
      <AppTextInput
        autoCorrect={false}
        style={{...styles.component, width: '100%', backgroundColor: '#F7F7F7'}}
        value={`${verificationCode}`}
        onChangeText={onVerificationCodeChange}
        placeholder="Enter your verification code"
        maxLength={15}
      />
      <AppButton title="Enable" onPress={() => {}} />
      <View>
        <Text>Step 1 : Install an authenticator app such as Google authenticator or Authy.</Text>
      </View>
      <View>
        <Text>Step 2 : Scan this QR code or copy the key phrase to add 2FA.</Text>
      </View>
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  twoFactorAuthQRCode: {
    width: 175,
    height: 175,
    marginBottom: 50,
    backgroundColor: '#000'
  },
  component: {
    marginBottom: 25
  }
});

export default TwoFactorAuthenticationScreen;
