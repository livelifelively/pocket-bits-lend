import React from "react";
import { StyleSheet} from "react-native";

import { DefaultLayout } from "../../layouts/Default";
import { HomeNavProps } from "./TabsParamList";
import { Wallets } from "../../components/business/Wallets";
import { VaultIntro } from "../../components/business/VaultIntro";
import { ValueCreated } from "../../components/business/ValueCreated";

const HomeScreen = ({navigation}: HomeNavProps<"Home">) => {
  const onWalletPress = (walletDetails:{}) => {
    navigation.navigate("WalletStack", walletDetails);
  }

  return (
    <DefaultLayout>
      <ValueCreated />
      <VaultIntro style={{...styles.components}} />
      <Wallets onPress={onWalletPress} />
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  authButtons: {
    width: '100%'
  },
  authButtonsWrapper: {
    width: '100%'
  },
  components: {
    marginBottom: 15
  }
});

export default HomeScreen;
