import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface YellowViewProps {
  style?: Record<string, unknown>;
}

export const YellowView: React.FC<YellowViewProps> = ({ children, style }) => {
  const linearGradientColors = [];
  linearGradientColors.push('rgba(255, 223, 92, 1)');
  linearGradientColors.push('rgba(255, 184, 80, 0.94)');

  return (
    <LinearGradient colors={linearGradientColors} style={[styles.yellowView, style]}>
      <View>{children}</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  yellowView: {
    // backgroundColor: '#FFB850',
    padding: 15,
    borderRadius: 15,
    width: '100%',
  },
});
