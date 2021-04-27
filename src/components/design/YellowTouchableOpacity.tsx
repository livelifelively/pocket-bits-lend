import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Theme from '../../theme';

interface YellowTouchableOpacityProps {
  onPress: () => void;
  style?: Record<string, unknown>,
}

export const YellowTouchableOpacity: React.FC<YellowTouchableOpacityProps> = ({children, onPress, style={}}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.touchableOpacity,
        style
      ]}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    shadowColor: '#a3a3a3', // IOS
    shadowOffset: { height: 0, width: 1 }, // IOS
    shadowOpacity: 0.3,
    shadowRadius: 5, //IOS
    backgroundColor: Theme.colors.primary,
    elevation: 2, // Android
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15
  }
});