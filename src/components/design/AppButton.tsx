import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';

import Theme from '../../theme';

interface AppButtonProps {
  onPress: () => void;
  title: string;
  mode?: 'text' | 'outlined' | 'contained';
  style?: Record<string, unknown>;
  size?: 'normal' | 'large' | 'small';
  color?: string;
  icon?: React.ReactNode;
}

export const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  title,
  mode = 'contained',
  style = {},
  size = 'normal',
  color = Theme.colors.primary,
}) => {
  const { buttonStyle, textStyle } = extendStylesByParams(
    { size, mode, color },
    { ...styles.appButtonContainer, ...style },
    { ...styles.appButtonText }
  );

  return (
    <Button
      style={buttonStyle}
      color={color}
      onPress={() => {
        onPress();
      }}
      mode={mode}
    >
      {/* {icon ? {icon} : ''} */}
      <Text style={textStyle}>{title}</Text>
    </Button>
  );
};

const extendStylesByParams = ({ mode = '', size = '', color = '' }, baseButtonStyle = {}, baseTextStyle = {}) => {
  const { buttonModeStyle, textModeStyle } = extendStylesByMode({ mode, color });
  const { buttonSizeStyle, textSizeStyle } = extendStylesBySize(size);
  return {
    buttonStyle: { ...baseButtonStyle, ...buttonModeStyle, ...buttonSizeStyle },
    textStyle: { ...baseTextStyle, ...textModeStyle, ...textSizeStyle },
  };
};

const extendStylesByMode = ({ mode = '', color = '' }) => {
  let buttonModeStyle = {};
  let textModeStyle = {};

  switch (mode) {
    case 'outlined':
      buttonModeStyle = {
        ...buttonModeStyle,
        borderColor: color,
      };
      break;

    case 'text':
      textModeStyle = {
        ...textModeStyle,
        color: color,
        padding: 0,
      };
      buttonModeStyle = {
        ...buttonModeStyle,
        padding: 0,
      };

      break;

    default:
      break;
  }

  return { buttonModeStyle, textModeStyle };
};

const extendStylesBySize = (size = '') => {
  let textStyle = {};
  const buttonStyle = {};

  switch (size) {
    case 'large':
      textStyle = {
        fontSize: 18,
        lineHeight: 38,
      };
      break;
    case 'small':
      textStyle = {
        fontSize: 12,
        lineHeight: 16,
      };
      break;
    case 'normal':
      textStyle = {
        fontSize: 14,
        lineHeight: 16,
      };
      break;
    default:
      break;
  }
  return {
    buttonSizeStyle: buttonStyle,
    textSizeStyle: textStyle,
  };
};

const styles = StyleSheet.create({
  appButtonContainer: {
    borderRadius: 10,
    borderWidth: 2,
    margin: 5,
    elevation: 0,
  },
  appButtonText: {
    fontSize: 18,
    lineHeight: 24,
    color: Theme.colors.text,
    fontWeight: '600',
    alignSelf: 'center',
    textTransform: 'capitalize',
  },
});
