import React, { useState } from "react";
import { StyleSheet,View } from "react-native";
import { Text } from "react-native-paper";

import { DefaultLayout } from "../../../layouts/Default";
import { AuthNavProps } from "../AuthParamList";
import { AppButton } from "../../../components/design/AppButton";
import { AppTextInput } from "../../../components/design/AppTextInput";

const VerifyEmailScreen = ({ navigation, route }: AuthNavProps<"VerifyEmail">) => {
  const [OTP, setOTP] = useState(() => '');

  const onOTPChange = (text: string) => {
    setOTP(text)
  }

  return (
    <DefaultLayout style={{backgroundColor: '#FCFCFC', paddingHorizontal: 45}}>
      <View style={{height: 65, width: '100%', backgroundColor: '#EBEBEB', marginTop: 100, marginBottom: 120, alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 24}}>logo</Text>
      </View>
      <View style={{marginBottom: 40}}>
        <Text style={{fontSize: 24, fontFamily: 'Poppins-Medium'}}>Verify Your Email</Text>
      </View>
      <AppTextInput
        autoCorrect={false}
        style={{ width: '100%', backgroundColor: '#F7F7F7', padding: 18, marginBottom: 10}}
        value={`${OTP}`}
        keyboardType="number-pad"
        onChangeText={onOTPChange}
        placeholder="Enter your OTP"
        maxLength={15}
      />
      <View style={{marginBottom: 70}}>
        <Text style={{color: '#625E59', fontSize: 12}}>You’ll receive a 6 digit OTP on your registered email</Text>
      </View>
      <AppButton
        title="Confirm Email"
        onPress={() => {
          navigation.navigate("SetPasscode")
        }}
        size='normal'
        style={{paddingHorizontal: 50}}
      />
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default VerifyEmailScreen;
