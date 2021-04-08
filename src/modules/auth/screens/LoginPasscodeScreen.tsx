import React, {useContext} from "react";
import { Text, StyleSheet, View, Button } from "react-native";

import { AuthContext } from "../AuthProvider";
import { AuthNavProps } from "../AuthParamList";

function LoginPasscodeScreen({ navigation }: AuthNavProps<"LoginPasscode">) {
  const { login } = useContext(AuthContext);
  return (
    <View>
      <Text>Login with Pass code screen</Text>
      <Button
        title="log me in"
        onPress={() => {
          login();
        }}
      />
      <Button
        title="go to Sign Up"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default LoginPasscodeScreen;
