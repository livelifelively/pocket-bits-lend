import React from "react";
import { StyleSheet, View } from "react-native";

import { DefaultLayout } from "../../layouts/Default";
import { VaultNavProps } from "./TabsParamList";
import { AppButton } from "../../components/design/AppButton";
import { ValueCreated } from "../../components/business/ValueCreated";
import { VaultFixedDeposits } from "../../components/business/VaultFixedDeposits";
import { VaultActiveDeposits } from "../../components/business/VaultActiveDeposits";
import Topbar from "../../components/design/Topbar";

const VaultScreen = ({navigation}: VaultNavProps<"VaultCreationStack">) => {
  return (
    <DefaultLayout>
      <Topbar
        onPress={() => {
          navigation.goBack();
        }}
        title="Vault"
      />
      <ValueCreated />
      <View style={styles.vaultActions}>
        <AppButton title="Active Deposits" onPress={() => {navigation.navigate("VaultActiveDepositsStack")}} />
        <AppButton title="History" onPress={() => { navigation.navigate("VaultHistoryStack")}} />
      </View>
      <VaultFixedDeposits style={{marginBottom: 25}} onPress={(data={}) => {navigation.navigate("VaultCreationStack", data)}} />
      <VaultActiveDeposits />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  vaultActions: {
    flexDirection: 'row',
    marginBottom: 40
  }
});

export default VaultScreen;
