import React from "react";
import { Title } from "react-native-paper";

import { AuthNavProps } from "../AuthParamList";
import { DefaultLayout } from "../../../layouts/Default";
import { AppButton } from "../../../components/design/AppButton";

function SignupScreen({ navigation, route }: AuthNavProps<"SignUp">) {
  return (
    <DefaultLayout>
      <Title>route name: {route.name}</Title>
      <AppButton
        title="Sign In"
        onPress={() => {
          navigation.navigate("LoginEmail");
        }}
      />
      <AppButton
        title="Sign Up"
        onPress={() => {
          navigation.navigate("VerifyEmail");
        }}
      />
    </DefaultLayout>
  );
}

export default SignupScreen;