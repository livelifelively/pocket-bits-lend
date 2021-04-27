import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import {WhiteView} from '../design/WhiteView';
import { VaultBuildingIcon } from '../../icons';

interface VaultIntroProps {
  style?: Record<string, unknown>
}

export const VaultIntro: React.FC<VaultIntroProps> = ({style}) => {
  return (
    <WhiteView style={{...styles.vaultIntroWrapper, ...style}}>
      <View style={styles.vaultInfoIcon}>
        <View style={{marginBottom: 25}}><VaultBuildingIcon /></View>
        <View style={{marginLeft: 10}}><Text>Vault</Text></View>
      </View>
      <View style={styles.vaultInfoTextWrapper}>
        <Text style={styles.vaultInfoText}>
          Use Coinsip Vault to earn additional interest
        </Text>
      </View>
    </WhiteView>
  );
};

const styles = StyleSheet.create({
  vaultIntroWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  vaultInfoTextWrapper: {
    width: '50%',
  },
  vaultInfoIcon: {
    // width: '35%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingLeft: 20
  },
  vaultInfoText: {
    lineHeight: 16,
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    color: '#625E59'
  }
});