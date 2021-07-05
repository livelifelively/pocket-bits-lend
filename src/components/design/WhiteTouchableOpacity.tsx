import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

interface WhiteTouchableOpacityProps {
  onPress?: () => void;
  style?: Record<string, unknown>;
}

export const WhiteTouchableOpacity: React.FC<WhiteTouchableOpacityProps> = ({ children, onPress, style = {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={[styles.touchableOpacity, styles.shadow, style]}>
      {children}
    </TouchableOpacity>
  );
};

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: '#a3a3a3',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.5,
    shadowRadius: 0.8 * elevation,
  };
}

const styles = StyleSheet.create({
  touchableOpacity: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  shadow: elevationShadowStyle(4),
});
