import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { VaultCreationNavProps } from "../VaultParamList";
import { AppButton } from "../../../components/design/AppButton";
import Topbar from "../../../components/design/Topbar";

const VaultCreatedScreen = ({navigation} : VaultCreationNavProps<"VaultCreated">) => {
  return (
    <DefaultLayout>
      <Topbar
        onBackButtonPress={() => {
          navigation.goBack();
        }}
        title="Vault Created"
      />
      <View style={styles.successImage}></View>
      <View style={styles.successMessageWrapper}>
        <Text style={styles.successMessage}>Vault Successfully Created</Text>
      </View>
      <AppButton title="Okay" onPress={() => {navigation.goBack()}} />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  successImage: {
    width: 175,
    height: 175,
    marginBottom: 40,
    backgroundColor: '#000'
  },
  successMessageWrapper: {
    marginBottom: 40
  },
  successMessage: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium'
  }
});

export default VaultCreatedScreen;
