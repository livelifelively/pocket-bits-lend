import React, { createRef, useState } from "react";
import { Text, StyleSheet, View, TextInput, NativeSyntheticEvent, TouchableOpacity } from "react-native";
// import { TextInput } from "react-native-paper";
import { isNaN, isNumber } from "lodash";

import { DefaultLayout } from "../../../layouts/Default";
import { VaultCreationNavProps } from "../VaultParamList";
import { AppButton } from "../../../components/design/AppButton";
import Topbar from "../../../components/design/Topbar";
import { WhiteView } from "../../../components/design/WhiteView";
import { AppTextInput } from "../../../components/design/AppTextInput";
import { Menu } from "react-native-paper";
import { WhiteTouchableOpacity } from "../../../components/design/WhiteTouchableOpacity";
// import { TouchableOpacity } from "react-native-gesture-handler";

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
]

const selectedOption = vaultDepositOptions[0];

const CreateVaultScreen = ({navigation} : VaultCreationNavProps<"CreateVault">) => {
  // from params:
  // vaultOptions=vaultDepositOptions, 
  // selectedOption

  const [activeVaultOption, setActiveVaultOption] = useState(() => selectedOption)
  const [amount, setAmount] = useState<string>('')
  const [menuVisibility, setMenuVisibility] = useState(false);
  
  const onCryptoAmountChange = (text: string) => {
    const inputNumber = parseInt(text)
    if (!isNaN(inputNumber))setAmount(`${inputNumber}`)
    else setAmount('')
  }

  const openMenu = () => setMenuVisibility(true);

  const closeMenu = () => setMenuVisibility(false);

  const selectMenuItem = (val: VaultDepositOption) => {
    setActiveVaultOption(val)
    closeMenu()
  }

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
          <Text>{activeVaultOption.crypto.shortName} Deposit</Text>
          <View>
            <Text style={styles.yellowText}>{activeVaultOption.interestRate}%</Text>
            <Text>Interest Rate</Text>
          </View>
        </View>
        
        <View style={[styles.inputAmount]}>          
          <AppTextInput
            autoCorrect={false}
            value={`${amount}`}
            style={styles.inputAmountTextInput}
            onChangeText={onCryptoAmountChange}
            placeholder={`Enter Amount in ${activeVaultOption.crypto.shortName}`}
            keyboardType="number-pad"
            maxLength={15}
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
                return <Menu.Item onPress={() => {selectMenuItem(val)}} title={val.duration} />;
              })
            }
          </Menu>
        </View>
        <Text style={styles.instructions}>
          Lock {activeVaultOption.crypto.shortName} for {activeVaultOption.duration} at {activeVaultOption.interestRate}% interest
        </Text>
        <AppButton title="Lock in Vault" onPress={() => {navigation.navigate("VaultCreated")}} />
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
