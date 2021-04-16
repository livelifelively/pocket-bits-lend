import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Title } from "react-native-paper";

import {WhiteView} from "../design/WhiteView";
import { YellowView } from "../design/YellowView";

interface VaultFixedDepositsProps {
  style?: {},
  onPress: () => void
}

const vaults = [
  {
    id: 1,
    interestRatePercent: 10,
    vaultDuration: {
      value: 1,
      timeUnit: 'month'
    }
  },
  {
    id: 2,
    interestRatePercent: 13,
    vaultDuration: {
      value: 3,
      timeUnit: 'months'
    }
  },
  {
    id: 3,
    interestRatePercent: 16,
    vaultDuration: {
      value: 6,
      timeUnit: 'months'
    }
  },
  {
    id: 4,
    interestRatePercent: 23,
    vaultDuration: {
      value: 1,
      timeUnit: 'year'
    }
  }
]

export const VaultFixedDeposits: React.FC<VaultFixedDepositsProps> = ({children, style, onPress}) => {
  return (
    <View style={{...styles.vaultFixedDepositsWrapper, ...style}}>
      <Title style={styles.title}>Fixed Deposits</Title>
      <View style={styles.vaultFixedDepositsList}>
        {
          vaults && vaults.map((val) => {
            return (
              <WhiteView style={styles.vaultFixedDeposit} key={val.id}>
                <TouchableOpacity onPress={onPress}>
                  <Text style={styles.vaultFixedDepositInterestRate}>{val.interestRatePercent}%</Text>
                  <Text style={styles.subtext}>Interest Rate</Text>
                  <YellowView style={styles.vaultFixedDepositDuration}>
                    <Text>{`${val.vaultDuration.value} ${val.vaultDuration.timeUnit}`} vault</Text>
                  </YellowView>
                </TouchableOpacity>
              </WhiteView>
            )
          })
        }
      </View>
      <View>
        <Text style={styles.subtext}>+ view more</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 25
  },
  vaultFixedDepositsWrapper: {
    width: '100%'
  },
  vaultFixedDepositsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vaultFixedDeposit: {
    width: '48%',
    marginBottom: 10
  },
  vaultFixedDepositInterestRate: {
    color: '#FFB850',
    fontSize: 24,
    fontFamily: 'Poppins-Bold'
  },
  subtext: {
    color: '#625E59',
    fontSize: 12
  },
  vaultFixedDepositDuration: {
    marginTop: 15
  }
})