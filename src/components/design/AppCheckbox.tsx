import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Checkbox } from 'react-native-paper';

interface AppCheckboxProps {
  value: boolean,
  onPress: () => void
}


export const AppCheckbox: React.FC<AppCheckboxProps> = ({children, value, onPress}) => {
  return (
    <View style={{width: '100%', justifyContent: 'flex-start', flexDirection: 'row'}}>
      <View style={{backgroundColor: value ? '#44CBB3' : '#ffffff', borderColor: '#44CBB3', borderWidth: 1, justifyContent: 'center', borderRadius: 5}}>
        <Checkbox
          status={value ? 'checked' : 'unchecked'}
          onPress={onPress}
          color="#fff"
        />
      </View>
      <View style={{width: '85%', marginLeft: 10}}>
        {children}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  appCheckbox: {
    padding: 15, backgroundColor: '#f7f7f7', fontSize: 14, borderRadius: 15
  },
  appCheckboxWrapper: {}
});