import React from 'react';
import { StyleSheet } from 'react-native';

import { DefaultLayout } from '../../layouts/Default';
import { HomeNavProps } from './TabsParamList';
import { Wallets } from '../../components/business/Wallets';
import { VaultIntro } from '../../components/business/VaultIntro';
import { ValueCreated } from '../../components/business/ValueCreated';
import ErrorBoundary from '../../components/design/ErrorBoundary';
import HorizontalScrollWhiteView from '../../components/design/HorizontalScrollWhiteView';

const HomeScreen = ({ navigation }: HomeNavProps<'Home'>) => {
  const onWalletPress = (walletDetails: Record<string, unknown>) => {
    navigation.navigate('WalletStack', walletDetails);
  };

  return (
    <DefaultLayout
      topBar={{
        showBackButton: false,
        showSettingsButton: true,
        onSettingsButtonPress: () => navigation.navigate('SettingsStack'),
      }}
    >
      <HorizontalScrollWhiteView />
      <ValueCreated />
      <VaultIntro style={{ ...styles.components }} />
      <ErrorBoundary errorScope="COMPONENT">
        <Wallets onPress={onWalletPress} />
      </ErrorBoundary>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  authButtons: {
    width: '100%',
  },
  authButtonsWrapper: {
    width: '100%',
  },
  components: {
    marginBottom: 15,
  },
});

export default HomeScreen;
