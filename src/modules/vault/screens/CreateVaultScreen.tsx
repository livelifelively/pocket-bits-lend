import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Menu } from 'react-native-paper';

import { DefaultLayout } from '../../../layouts/Default';
import { VaultCreationNavProps } from '../VaultParamList';
import { AppButton } from '../../../components/design/AppButton';
import Topbar from '../../../components/design/Topbar';
import { WhiteView } from '../../../components/design/WhiteView';
import { AppTextInput } from '../../../components/design/AppTextInput';
import { WhiteTouchableOpacity } from '../../../components/design/WhiteTouchableOpacity';
import { BitcoinIcon, EtheriumIcon, TetherIcon } from '../../../icons';

type VaultDepositOption = {
  id: number,
  interestRate: number,
  duration: string,
  crypto: {
    name: string,
    shortName: string
  }
}

const availableFundsInCrypto = 1.41;

const vaultDepositOptions = [
  {
    id: 1,
    interestRate: 10,
    duration: '1 month',
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC'
    }
  },
  {
    id: 2,
    interestRate: 12,
    duration: '3 months',
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC'
    }
  },
  {
    id: 3,
    interestRate: 16,
    duration: '6 months',
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC'
    }
  },
  {
    id: 4,
    interestRate: 20,
    duration: '1 year',
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC'
    }
  }
];

const cryotpyIcon = (shortName: string) => {
  switch (shortName) {
  case 'USDT':
    return <TetherIcon />;

  case 'BTC':
    return <BitcoinIcon />;

  case 'ETH':
    return <EtheriumIcon />;
  
  default:
    break;
  }
};

const selectedOption = vaultDepositOptions[0];

const CreateVaultScreen = ({navigation} : VaultCreationNavProps<'CreateVault'>) => {
  const [activeVaultOption, setActiveVaultOption] = useState(() => selectedOption);
  const [menuVisibility, setMenuVisibility] = useState(false);
  
  const openMenu = () => setMenuVisibility(true);

  const closeMenu = () => setMenuVisibility(false);

  const selectMenuItem = (val: VaultDepositOption) => {
    setActiveVaultOption(val);
    closeMenu();
  };

  const twoFactorAuthenticationSchema = Yup.object().shape({
    verificationCode: Yup.string()
      .required()
      .matches(/^[0-9]+$/, 'Must be only digits')
  });

  return (
    <DefaultLayout style={{paddingHorizontal: 30}}>
      <Topbar
        onBackButtonPress={() => {
          navigation.goBack();
        }}
        title="Create Vault"
      />
      <WhiteView style={styles.createVault}>
        <View style={styles.createVaultInfo}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 60}}>
            <View style={{marginRight: 15}}>
              {cryotpyIcon(activeVaultOption.crypto.shortName)}
            </View>
            <Text>{activeVaultOption.crypto.shortName}</Text>
          </View>
          <View>
            <Text style={styles.yellowText}>{activeVaultOption.interestRate}%</Text>
            <Text>Interest Rate</Text>
          </View>
        </View>
        
        <Formik
          initialValues={{
            cryptoAmount: '',
          }}
          validationSchema={twoFactorAuthenticationSchema}
          onSubmit={ async () => {
            navigation.navigate('VaultCreated');
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View>
              <View style={[styles.inputAmount]}>          
                <AppTextInput
                  autoCorrect={false}
                  style={{ input: styles.textInput, wrapper: styles.textInputWrapper}}
                  value={values.cryptoAmount}
                  onChangeText={handleChange('cryptoAmount')}
                  onBlur={handleBlur('cryptoAmount')}
                  keyboardType="number-pad"
                  maxLength={15}
                  placeholder={`Enter Amount in ${activeVaultOption.crypto.shortName}`}
                  error={touched.cryptoAmount ? errors.cryptoAmount : ''}
                />
                <View style={[styles.inputAmountText]}>
                  <Text>{availableFundsInCrypto} {activeVaultOption.crypto.shortName}</Text>
                  <Text style={[styles.subtext, {textAlign: 'center'}]}>Available</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row',justifyContent: 'flex-end', marginBottom: 20, alignItems: 'center'}}>
                <WhiteTouchableOpacity style={styles.percentButtons}>
                  <Text style={styles.percentButtonsText}>25%</Text>
                </WhiteTouchableOpacity>
                <WhiteTouchableOpacity style={styles.percentButtons}>
                  <Text style={styles.percentButtonsText}>50%</Text>
                </WhiteTouchableOpacity>
                <WhiteTouchableOpacity style={styles.percentButtons}>
                  <Text style={styles.percentButtonsText}>75%</Text>
                </WhiteTouchableOpacity>
                <WhiteTouchableOpacity style={styles.percentButtons}>
                  <Text style={styles.percentButtonsText}>100%</Text>
                </WhiteTouchableOpacity>
              </View>
              <View
                style={styles.dropdownMenuWrapper}
              >
                <Menu
                  visible={menuVisibility}
                  onDismiss={closeMenu}
                  anchor={
                    <TouchableOpacity onPress={openMenu} style={styles.dropdownMenuAnchor}>
                      <Text>{activeVaultOption.duration}</Text>
                      <Text>v</Text>
                    </TouchableOpacity>
                  }
                >
                  {
                    vaultDepositOptions && vaultDepositOptions.map((val) => {
                      return <Menu.Item onPress={() => {selectMenuItem(val);}} key={val.id} title={val.duration} />;
                    })
                  }
                </Menu>
              </View>
              <Text style={styles.instructions}>
                Lock {activeVaultOption.crypto.shortName} for {activeVaultOption.duration} at {activeVaultOption.interestRate}% interest
              </Text>
              <AppButton title="Lock in Vault" onPress={() => {handleSubmit();}} />
            </View>
          )}
        </Formik>
      </WhiteView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  createVault: {
    padding: 30
  },
  createVaultInfo: {flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginBottom: 30},


  percentButtons: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginLeft: 10,
    borderRadius: 2
  },
  percentButtonsText: {
    fontSize: 12
  },
  inputAmount: {flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: '#f7f7f7', justifyContent: 'center', borderRadius: 15, marginBottom: 15,},
  inputAmountTextInput: {padding: 20, backgroundColor: '#f7f7f7', fontSize: 14, borderRadius: 15, width: 200,},
  inputAmountText: {paddingVertical: 10, borderLeftWidth: 1, borderLeftColor: '#e5e5e5', alignItems: 'center', justifyContent: 'center', width: 80},
  textInputWrapper: {marginBottom: 10},
  textInput: {
    width: '100%', 
    backgroundColor: '#F7F7F7', 
    padding: 18
  },
  
  dropdownMenuWrapper: {
    borderWidth: 1,
    borderColor: '#f5f5f5',
    flexDirection: 'row',
    marginBottom: 15,
    width: 100
  },
  dropdownMenuAnchor: {padding: 10, width: '100%', flexDirection: 'row', justifyContent: 'space-between'},
  subtext: {
    color: '#625E59',
    fontSize: 10,
    marginTop: 5
  },
  percentButtonsRow: {flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10},
  instructions: {textAlign: 'center', marginBottom: 25, color: '#625E59'},
  percentButton: {
    marginLeft: 5,
    elevation: 4,
    padding: 5,
    borderColor: '#f5f5f5'
  },
  yellowText: {
    color: '#FFB850',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center'
  }
});

export default CreateVaultScreen;
