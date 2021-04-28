import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { capitalize } from 'lodash';

import { globalStyles } from '../../theme/globalStyles';

interface ErrorTextProps {
  error: string;
}

export const ErrorText: React.FC<ErrorTextProps> = ({ error }) => {
  return (
    <View style={styles.errorTextWrapper}>
      <Text style={styles.errorText}>{capitalize(error)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  errorText: {
    ...globalStyles.errorText,
  },
  errorTextWrapper: {
    height: 12,
  },
});
