import React, { useState } from "react";
import { StyleSheet,View } from "react-native";
import { Text } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";

import { DefaultLayout } from "../../../layouts/Default";
import { AuthNavProps } from "../AuthParamList";
import { AppButton } from "../../../components/design/AppButton";
import { AppTextInput } from "../../../components/design/AppTextInput";
import { globalStyles } from "../../../theme/globalStyles";
import { RequestResponse, verifyEmailPost } from "../../../api/requests";

const VerifyEmailScreen = ({ navigation, route }: AuthNavProps<"VerifyEmail">) => {
  const email = 'deviced.in@gmail.com'

  const emailVerificationSchema = Yup.object().shape({
    otp: Yup.string()
          .required()
          .matches(/^[0-9]+$/, "Must be only digits")
          .min(6, 'Must be exactly 6 digits')
          .max(6, 'Must be exactly 6 digits'),
    email: Yup.string().email().required(),
  })

  return (
    <DefaultLayout backgroundColor='#FCFCFC' paddingHorizontal={45}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>logo</Text>
      </View>
      <View style={styles.pageTitleWrapper}>
        <Text style={styles.pageTitle}>Verify Your Email</Text>
      </View>
      <Formik
        initialValues={{
          otp: '',
          email
        }}
        validationSchema={emailVerificationSchema}
        onSubmit={ async (values) => {
          const signedUp: RequestResponse = await verifyEmailPost({
            otp: values.otp,
            email: values.email
          })
          if (signedUp.status === 'SUCCESS') {
            navigation.navigate('SetPasscode')
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched }) => (
          <View style={{width: '100%'}}>
            <AppTextInput
              autoCorrect={false}
              style={{ input: styles.textInput, wrapper: styles.textInputWrapper}}
              value={values.otp}
              onChangeText={handleChange('otp')}
              onBlur={handleBlur('otp')}
              keyboardType="number-pad"
              placeholder="Enter your OTP"
              error={touched.otp ? errors.otp : ''}
              maxLength={6}
            />
            <View style={{marginBottom: 70}}>
              <Text style={globalStyles.subtext}>You’ll receive a 6 digit OTP on your registered email</Text>
            </View>
            <AppButton
              title="Confirm Email"
              onPress={() => {
                handleSubmit()
              }}
              size='normal'
              style={{paddingHorizontal: 50}}
            />
          </View>
        )}
      </Formik>
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  logo: {
    height: 65,
    width: '100%', 
    backgroundColor: '#EBEBEB', 
    marginTop: 100, 
    marginBottom: 120,
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

export default VerifyEmailScreen;
