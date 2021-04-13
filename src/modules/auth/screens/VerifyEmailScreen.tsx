import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { AuthNavProps } from "../AuthParamList";
import { AppButton } from "../../../components/design/AppButton";

const VerifyEmailScreen = ({ navigation, route }: AuthNavProps<"VerifyEmail">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>VerifyEmail</Text>
      <AppButton
        title="Confirm"
        onPress={() => {
          // Set passcode: true, SignUp: true, User and go home
          navigation.navigate("SetPasscode")
        }}
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
