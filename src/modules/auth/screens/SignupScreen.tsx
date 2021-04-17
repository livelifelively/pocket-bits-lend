import React, { useState } from "react";
import { Checkbox, Text } from "react-native-paper";

import { AuthNavProps } from "../AuthParamList";
import { DefaultLayout } from "../../../layouts/Default";
import { AppButton } from "../../../components/design/AppButton";
import { View } from "react-native";
import { AppTextInput } from "../../../components/design/AppTextInput";

function SignupScreen({ navigation, route }: AuthNavProps<"SignUp">) {
  const [email, setEmail] = useState(() => '')
  const [password, setPassword] = useState(() => '')
  const [confirmPassword, setConfirmPassword] = useState(() => '')
  const [termsAndConditions, setTermsAndConditions] = useState(() => false)
  
  // const { login } = useContext(AuthContext);

  const onEmailChange = (text: string) => {
    setEmail(text)
  }

  const onPasswordChange = (text: string) => {
    setPassword(text)
  }

  const onConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text)
  }

  return (
    <DefaultLayout backgroundColor='#FCFCFC' paddingHorizontal={45}>
      <View style={{height: 65, width: '100%', backgroundColor: '#EBEBEB', marginTop: 100, marginBottom: 65, alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 24}}>logo</Text>
      </View>
      <View style={{marginBottom: 40}}>
        <Text style={{fontSize: 24, fontFamily: 'Poppins-Medium'}}>Sign Up</Text>
      </View>
      <AppTextInput
        autoCorrect={false}
        style={{ width: '100%', backgroundColor: '#F7F7F7', padding: 18, marginBottom: 20}}
        value={`${email}`}
        onChangeText={onEmailChange}
        placeholder="Email"
        maxLength={15}
      />
      <AppTextInput
        autoCorrect={false}
        style={{ width: '100%', backgroundColor: '#F7F7F7', padding: 18, marginBottom: 20}}
        value={`${password}`}
        onChangeText={onPasswordChange}
        placeholder="Password"
        maxLength={15}
      />
      <AppTextInput
        autoCorrect={false}
        style={{ width: '100%', backgroundColor: '#F7F7F7', padding: 18, marginBottom: 20}}
        value={`${confirmPassword}`}
        onChangeText={onConfirmPasswordChange}
        placeholder="Confirm Password"
        maxLength={15}
      />
      <View style={{width: '100%', justifyContent: 'flex-start', flexDirection: 'row'}}>
        <View style={{backgroundColor: termsAndConditions ? '#44CBB3' : '#ffffff', borderColor: '#44CBB3', borderWidth: 1, justifyContent: 'center', borderRadius: 5}}>
          <Checkbox
            status={termsAndConditions ? 'checked' : 'unchecked'}
            onPress={() => {
              setTermsAndConditions(!termsAndConditions);
            }}
            color="#fff"
          />
        </View>
        <View style={{width: '85%', marginLeft: 10}}>
          <Text>I’ve read and I agree to all the terms and conditions.</Text>
        </View>
      </View>
      <AppButton
        title="Sign Up"
        onPress={() => {
          navigation.navigate("VerifyEmail");
        }}
        size='normal'
        style={{paddingHorizontal: 50}}
      />
      <View>
        <Text style={{fontFamily: 'Poppins-Bold'}}>Have an account, </Text>
        <AppButton
          title="Sign In"
          size="small"
          mode="text"
          color="#363eff"
          onPress={() => {
            navigation.navigate("LoginEmail");
          }}
        />
      </View>
    </DefaultLayout>
  );
}

export default SignupScreen;