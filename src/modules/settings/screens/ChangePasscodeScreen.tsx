import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { SettingsNavProps } from "../SettingsParamList";
import { AppText } from "../../../components/design/AppText";
import { AppButton } from "../../../components/design/AppButton";

const ChangePasscodeScreen = ({navigation}: SettingsNavProps<"ChangePasscode">) => {
  return (
    <DefaultLayout>
      <AppText>
        <Text style={styles.text}>Change Passcode</Text>
      </AppText>
      <AppButton title="Back" onPress={() => {navigation.goBack()}} />
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ChangePasscodeScreen;
