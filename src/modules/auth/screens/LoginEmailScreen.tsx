import React, {useContext} from "react";
import { StyleSheet, Button } from "react-native";
import { Text } from "react-native-paper";

import { AuthContext } from "../AuthProvider";
import { AuthNavProps } from "../AuthParamList";
import { DefaultLayout } from "../../../layouts/Default";
import { AppButton } from "../../../components/design/AppButton";
import { AppText } from "../../../components/design/AppText";

function LoginEmailScreen({ navigation }: AuthNavProps<"LoginEmail">) {
  const { login } = useContext(AuthContext);
  return (
    <DefaultLayout>
      <AppText>
        <Text style={styles.text}>Login with email screen</Text>
      </AppText>
      <AppButton
        title="Sign In"
        onPress={() => {
          login();
        }}
      />
      <AppButton
        title="Sign Up"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      />
      <AppButton
        title="Forgot Password?"
        onPress={() => {
          // login();
        }}
      />
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default LoginEmailScreen;
