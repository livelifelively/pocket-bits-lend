import React, { useState } from "react";
import { Text } from "react-native-paper";

import { StyleSheet, View, TouchableOpacity } from "react-native";
import { AppButton } from "../design/AppButton";
import {WhiteView} from "../design/WhiteView";

type DepositDetails = {
  id: number,
  crypto: {
    shortName: string,
    name: string
  },
  interestRate: number,
  duration: string,
  currentBalance: number,
  startDate: string,
  endDate: string
};

interface VaultActiveDepositsListUnitProps {
  style?: {};
  expanded?: boolean;
  depositDetails: DepositDetails
}

const VaultActiveDepositsListUnitDetails = ({hideDetails, depositDetails}: {hideDetails: () => void, depositDetails: DepositDetails}) => {
  return (
    <View style={styles.vaultActiveDepositsListUnit}>
      <View>
        <View style={styles.upperRow}>
          <View>
            <Text>{depositDetails.crypto.shortName}</Text>
          </View>
          <Text style={styles.subtext}>Token</Text>
        </View>
        <View style={styles.lowerRow}>
          <View>
            <Text style={styles.lowerRowTitle}>{depositDetails.startDate}</Text>
          </View>
          <Text style={styles.subtext}>Start date</Text>
        </View>
      </View>
      <View>
        <View style={styles.upperRow}>
          <View>
            <Text style={styles.upperRowTitle}>{depositDetails.currentBalance}</Text>
          </View>
          <Text style={styles.subtext}>Amount</Text>
        </View>
        <View style={styles.lowerRow}>
          <View>
            <Text style={styles.lowerRowTitle}>{depositDetails.endDate}</Text>
          </View>
          <Text style={styles.subtext}>End date</Text>
        </View>
      </View>
      <View>
        <View style={styles.upperRow}>
          <View>
            <Text style={styles.upperRowTitle}>{`${depositDetails.interestRate}%`}</Text>
          </View>
          <Text style={styles.subtext}>Interest Rate</Text>
        </View>
        <View style={styles.lowerRow}>
          <View>
            <Text style={styles.lowerRowTitle}>{depositDetails.duration}</Text>
          </View>
          <Text style={styles.subtext}>Time Period</Text>
        </View>
      </View>
      <View>
        <AppButton title="X" onPress={hideDetails} />
        <Text>Cancel</Text>
      </View>
    </View>
  )
}

const VaultActiveDepositsListUnitBasic = ({showDetails, depositDetails}: {showDetails: () => void, depositDetails: DepositDetails}) => {
  return (
    <TouchableOpacity style={styles.vaultActiveDepositsListUnit} onPress={showDetails}>
      <View>
        <View>
          <Text>{depositDetails.crypto.shortName}</Text>
        </View>
        <Text style={styles.subtext}>Token</Text>
      </View>
      <View>
        <View>
          <Text>{`${depositDetails.interestRate}%`}</Text>
        </View>
        <Text style={styles.subtext}>Int Rate</Text>
      </View>
      <View>
        <View>
          <Text>{depositDetails.duration}</Text>
        </View>
        <Text style={styles.subtext}>Time</Text>
      </View>
      <View>
        <View>
          <Text style={styles.vaultActiveDepositsListUnitBalance}>{`${depositDetails.currentBalance} ${depositDetails.crypto.shortName}`}</Text>
        </View>
        <Text style={styles.subtext}>Current Balance</Text>
      </View>
    </TouchableOpacity>
  )
}

export const VaultActiveDepositsListUnit: React.FC<VaultActiveDepositsListUnitProps> = ({style, expanded=false, depositDetails}) => {
  const [expansion, setExpansion] = useState(() => expanded)
  
  const showDetails = () => {
    setExpansion(true)
  }
  const hideDetails = () => {
    setExpansion(false)
  }

  return (
    <WhiteView style={styles.vaultActiveDepositsListUnitWrapper}>
      {
        expansion ? 
          <VaultActiveDepositsListUnitDetails hideDetails={hideDetails} depositDetails={depositDetails} /> 
        : <VaultActiveDepositsListUnitBasic showDetails={showDetails} depositDetails={depositDetails}/>
      }
    </WhiteView>
  )
}

const styles = StyleSheet.create({
  vaultActiveDepositsListUnitWrapper: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 10
  },
  componentTitle: {
    marginBottom: 15
  },
  vaultActiveDepositsListUnit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activeDepositsCount: {
    color: '#FFB850',
    fontFamily: 'Poppins-Bold'
  },
  subtext: {
    color: '#625E59',
    fontSize: 10
  },
  vaultActiveDepositsListUnitBalance: {
    fontSize: 16
  },
  lowerRowTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12
  },
  lowerRow: {},
  upperRow: {
    marginBottom: 10
  },
  upperRowTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14
  }
})