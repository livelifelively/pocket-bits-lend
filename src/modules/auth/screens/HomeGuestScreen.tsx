import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { AuthNavProps } from "../AuthParamList";
import { DefaultLayout } from "../../../layouts/Default";
import { AppText } from "../../../components/design/AppText";
import { AppButton } from "../../../components/design/AppButton";
import { ComponetView } from "../../../components/design/ComponentView";

function HomeGuestScreen({ navigation }: AuthNavProps<"HomeGuest">) {
  return (
    <DefaultLayout>
      <AppButton
        title="Sign In"
        onPress={() => {
          navigation.navigate("LoginEmail");
        }}
        size="large"
        style={styles.authButtons}
      />
      <AppButton
        title="Sign Up"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
        mode="outlined"
        size="large"
        style={styles.authButtons}
      />
      <ComponetView>
        <AppText>
          <Text>Guest HOME</Text>
        </AppText>
      </ComponetView>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  authButtons: {
    width: '100%'
  }
});

export default HomeGuestScreen;
