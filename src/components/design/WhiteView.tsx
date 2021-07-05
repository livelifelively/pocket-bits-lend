import React from 'react';
import { StyleSheet, View } from 'react-native';

interface WhiteViewProps {
  style?: Record<string, unknown>;
}

export const WhiteView: React.FC<WhiteViewProps> = ({ children, style }) => {
  return <View style={{ ...styles.whiteView, ...styles.shadow, ...style }}>{children}</View>;
};

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: '#a3a3a3',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation,
  };
}

const styles = StyleSheet.create({
  whiteView: {
    backgroundColor: '#ffffff',
    padding: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    width: '100%',
  },
  shadow: elevationShadowStyle(5),
});
