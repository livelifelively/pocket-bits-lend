import React from 'react';
import { View, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';

import Topbar from '../components/design/Topbar';

interface DefaultLayoutProps {
  style?: Record<string, unknown>;
  backgroundColor?: string;
  paddingHorizontal?: number;
  topBar?: Record<string, unknown>;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  backgroundColor = styles.container.backgroundColor,
  paddingHorizontal = styles.wrapper.paddingHorizontal,
  topBar,
}) => {
  const { height } = useWindowDimensions();
  return (
    <>
      {topBar && <Topbar {...topBar} title={topBar.title || ''} backgroundColor={backgroundColor} />}
      <ScrollView style={{ ...styles.container, backgroundColor }}>
        <View style={{ ...styles.wrapper, paddingHorizontal, minHeight: height }}>{children}</View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
    position: 'relative',
  },
  wrapper: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 35,
  },
});
