import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';

import { DefaultLayout } from '../../../layouts/Default';
import { AuthContext } from '../AuthProvider';
import { AppButton } from '../../../components/design/AppButton';

const SetPasscodeScreen = () => {
  const {login} = useContext(AuthContext);

  return (
    <DefaultLayout>
      <Text style={styles.text}>SetPasscode</Text>
      <AppButton
        title="Confirm"
        onPress={() => {
          // Set passcode: true, SignUp: true, User and go home
          login();
        }}
      />
      <AppButton
        title="Skip"
        onPress={() => {
          // Set passcode: false, SignUp: true, User and go home
          login();
        }}
      />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SetPasscodeScreen;
