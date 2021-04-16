import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";

import Theme from "../../theme";

interface AppButtonProps {
  onPress: () => void
  title: string,
  mode?: 'text' | 'outlined' | 'contained',
  style?: {},
  size?: 'normal' | 'large' | 'small',
  color?: string
}


export const AppButton: React.FC<AppButtonProps> = ({onPress, title, mode='contained', style={}, size='normal', color=Theme.colors.primary}) => {
  let {buttonStyle, textStyle} = extendStylesByParams(
    {size, mode, color}, 
    {...styles.appButtonContainer, ...style},
    {...styles.appButtonText}
  )

  return (
    <Button style={buttonStyle} color={color} onPress={() => {console.log(Theme.colors); onPress()}} mode={mode}>
      <Text style={textStyle}>{title}</Text>
    </Button>
  )
}

const extendStylesByParams = ({mode='', size='', color=''}, baseButtonStyle={}, baseTextStyle={}) => {
  const buttonModeStyle = extendStylesByMode({mode, color})
  const {buttonSizeStyle, textSizeStyle} = extendStylesBySize(size)
  return {
    buttonStyle: {...baseButtonStyle, ...buttonModeStyle, ...buttonSizeStyle},
    textStyle: {...baseTextStyle, ...textSizeStyle}
  }
}

const extendStylesByMode = ({mode='', color=''}) => {
  let buttonStyle = {}

  switch (mode) {
    case 'outlined':
      buttonStyle = {
        ...buttonStyle,
        borderColor: color,
      }
      break;

    default:
      break;
  }

  return buttonStyle
}

const extendStylesBySize = (size='') => {
  let textStyle = {}
  let buttonStyle = {}

  switch (size) {
    case 'large':
      textStyle = {
        fontSize: 18,
        lineHeight: 38,
      }
      break;
    case 'small':
      textStyle = {
        fontSize: 12,
        lineHeight: 16,
      }
      break;
    default:
      break;
  }
  return {
    buttonSizeStyle: buttonStyle,
    textSizeStyle: textStyle
  }
}

const styles = StyleSheet.create({
  appButtonContainer: {
    borderRadius: 10,
    borderWidth: 2,
    margin: 5,
    elevation: 0
  },
  appButtonText: {
    fontSize: 18,
    lineHeight: 24,
    color: Theme.colors.text,
    fontWeight: "600",
    alignSelf: "center",
    textTransform: "capitalize",
  }
})