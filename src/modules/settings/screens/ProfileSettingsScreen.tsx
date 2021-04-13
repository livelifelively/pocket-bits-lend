import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { SettingsNavProps } from "../SettingsParamList";
import { AppButton } from "../../../components/design/AppButton";

const ProfileSettingsScreen = ({navigation}: SettingsNavProps<"ProfileSettings">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Profile Settings</Text>
      <AppButton title="Back" onPress={() => {navigation.goBack()}} />
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ProfileSettingsScreen;
