import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-paper";

interface AppTextInputProps {
  onChangeText: (text: string) => void
  placeholder: string,
  style?: {},
  size?: 'normal' | 'large',
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'ascii-capable' | 'numbers-and-punctuation' | 'url' | 'number-pad' | 'phone-pad' | 'name-phone-pad' | 'decimal-pad' | 'twitter' | 'web-search' | 'visible-password',
  value: string,
  autoCorrect?: boolean,
  maxLength?: number
}


export const AppTextInput: React.FC<AppTextInputProps> = ({onChangeText, placeholder, style={}, size='normal', value='', autoCorrect=false, maxLength, keyboardType='default'}) => {
  return (
    <TextInput
      autoCorrect={autoCorrect}
      value={value}
      style={{...styles.appTextInput, ...style}}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      maxLength={maxLength}
    />
  )
}
const styles = StyleSheet.create({
  appTextInput: {
    padding: 15, backgroundColor: '#f7f7f7', fontSize: 14, borderRadius: 15
  },
  appTextInputWrapper: {}
})