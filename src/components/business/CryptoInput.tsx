import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppTextInput } from '../design/AppTextInput';
import { Text } from 'react-native-paper';
import { WhiteTouchableOpacity } from '../design/WhiteTouchableOpacity';

const CryptoInput = ({ textInput, holding }) => {
  return (
    <View>
      <View style={[styles.inputAmount]}>
        <AppTextInput
          autoCorrect={false}
          style={textInput.style}
          value={textInput.value}
          onChangeText={textInput.onChangeText}
          onBlur={textInput.onBlur}
          placeholder={textInput.placeholder}
          error={textInput.error}
          keyboardType="numeric"
          maxLength={15}
        />
        <View style={[styles.inputAmountText]}>
          <Text style={{ fontFamily: 'Poppins-Bold' }}>
            {holding.value} {holding.coinId}
          </Text>
          <Text style={[styles.subtext, { textAlign: 'center' }]}>Available</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 20, alignItems: 'center' }}>
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
    </View>
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

export default CryptoInput;
