import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import { Button } from "react-native-paper";

interface AppTextInputProps {
  onChangeText: (text: string) => void
  placeholder: string,
  style?: {},
  size?: 'normal' | 'large',
  keyboardType?: 'number-pad',
  value: string,
  autoCorrect?: boolean,
  maxLength?: number
}


export const AppTextInput: React.FC<AppTextInputProps> = ({onChangeText, placeholder, style={}, size='normal', value='', autoCorrect=false, maxLength}) => {
  return (
    <TextInput
      autoCorrect={autoCorrect}
      value={value}
      style={{padding: 15, backgroundColor: '#f7f7f7', fontSize: 14, borderRadius: 15}}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType="number-pad"
      maxLength={maxLength}
    />
  )
}
const styles = StyleSheet.create({
  appTextInputContainer: {
  },
  appTextInputText: {
    
  }
})