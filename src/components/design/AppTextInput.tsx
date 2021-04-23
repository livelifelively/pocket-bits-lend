import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Text } from "react-native-paper";
import { globalStyles } from "../../theme/globalStyles";
import { ErrorText } from "./ErrorText";

interface AppTextInputProps {
  onChangeText: (text: string) => void
  placeholder: string,
  style?: {
    input: {} | undefined,
    wrapper: {} | undefined
  },
  size?: 'normal' | 'large',
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'ascii-capable' | 'numbers-and-punctuation' | 'url' | 'number-pad' | 'phone-pad' | 'name-phone-pad' | 'decimal-pad' | 'twitter' | 'web-search' | 'visible-password',
  value: string,
  autoCorrect?: boolean,
  maxLength?: number,
  placeholderTextColor?: string,
  autoCapitalize?: "sentences" | "none" | "words" | "characters" | undefined,
  secureTextEntry?: boolean,
  onBlur?: (e:any) => void,
  error?: string
}


export const AppTextInput: React.FC<AppTextInputProps> = ({
  onChangeText, placeholder, style={}, size='normal', value='', autoCorrect=false, maxLength, keyboardType='default', placeholderTextColor='#625E59',
  autoCapitalize='sentences', secureTextEntry=false, onBlur=(e) => {}, error=''
}) => {
  let errorStyle = error.length > 0 ? {borderColor: globalStyles.errorText.color} : {}

  return (
    <View style={[styles.appTextInputWrapper, style.wrapper]}>
      <TextInput
        autoCorrect={autoCorrect}
        value={value}
        style={[styles.appTextInput, style.input, errorStyle]}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        maxLength={maxLength}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
      />
      <ErrorText error={error} />
    </View>
  )
}
const styles = StyleSheet.create({
  appTextInput: {
    padding: 15, backgroundColor: '#f7f7f7', fontSize: 14, borderRadius: 15, borderWidth: 1, borderColor: '#f7f7f7'
  },
  appTextInputWrapper: {},
})