import React, { useContext } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { SettingsNavProps } from "../SettingsParamList";
import { AuthContext } from "../../auth/AuthProvider";
import { AppButton } from "../../../components/design/AppButton";
import Topbar from "../../../components/design/Topbar";
import { WhiteView } from "../../../components/design/WhiteView";

const SettingsScreen = ({navigation}: SettingsNavProps<"Settings">) => {
  const {logout} = useContext(AuthContext);

  return (
    <DefaultLayout>
      <Topbar
        onBackButtonPress={() => {
          navigation.goBack();
        }}
        title="Settings"
      />
      <TouchableOpacity style={styles.settingsAction} onPress={() => {navigation.navigate("ProfileSettings")}}>
        <WhiteView style={styles.settingsActionWrapper}>
          <View></View>
          <View>
            <Text style={styles.settingsActionTitle}>Profile</Text>
          </View>
        </WhiteView>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsAction} onPress={() => {navigation.navigate("SecuritySettings")}}>
        <WhiteView style={styles.settingsActionWrapper}>
          <View></View>
          <View>
            <Text style={styles.settingsActionTitle}>Security Settings</Text>
          </View>
        </WhiteView>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsAction} onPress={() => {logout()}}>
        <WhiteView style={styles.settingsActionWrapper}>
          <View></View>
          <View>
            <Text style={styles.settingsActionTitle}>Log Out</Text>
          </View>
        </WhiteView>
      </TouchableOpacity>
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  settingsAction: {
    width: '100%',
    marginBottom: 20,
  },
  settingsActionTitle: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium'
  },
  settingsActionWrapper: {
    padding: 20
  }
});

export default SettingsScreen;
