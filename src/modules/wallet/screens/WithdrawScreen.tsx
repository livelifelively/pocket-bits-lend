import React from "react";
import { StyleSheet} from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { WalletNavProps } from "../WalletParamList";
import Topbar from "../../../components/design/Topbar";

const WithdrawScreen = ({navigation}: WalletNavProps<"Withdraw">) => {
  return (
    <DefaultLayout>
      <Topbar
        onPress={() => {
          navigation.goBack();
        }}
        title="Send BTC"
      />
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  component: {
    marginBottom: 15
  }
});

export default WithdrawScreen;
