import React, { useContext, useState } from 'react';
import { Text } from 'react-native-paper';

import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { WhiteView } from '../design/WhiteView';
import { WhiteTouchableOpacity } from '../design/WhiteTouchableOpacity';
import RedCrossIcon from '../../icons/RedCrossIcon';
import CryptoIcon from '../design/CryptoIcon';
import { formatDateTimeString } from '../../services/date-time';
import { GlobalAlertsContext } from '../../contexts/GlobalAlertsContext';

interface VaultActiveDepositsListUnitProps {
  style?: Record<string, unknown>;
  expanded?: boolean;
  depositDetails: VaultDepositDetails;
  expandableListUnit?: boolean;
}

const VaultActiveDepositsListUnitDetails = ({
  hideDetails,
  depositDetails,
}: {
  hideDetails: () => void;
  depositDetails: VaultDepositDetails;
}) => {
  const { prompt } = useContext(GlobalAlertsContext);

  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.vaultActiveDepositsListUnit} onPress={hideDetails}>
      <View>
        <View style={styles.upperRow}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={{ marginRight: 15 }}>
              <CryptoIcon shortName={depositDetails.coinId} />
            </View>
            <Text>{depositDetails.coinId}</Text>
          </View>
          <Text style={[styles.subtext, { textAlign: 'center' }]}>Token</Text>
        </View>
        <View style={styles.lowerRow}>
          <View>
            <Text style={styles.lowerRowTitle}>{formatDateTimeString(depositDetails.createdAt, 'DD MMM, YY')}</Text>
          </View>
          <Text style={[styles.subtext, { textAlign: 'center' }]}>Start date</Text>
        </View>
      </View>
      <View>
        <View style={styles.upperRow}>
          <View>
            <Text style={styles.upperRowTitle}>{depositDetails.principal}</Text>
          </View>
          <Text style={[styles.subtext, { textAlign: 'center' }]}>Amount</Text>
        </View>
        <View style={styles.lowerRow}>
          <View>
            <Text style={styles.lowerRowTitle}>{formatDateTimeString(depositDetails.maturityDate, 'DD MMM, YY')}</Text>
          </View>
          <Text style={[styles.subtext, { textAlign: 'center' }]}>End date</Text>
        </View>
      </View>
      <View>
        <View style={styles.upperRow}>
          <View>
            <Text style={styles.upperRowTitle}>{`${depositDetails.interestRate}%`}</Text>
          </View>
          <Text style={[styles.subtext, { textAlign: 'center' }]}>Interest Rate</Text>
        </View>
        <View style={styles.lowerRow}>
          <View>
            <Text style={[styles.lowerRowTitle]}>{depositDetails.tenure.label}</Text>
          </View>
          <Text style={[styles.subtext, { textAlign: 'center' }]}>Time Period</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <WhiteTouchableOpacity
          style={{
            backgroundColor: '#ffffff',
            height: 35,
            width: 35,
            borderRadius: 35,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}
          onPress={() => {
            prompt({
              logId: 'CANCEL_VAULT_CONFIRM_REJECT',
              title: 'Do you want to cancel this deposit ?',
              ctaType: 'CONFIRM_REJECT',
              ctas: {
                confirm: { action: () => {}, label: 'Yes, I agree' },
                // eslint-disable-next-line quotes
                reject: { action: () => {}, label: "No, I don't" },
              },
              body: 'NOTE : You’ll only get 3% interest on withdrawal',
            });
          }}
        >
          <RedCrossIcon />
        </WhiteTouchableOpacity>
        <Text style={styles.subtext}>Cancel</Text>
      </View>
    </TouchableOpacity>
  );
};

const VaultActiveDepositsListUnitBasic = ({
  showDetails,
  depositDetails,
}: {
  showDetails: () => void;
  depositDetails: VaultDepositDetails;
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.vaultActiveDepositsListUnit} onPress={showDetails}>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 60 }}>
          <View style={{ marginRight: 15 }}>
            <CryptoIcon shortName={depositDetails.coinId} />
          </View>
          <Text>{depositDetails.coinId}</Text>
        </View>
        <Text style={[styles.subtext, { textAlign: 'center' }]}>Token</Text>
      </View>
      <View>
        <View>
          <Text style={{ textAlign: 'center' }}>{`${depositDetails.interestRate}%`}</Text>
        </View>
        <Text style={[styles.subtext, { textAlign: 'center' }]}>Int Rate</Text>
      </View>
      <View>
        <View>
          <Text style={{ textAlign: 'center' }}>{depositDetails.tenure.label}</Text>
        </View>
        <Text style={[styles.subtext, { textAlign: 'center' }]}>Time</Text>
      </View>
      <View>
        <View>
          <Text style={[styles.vaultActiveDepositsListUnitBalance, { textAlign: 'center' }]}>
            {`${depositDetails.principal} ${depositDetails.coinId}`}
          </Text>
        </View>
        <Text style={[styles.subtext, { textAlign: 'center' }]}>Current Balance</Text>
      </View>
    </TouchableOpacity>
  );
};

export const VaultActiveDepositsListUnit: React.FC<VaultActiveDepositsListUnitProps> = ({
  expanded = false,
  depositDetails,
  expandableListUnit = false,
}) => {
  const [expansion, setExpansion] = useState(() => expanded);

  const showDetails = () => {
    setExpansion(true);
  };
  const hideDetails = () => {
    setExpansion(false);
  };

  return (
    <WhiteView style={styles.vaultActiveDepositsListUnitWrapper}>
      {expansion ? (
        <VaultActiveDepositsListUnitDetails hideDetails={hideDetails} depositDetails={depositDetails} />
      ) : (
        <VaultActiveDepositsListUnitBasic
          showDetails={
            expandableListUnit
              ? showDetails
              : () => {
                  return null;
                }
          }
          depositDetails={depositDetails}
        />
      )}
    </WhiteView>
  );
};

const styles = StyleSheet.create({
  vaultActiveDepositsListUnitWrapper: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 10,
  },
  componentTitle: {
    marginBottom: 15,
  },
  vaultActiveDepositsListUnit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  activeDepositsCount: {
    color: '#FFB850',
    fontFamily: 'Poppins-Bold',
  },
  subtext: {
    color: '#625E59',
    fontSize: 10,
  },
  vaultActiveDepositsListUnitBalance: {
    fontSize: 16,
  },
  lowerRowTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    textAlign: 'center',
  },
  lowerRow: {},
  upperRow: {
    marginBottom: 10,
  },
  upperRowTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    textAlign: 'center',
  },
});
