import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface WhiteTouchableOpacityProps {
  onPress?: () => void;
  style?: Record<string, unknown>;
  disabled?: boolean;
}

export const WhiteTouchableOpacity: React.FC<WhiteTouchableOpacityProps> = ({
  children,
  onPress,
  style = {},
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.touchableOpacity, styles.shadow, style]}
      disabled={disabled}
    >
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
