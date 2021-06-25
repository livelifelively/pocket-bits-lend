import Svg, { Path, Rect } from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function VaultIcon({ style = {} }) {
  return (
    <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }, style]}>
      <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <Path d="M17.3174 1.47729H20.9457V5.13074" stroke="#2B2B2B" stroke-linecap="round" />
        <Path d="M4.9502 1.47729H1.3219V5.13074" stroke="#2B2B2B" stroke-linecap="round" />
        <Path d="M4.95703 21.4773L1.32873 21.4773L1.32873 17.8238" stroke="#2B2B2B" stroke-linecap="round" />
        <Path d="M17.3242 21.4773L20.9525 21.4773L20.9525 17.8239" stroke="#2B2B2B" stroke-linecap="round" />
        <Path d="M17.5776 12.4452H18.7329V13.6085" stroke="#2B2B2B" stroke-linecap="round" />
        <Path d="M13.6396 12.4452H12.4844V13.6085" stroke="#2B2B2B" stroke-linecap="round" />
        <Path d="M13.6416 18.8135L12.4863 18.8135L12.4863 17.6502" stroke="#2B2B2B" stroke-linecap="round" />
        <Path d="M17.5796 18.8135L18.7349 18.8135L18.7349 17.6502" stroke="#2B2B2B" stroke-linecap="round" />
        <Rect x="5.4502" y="4.79358" width="5.37051" height="5.37051" stroke="#2B2B2B" />
        <Rect x="12.8643" y="4.79358" width="5.37051" height="5.37051" stroke="#2B2B2B" />
        <Rect x="5.4502" y="12.9429" width="5.37051" height="5.37051" stroke="#2B2B2B" />
        <Path d="M14.231 15.5704H17.0321" stroke="#2B2B2B" stroke-linecap="round" />
      </Svg>
    </View>
  );
}
