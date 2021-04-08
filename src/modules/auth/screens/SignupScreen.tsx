import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

import { AuthNavProps } from "../AuthParamList";

function SignupScreen({ navigation, route }: AuthNavProps<"SignUp">) {
  return (
    <View>
      <Text style={styles.text}>route name: {route.name}</Text>
      <Button
        title="go to login"
        onPress={() => {
          navigation.navigate("LoginEmail");
          // navigation.goBack()
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

export default SignupScreen;