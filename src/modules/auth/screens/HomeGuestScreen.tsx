import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AuthNavProps } from '../AuthParamList';
import { DefaultLayout } from '../../../layouts/Default';
import { AppButton } from '../../../components/design/AppButton';
import { VaultIntro } from '../../../components/business/VaultIntro';
import { Wallets } from '../../../components/business/Wallets';


function HomeGuestScreen({ navigation }: AuthNavProps<'HomeGuest'>) {
  return (
    <DefaultLayout>
      <View style={{...styles.authButtonsWrapper, ...styles.components}}>
        <AppButton
          title="Sign In"
          onPress={() => {
            navigation.navigate('LoginEmail');
          }}
          size="large"
          style={styles.authButtons}
        />
        <AppButton
          title="Sign Up"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          mode="outlined"
          size="large"
          style={styles.authButtons}
        />
      </View>
      <VaultIntro style={{...styles.components}} />
      <Wallets onPress={() => {}} />
    </DefaultLayout>
  );
}

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

export default HomeGuestScreen;
