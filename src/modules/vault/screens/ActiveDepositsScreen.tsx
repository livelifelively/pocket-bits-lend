import React from "react";
import { StyleSheet} from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { VaultActiveDepositsNavProps } from "../VaultParamList";
import { VaultActiveDeposits } from "../../../components/business/VaultActiveDeposits";
import Topbar from "../../../components/design/Topbar";

const ActiveDepositsScreen = ({navigation} : VaultActiveDepositsNavProps<"ActiveDeposits">) => {
  return (
    <DefaultLayout>
      <Topbar
        onPress={() => {
          navigation.goBack();
        }}
        title="Active Deposits"
      />
      <VaultActiveDeposits showTitle={false} expandableListUnit={true} />
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  component: {
    marginBottom: 30
  }
});

export default ActiveDepositsScreen;
