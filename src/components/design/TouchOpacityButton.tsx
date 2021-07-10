import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

interface TouchOpacityButtonProps {
  onPress: () => void;
  textStyles?: Record<string, unknown>;
  wrapperStyles?: Record<string, unknown>;
  title: string;
  disabled?: boolean;
  isTransparent?: boolean;
}

export const TouchOpacityButton: React.FC<TouchOpacityButtonProps> = ({
  title,
  onPress,
  wrapperStyles,
  isTransparent,
  textStyles,
  disabled = false,
}) => {
  const linearGradientColors = [];

  if (!isTransparent && !disabled) {
    linearGradientColors.push('rgba(255, 223, 92, 1)');
    linearGradientColors.push('rgba(255, 184, 80, 0.94)');
  } else if (disabled && !isTransparent) {
    linearGradientColors.push('#d5d5d5');
    linearGradientColors.push('#a3a3a3');
  } else {
    linearGradientColors.push('transparent');
    linearGradientColors.push('transparent');
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.touchableOpacity, { backgroundColor: 'transparent' }]}
      disabled={disabled}
    >
      <LinearGradient colors={linearGradientColors} style={[styles.buttonWrapper, wrapperStyles]}>
        <Text style={[styles.textStyles, textStyles]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    // textAlign: 'center',
    // width: '100%',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  buttonWrapper: {
    paddingHorizontal: 49,
    paddingVertical: 10,
    borderRadius: 15,
    padding: 15,
  },
  touchableOpacity: {
    shadowColor: 'rgba(215, 215, 215, 0.25)', // IOS
    shadowOffset: { height: 0, width: 2 }, // IOS
    shadowOpacity: 0.3,
    shadowRadius: 5, //IOS
    // backgroundColor: Theme.colors.primary,
    elevation: 2, // Android
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // borderBottomColor: 'red',
  },
});
