import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Checkbox } from 'react-native-paper';

interface AppCheckboxProps {
  value: boolean;
  onPress: () => void;
}

export const AppCheckbox: React.FC<AppCheckboxProps> = ({ children, value, onPress }) => {
  return (
    <View style={styles.appCheckboxWrapper}>
      <View style={[styles.appCheckbox, { backgroundColor: value ? '#44CBB3' : '#ffffff' }]}>
        <Checkbox status={value ? 'checked' : 'unchecked'} onPress={onPress} color="#fff" />
      </View>
      <View style={{ width: '85%', marginLeft: 10 }}>{children}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  appCheckbox: {
    borderColor: '#44CBB3',
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 5,
  },
  appCheckboxWrapper: {
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
