
import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { VaultHistoryNavProps } from "../VaultParamList";
import { AppButton } from "../../../components/design/AppButton";
import Topbar from "../../../components/design/Topbar";
import { WhiteView } from "../../../components/design/WhiteView";


const vaultHistory = [
  {
    id: 1,
    currentBalance: 0.123,
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC'
    },
    interestRate: 12,
    duration: '1 month',
    startDate: '19 Mar, 21',
    endDate: '19 Mar, 21',
    withdrawDate: '19 Mar, 21',
  },
  {
    id: 2,
    currentBalance: 0.123,
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC'
    },
    interestRate: 12,
    duration: '1 month',
    startDate: '19 Mar, 21',
    endDate: '19 Mar, 21',
    withdrawDate: '19 Mar, 21',
  },
  {
    id: 3,
    currentBalance: 0.123,
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC'
    },
    interestRate: 12,
    duration: '1 month',
    startDate: '19 Mar, 21',
    endDate: '19 Mar, 21',
    withdrawDate: '19 Mar, 21',
  },
  {
    id: 4,
    currentBalance: 0.123,
    crypto: {
      name: 'Bitcoin',
      shortName: 'BTC'
    },
    interestRate: 12,
    duration: '1 month',
    startDate: '19 Mar, 21',
    endDate: '19 Mar, 21',
    withdrawDate: '19 Mar, 21',
  }
]

const VaultHistoryScreen = ({navigation} : VaultHistoryNavProps<"VaultHistory">) => {
  return (
    <DefaultLayout>
      <Topbar
        onBackButtonPress={() => {
          navigation.goBack();
        }}
        title="Vault History"
      />
      {
        vaultHistory && vaultHistory.map((val) => {
          return (
            <WhiteView style={styles.vaultHistoryListUnit} key={val.id}>
              <View>
                <Text>{val.crypto.shortName}</Text>
                <Text style={styles.subtext}>Token</Text>
              </View>
              <View>
                <Text style={styles.vaultHistoryListUnitBalance}>{`${val.currentBalance} ${val.crypto.shortName}`}</Text>
                <Text style={styles.subtext}>Amount</Text>
              </View>
              <View>
                <Text>{val.startDate}</Text>
                <Text style={styles.subtext}>Start Date</Text>
              </View>
              <View>
                <Text>{val.withdrawDate}</Text>
                <Text style={styles.subtext}>Withdraw Date</Text>
              </View>
              
            </WhiteView>
          )
        })
      }
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  vaultHistoryListUnitBalance: {
    
  },
  subtext: {
    color: '#625E59',
    fontSize: 10,
    marginTop: 5
  },
  vaultHistoryListUnit: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  }
});

export default VaultHistoryScreen;
