import React, {useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { AuthContext } from '../AuthProvider';
import { AuthNavProps } from '../AuthParamList';
import { DefaultLayout } from '../../../layouts/Default';
import { AppButton } from '../../../components/design/AppButton';
import { AppTextInput } from '../../../components/design/AppTextInput';
import { RequestResponse, signinPost } from '../../../api/requests';
import { YellowTouchableOpacity } from '../../../components/design/YellowTouchableOpacity';

function LoginEmailScreen({ navigation }: AuthNavProps<'LoginEmail'>) {
  const { login } = useContext(AuthContext);

  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required()
  });

  return (
    <DefaultLayout backgroundColor='#FCFCFC' paddingHorizontal={45}>
      <View style={{height: 65, width: '100%', backgroundColor: '#EBEBEB', marginTop: 100, marginBottom: 65, alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 24}}>logo</Text>
      </View>
      <View style={{marginBottom: 40}}>
        <Text style={{fontSize: 24, fontFamily: 'Poppins-Medium'}}>Sign In</Text>
      </View>
      <Formik
        initialValues={{
          email: '',
          password: '',
          termsAndConditions: false
        }}
        validationSchema={loginSchema}
        onSubmit={ async (values) => {
          const signedUp: RequestResponse = await signinPost({
            email: values.email,
            password: values.password,
            // #TODO
            verificationCode: ''
          });
          if (signedUp.status === 'SUCCESS') {
            // handle cases for wrong email password combination
            login();
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={{width: '100%'}}>
            <AppTextInput
              autoCorrect={false}
              style={{ input: styles.textInput, wrapper: styles.textInputWrapper}}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              error={touched.email ? errors.email : ''}
            />
            <AppTextInput
              autoCorrect={false}
              style={{ input: styles.textInput, wrapper: styles.textInputWrapper}}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              error={touched.password ? errors.password : ''}
            />
            <YellowTouchableOpacity onPress={() => {}}>
              <Text style={{textAlign: 'center', width: '100%', fontSize: 14, fontFamily: 'Poppins-Medium'}}>Sign In</Text>
            </YellowTouchableOpacity>
            <AppButton
              title="Sign In"
              onPress={() => {
                handleSubmit();
              }}
              size='normal'
              style={{paddingHorizontal: 50}}
            />
          </View>
        )}
      </Formik>
      <View>
        <Text style={{fontFamily: 'Poppins-Bold'}}>Don’t have an account, </Text>
        <AppButton
          title="Sign Up"
          size="small"
          mode="text"
          color="#363eff"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  textInputWrapper: {marginBottom: 10},
  textInput: {
    width: '100%', 
    backgroundColor: '#F7F7F7', 
    padding: 18
  }
});

export default LoginEmailScreen;
