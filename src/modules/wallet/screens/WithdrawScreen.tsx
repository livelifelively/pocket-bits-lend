import React from 'react';
import { StyleSheet, View, TouchableOpacity, Clipboard } from 'react-native';
import { Text } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { DefaultLayout } from '../../../layouts/Default';
import { WalletNavProps } from '../WalletParamList';

import { AppTextInput } from '../../../components/design/AppTextInput';
import { PasteIcon } from '../../../icons';
import { AppButton } from '../../../components/design/AppButton';
import CryptoInput from '../../../components/business/CryptoInput';

const WithdrawScreen = ({ navigation, route }: WalletNavProps<'Withdraw'>) => {
  const { walletDetails } = route.params;

  const withdrawCryptoSchema = Yup.object().shape({
    destinationAddress: Yup.string().required(),
    withdrawalAmount: Yup.string().required(),
  });

  return (
    <DefaultLayout
      topBar={{
        showBackButton: true,
        title: 'Send',
        onBackButtonPress: () => {
          navigation.goBack();
        },
      }}
      backgroundColor="#ffffff"
    >
      <View style={{ paddingHorizontal: 15, marginTop: 55 }}>
        <Formik
          initialValues={{
            destinationAddress: '',
            withdrawalAmount: '',
          }}
          validationSchema={withdrawCryptoSchema}
          onSubmit={async () => {
            navigation.goBack();
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
            <View>
              <View style={[styles.inputAmount]}>
                <AppTextInput
                  autoCorrect={false}
                  style={{ input: styles.textInput, wrapper: styles.textInputWrapper }}
                  value={values.destinationAddress}
                  onChangeText={handleChange('destinationAddress')}
                  onBlur={handleBlur('destinationAddress')}
                  placeholder={'Destination Address'}
                  error={touched.destinationAddress ? errors.destinationAddress : ''}
                />
                <View style={[styles.inputAmountText]}>
                  <TouchableOpacity
                    onPress={() => {
                      Clipboard.getString().then((res) => {
                        setFieldValue('destinationAddress', res);
                      });
                    }}
                  >
                    <View style={{ marginBottom: 10, marginTop: 10 }}>
                      <PasteIcon />
                    </View>
                    <View>
                      <Text style={[styles.subtext, { textAlign: 'center' }]}>Paste</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <CryptoInput
                textInput={{
                  value: values.withdrawalAmount,
                  onChangeText: handleChange('withdrawalAmount'),
                  onBlur: handleBlur('withdrawalAmount'),
                  placeholder: `Enter Amount in ${walletDetails.crypto.shortName}`,
                  error: touched.withdrawalAmount ? errors.withdrawalAmount : '',
                  style: { input: styles.textInput, wrapper: styles.textInputWrapper },
                }}
                holding={{
                  value: walletDetails.holding.available.value,
                  coinId: walletDetails.crypto.shortName,
                }}
              />
              <AppButton title="Send" onPress={() => handleSubmit()} />
            </View>
          )}
        </Formik>
      </View>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  component: {
    marginBottom: 15,
  },
  percentButtons: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginLeft: 10,
    borderRadius: 2,
  },
  percentButtonsText: {
    fontSize: 12,
  },
  inputAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginBottom: 15,
  },
  inputAmountText: {
    paddingVertical: 9,
    borderLeftWidth: 1,
    borderLeftColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  subtext: {
    color: '#625E59',
    fontSize: 10,
    marginTop: 5,
  },
  textInputWrapper: {
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: '#F7F7F7',
    padding: 18,
  },
});

export default WithdrawScreen;
