import React, { useState } from 'react';
import { Text } from 'react-native-paper';

import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { WhiteView } from '../design/WhiteView';
import { BitcoinIcon, EtheriumIcon, TetherIcon } from '../../icons';
import { WhiteTouchableOpacity } from '../design/WhiteTouchableOpacity';
import RedCrossIcon from '../../icons/RedCrossIcon';

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
  style?: Record<string, unknown>;
  expanded?: boolean;
  depositDetails: DepositDetails;
  expandableListUnit?: boolean;
}

const VaultActiveDepositsListUnitDetails = ({hideDetails, depositDetails}: {hideDetails: () => void, depositDetails: DepositDetails}) => {
  return (
    <View style={styles.vaultActiveDepositsListUnit}>
      <View>
        <View style={styles.upperRow}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
            <View style={{marginRight: 15}}>
              {cryotpyIcon(depositDetails.crypto.shortName)}
            </View>
            <Text>{depositDetails.crypto.shortName}</Text>
          </View>
          <Text style={[styles.subtext, {textAlign: 'center'}]}>Token</Text>
        </View>
        <View style={styles.lowerRow}>
          <View>
            <Text style={styles.lowerRowTitle}>{depositDetails.startDate}</Text>
          </View>
          <Text style={[styles.subtext, {textAlign: 'center'}]}>Start date</Text>
        </View>
      </View>
      <View>
        <View style={styles.upperRow}>
          <View>
            <Text style={styles.upperRowTitle}>{depositDetails.currentBalance}</Text>
          </View>
          <Text style={[styles.subtext, {textAlign: 'center'}]}>Amount</Text>
        </View>
        <View style={styles.lowerRow}>
          <View>
            <Text style={styles.lowerRowTitle}>{depositDetails.endDate}</Text>
          </View>
          <Text style={[styles.subtext, {textAlign: 'center'}]}>End date</Text>
        </View>
      </View>
      <View>
        <View style={styles.upperRow}>
          <View>
            <Text style={styles.upperRowTitle}>{`${depositDetails.interestRate}%`}</Text>
          </View>
          <Text style={[styles.subtext, {textAlign: 'center'}]}>Interest Rate</Text>
        </View>
        <View style={styles.lowerRow}>
          <View>
            <Text style={[styles.lowerRowTitle]}>{depositDetails.duration}</Text>
          </View>
          <Text style={[styles.subtext, {textAlign: 'center'}]}>Time Period</Text>
        </View>
      </View>
      <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <WhiteTouchableOpacity
          style={{backgroundColor: '#ffffff', height: 35, width: 35, borderRadius: 35, alignItems: 'center', justifyContent: 'center', marginBottom: 10}}
          onPress={() => {return null;}}
        >
          <RedCrossIcon />
        </WhiteTouchableOpacity>
        <Text style={styles.subtext}>Cancel</Text>
      </View>
    </View>
  );
};

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

const VaultActiveDepositsListUnitBasic = ({showDetails, depositDetails}: {showDetails: () => void, depositDetails: DepositDetails}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.vaultActiveDepositsListUnit} onPress={showDetails}>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 60}}>
          <View style={{marginRight: 15}}>
            {cryotpyIcon(depositDetails.crypto.shortName)}
          </View>
          <Text>{depositDetails.crypto.shortName}</Text>
        </View>
        <Text style={[styles.subtext, {textAlign: 'center'}]}>Token</Text>
      </View>
      <View>
        <View>
          <Text style={{textAlign: 'center'}}>{`${depositDetails.interestRate}%`}</Text>
        </View>
        <Text style={[styles.subtext, {textAlign: 'center'}]}>Int Rate</Text>
      </View>
      <View>
        <View>
          <Text style={{textAlign: 'center'}}>
            {depositDetails.duration}
          </Text>
        </View>
        <Text style={[styles.subtext, {textAlign: 'center'}]}>Time</Text>
      </View>
      <View>
        <View>
          <Text style={[styles.vaultActiveDepositsListUnitBalance, {textAlign: 'center'}]}>
            {`${depositDetails.currentBalance} ${depositDetails.crypto.shortName}`}
          </Text>
        </View>
        <Text style={[styles.subtext, {textAlign: 'center'}]}>Current Balance</Text>
      </View>
    </TouchableOpacity>
  );
};

export const VaultActiveDepositsListUnit: React.FC<VaultActiveDepositsListUnitProps> = ({expanded=false, depositDetails, expandableListUnit=false}) => {
  const [expansion, setExpansion] = useState(() => expanded);
  
  const showDetails = () => {
    setExpansion(true);
  };
  const hideDetails = () => {
    setExpansion(false);
  };

  return (
    <WhiteView style={styles.vaultActiveDepositsListUnitWrapper}>
      {
        expansion ? 
          <VaultActiveDepositsListUnitDetails hideDetails={hideDetails} depositDetails={depositDetails} /> 
          : <VaultActiveDepositsListUnitBasic showDetails={expandableListUnit ? showDetails : () => {return null;}} depositDetails={depositDetails}/>
      }
    </WhiteView>
  );
};

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
    paddingHorizontal: 20
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
    fontSize: 12,
    textAlign: 'center'
  },
  lowerRow: {},
  upperRow: {
    marginBottom: 10
  },
  upperRowTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    textAlign: 'center'
  }
});