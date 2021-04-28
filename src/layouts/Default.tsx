import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

interface DefaultLayoutProps {
  style?: Record<string, unknown>;
  backgroundColor?: string;
  paddingHorizontal?: number;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  backgroundColor = styles.container.backgroundColor,
  paddingHorizontal = styles.wrapper.paddingHorizontal,
}) => {
  return (
    <ScrollView style={{ ...styles.container, backgroundColor }}>
      <View style={{ ...styles.wrapper, paddingHorizontal }}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  wrapper: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 65,
  },
});
