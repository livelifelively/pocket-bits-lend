import React, {useContext} from 'react';
import { Text } from 'react-native';

import { AuthContext } from '../AuthProvider';
import { AuthNavProps } from '../AuthParamList';
import { DefaultLayout } from '../../../layouts/Default';
import { AppButton } from '../../../components/design/AppButton';

function LoginPasscodeScreen({ navigation }: AuthNavProps<'LoginPasscode'>) {
  const { login } = useContext(AuthContext);
  return (
    <DefaultLayout>
      <Text>Login with Pass code screen</Text>
      <AppButton
        title="log me in"
        onPress={() => {
          login();
        }}
      />
      <AppButton
        title="go to Sign Up"
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      />
    </DefaultLayout>
  );
}

export default LoginPasscodeScreen;
