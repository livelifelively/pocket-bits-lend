import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {WhiteView} from "../design/WhiteView";

interface VaultIntroProps {
  style?: {}
}

export const VaultIntro: React.FC<VaultIntroProps> = ({children, style}) => {
  return (
    <WhiteView style={{...styles.vaultIntroWrapper, ...style}}>
      <View style={styles.vaultInfoIcon}></View>
      <View style={styles.vaultInfoTextWrapper}>
        <Text style={styles.vaultInfoText}>
          Use Coinsip Vault to earn additional interest
        </Text>
      </View>
    </WhiteView>
  )
}

const styles = StyleSheet.create({
  vaultIntroWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  vaultInfoTextWrapper: {
    width: '40%',
  },
  vaultInfoIcon: {
    width: '35%',
    textAlign: 'center',
  },
  vaultInfoText: {
    lineHeight: 16,
    fontSize: 12,
    fontWeight: '600'
  }
})