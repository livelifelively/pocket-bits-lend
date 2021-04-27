import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { AuthNavProps } from '../AuthParamList';
import { DefaultLayout } from '../../../layouts/Default';
import { AppButton } from '../../../components/design/AppButton';
import { AppTextInput } from '../../../components/design/AppTextInput';
import { AppCheckbox } from '../../../components/design/AppCheckbox';
import { globalStyles } from '../../../theme/globalStyles';
import { signupPost, RequestResponse } from '../../../api/requests';

function SignupScreen({ navigation, route }: AuthNavProps<'SignUp'>) {
  const signupSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    termsAndConditions: Yup.boolean().required().test('terms-conditions', 'Please accept the terms and conditions', (value) => value === true)
  });

  return (
    <DefaultLayout backgroundColor='#FCFCFC' paddingHorizontal={45}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>logo</Text>
      </View>
      <View style={styles.pageTitleWrapper}>
        <Text style={styles.pageTitle}>Sign Up</Text>
      </View>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          termsAndConditions: false
        }}
        validationSchema={signupSchema}
        onSubmit={ async (values) => {
          try {
            const signedUp:any = await signupPost({
              email: values.email,
              password: values.password,
              // #TODO
              referralCode: ''
            });
            console.log('+++++++++++++++++++++++++++++++++++++++');
            console.log('+++++++++++++++++++++++++++++++++++++++');
            console.log('+++++++++++++++++++++++++++++++++++++++');
            
            console.log('SUBMIT_FORM', signedUp);
            if (signedUp.status === 'SUCCESS') {
              navigation.navigate('VerifyEmail');
            }
          } catch(e) {
            console.log('FLAG SIGNUP PAGE');
            // console.log(e)
            console.log('=======================================');
            console.log('=======================================');
            console.log('=======================================');
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched }) => (
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
            <AppTextInput
              autoCorrect={false}
              style={{ input: styles.textInput, wrapper: styles.textInputWrapper}}
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              placeholder="Confirm Password"
              autoCapitalize="none"
              secureTextEntry={true}
              error={touched.confirmPassword ? errors.confirmPassword : ''}
            />
            <View>
              <AppCheckbox
                onPress={() => {
                  setFieldValue('termsAndConditions', !values.termsAndConditions);
                }}
                value={values.termsAndConditions}
              >
                <Text>I’ve read and I agree to all the terms and conditions.</Text>
              </AppCheckbox>
              <Text style={globalStyles.errorText}>{errors.termsAndConditions}</Text>
            </View>
            <AppButton
              title="Sign Up"
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
        <Text style={{fontFamily: 'Poppins-Bold'}}>Have an account, </Text>
        <AppButton
          title="Sign In"
          size="small"
          mode="text"
          color="#363eff"
          onPress={() => {
            navigation.navigate('LoginEmail');
          }}
        />
      </View>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 65,
    width: '100%', 
    backgroundColor: '#EBEBEB', 
    marginTop: 100, 
    marginBottom: 65, 
    alignItems: 'center', 
    flexDirection: 'column', 
    justifyContent: 'center'
  },
  logoText: {
    textAlign: 'center', 
    fontSize: 24
  },
  pageTitle: {
    fontSize: 24, 
    fontFamily: 'Poppins-Medium'
  },
  pageTitleWrapper: {marginBottom: 40},
  textInputWrapper: {marginBottom: 10},
  textInput: {
    width: '100%', 
    backgroundColor: '#F7F7F7', 
    padding: 18
  }
});

export default SignupScreen;