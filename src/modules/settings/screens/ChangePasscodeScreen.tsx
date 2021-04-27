import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { DefaultLayout } from '../../../layouts/Default';
import { SettingsNavProps } from '../SettingsParamList';
import { AppText } from '../../../components/design/AppText';
import { AppButton } from '../../../components/design/AppButton';
import Topbar from '../../../components/design/Topbar';

const ChangePasscodeScreen = ({navigation}: SettingsNavProps<'ChangePasscode'>) => {
  return (
    <DefaultLayout>
      <Topbar
        onBackButtonPress={() => {
          navigation.goBack();
        }}
        title="Change Passcode"
      />
      <AppText>
        <Text></Text>
      </AppText>
      <AppButton title="Back" onPress={() => {navigation.goBack();}} />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  
});

export default ChangePasscodeScreen;
