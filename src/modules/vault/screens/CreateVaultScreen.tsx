import React, { useState, useEffect, useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { DefaultLayout } from '../../../layouts/Default';
import { AppButton } from '../../../components/design/AppButton';

import { WhiteView } from '../../../components/design/WhiteView';
import CryptoIcon from '../../../components/design/CryptoIcon';
import Dropdown from '../../../components/design/Dropdown';
import CryptoInput from '../../../components/business/CryptoInput';
import { walletBalanceForCoinGet } from '../../../api/wallet/requests';
import { APIRequestsContext } from '../../../contexts/APIRequestsContext';
import Logger from '../../../services/logger';
import { createVault } from '../../../redux/actions/VaultActions';
import { resetCreateVaultUI } from '../../../redux/actions/VaultUIActions';

const CreateVaultScreen = ({ navigation, vaults }) => {
  const [activeVaultOption, setActiveVaultOption] = useState(() => vaults.active);
  const [cryptoBalance, setCryptoBalance] = useState(() => 0);
  const { apiRequestHandler } = useContext(APIRequestsContext);
  const dispatch = useDispatch();
  const uiState = useSelector((state) => state.vaultsUI.createVault);

  const resetUI = () => {
    dispatch(resetCreateVaultUI());
  };

  useEffect(() => {
    if (uiState.navigateToSuccess) {
      navigation.navigate('VaultCreated');
      resetUI();
      formik.resetForm();
    }
  }, [uiState]);

  useEffect(() => {
    const onloadAPICalls = async () => {
      try {
        const returnValue = await walletBalanceForCoinGet({ coinId: activeVaultOption.coinId }, apiRequestHandler);
        setCryptoBalance(parseFloat(returnValue.availableBalance));
        Logger.debug('API__WALLET_COIN_BALANCE--SUCCESS', {});
      } catch (e) {
        Logger.error('API__WALLET_COIN_BALANCE--FAILED', e);
      }
    };

    onloadAPICalls();
  }, []);

  const createVaultSchema = Yup.object().shape({
    cryptoAmount: Yup.number().max(cryptoBalance).required(),
  });

  const formik = useFormik({
    initialValues: { cryptoAmount: '' },
    onSubmit: async (values) => {
      dispatch(
        createVault({
          coinId: activeVaultOption.coinId,
          principal: parseFloat(values.cryptoAmount),
          tenure: activeVaultOption.vaultDuration.tenure,
        })
      );
    },
    validationSchema: createVaultSchema,
  });

  return (
    <DefaultLayout
      topBar={{
        showBackButton: true,
        title: 'Create Vault',
        onBackButtonPress: () => {
          navigation.goBack();
        },
      }}
      loading={uiState.loading}
      style={{ paddingHorizontal: 30 }}
    >
      <WhiteView style={styles.createVault}>
        <View style={styles.createVaultInfo}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 60 }}>
            <View style={{ marginRight: 15 }}>
              <CryptoIcon shortName={activeVaultOption.coinId} />
            </View>
            <Text>{activeVaultOption.coinId}</Text>
          </View>
          <View>
            <Text style={styles.yellowText}>{activeVaultOption.interestRatePercent}%</Text>
            <Text>Interest Rate</Text>
          </View>
        </View>

        <View>
          <View>
            <CryptoInput
              textInput={{
                value: formik.values.cryptoAmount,
                onChangeText: formik.handleChange('cryptoAmount'),
                onBlur: formik.handleBlur('cryptoAmount'),
                placeholder: `Enter Amount in ${activeVaultOption.coinId}`,
                error: formik.touched.cryptoAmount ? formik.errors.cryptoAmount : '',
                style: { input: styles.textInput, wrapper: styles.textInputWrapper },
              }}
              holding={{
                value: cryptoBalance,
                coinId: activeVaultOption.coinId,
              }}
              setFieldValue={(val: number) => {
                formik.setFieldValue('cryptoAmount', val.toString());
              }}
            />
          </View>
          <View style={{ marginBottom: 15 }}>
            <Dropdown
              options={vaults.all}
              activeOption={activeVaultOption}
              onMenuItemSelect={setActiveVaultOption}
              keyVal={(val: any) => val.id}
              titleVal={(val: any) => {
                return <Text>{`${val.vaultDuration.value} ${val.vaultDuration.timeUnit}`}</Text>;
              }}
            />
          </View>
          <Text style={styles.instructions}>
            Lock {activeVaultOption.coinId} for {activeVaultOption.vaultDuration.value}{' '}
            {activeVaultOption.vaultDuration.timeUnit} at {activeVaultOption.interestRatePercent}% interest
          </Text>
          <AppButton
            title="Lock in Vault"
            onPress={() => {
              formik.handleSubmit();
            }}
            disabled={uiState.loading}
          />
        </View>
      </WhiteView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  createVault: {
    padding: 30,
    paddingHorizontal: 20,
  },
  createVaultInfo: { flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginBottom: 30 },

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
  inputAmountTextInput: { padding: 20, backgroundColor: '#f7f7f7', fontSize: 14, borderRadius: 15, width: 200 },
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
  textInputWrapper: { marginBottom: 10 },
  textInput: {
    width: '100%',
    backgroundColor: '#F7F7F7',
    padding: 18,
  },

  dropdownMenuWrapper: {
    borderWidth: 1,
    borderColor: '#f5f5f5',
    flexDirection: 'row',
    marginBottom: 15,
    width: 100,
  },
  dropdownMenuAnchor: { padding: 10, width: '100%', flexDirection: 'row', justifyContent: 'space-between' },
  subtext: {
    color: '#625E59',
    fontSize: 10,
    marginTop: 5,
  },
  percentButtonsRow: { flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 },
  instructions: { textAlign: 'center', marginBottom: 25, color: '#625E59' },
  percentButton: {
    marginLeft: 5,
    elevation: 4,
    padding: 5,
    borderColor: '#f5f5f5',
  },
  yellowText: {
    color: '#FFB850',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
});

export default CreateVaultScreen;
