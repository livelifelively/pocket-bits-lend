import React, {useContext, useState} from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { AuthContext } from "../AuthProvider";
import { AuthNavProps } from "../AuthParamList";
import { DefaultLayout } from "../../../layouts/Default";
import { AppButton } from "../../../components/design/AppButton";
import { AppTextInput } from "../../../components/design/AppTextInput";

function LoginEmailScreen({ navigation }: AuthNavProps<"LoginEmail">) {
  const [email, setEmail] = useState(() => '')
  const [password, setPassword] = useState(() => '')
  
  const { login } = useContext(AuthContext);

  const onEmailChange = (text: string) => {
    setEmail(text)
  }

  const onPasswordChange = (text: string) => {
    setPassword(text)
  }

  return (
    <DefaultLayout backgroundColor='#FCFCFC' paddingHorizontal={45}>
      <View style={{height: 65, width: '100%', backgroundColor: '#EBEBEB', marginTop: 100, marginBottom: 65, alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 24}}>logo</Text>
      </View>
      <View style={{marginBottom: 40}}>
        <Text style={{fontSize: 24, fontFamily: 'Poppins-Medium'}}>Sign In</Text>
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
        style={{ width: '100%', backgroundColor: '#F7F7F7', padding: 18}}
        value={`${password}`}
        onChangeText={onPasswordChange}
        placeholder="Password"
        maxLength={15}
      />
      <View style={{width: '100%', justifyContent: 'flex-start', flexDirection: 'row'}}>
        <AppButton
          title="Forgot Password?"
          onPress={() => {
            // login();
          }}
          mode="text"
          size="small"
          color="#FF7E42"
          style={{paddingHorizontal: 0}}
        />
      </View>
      <AppButton
        title="Sign In"
        onPress={() => {
          login();
        }}
        size='normal'
        style={{paddingHorizontal: 50}}
      />
      <View>
        <Text style={{fontFamily: 'Poppins-Bold'}}>Don’t have an account, </Text>
        <AppButton
          title="Sign Up"
          size="small"
          mode="text"
          color="#363eff"
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        />
      </View>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  
});

export default LoginEmailScreen;
