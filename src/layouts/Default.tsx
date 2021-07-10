import React, { useContext } from 'react';
import { useEffect } from 'react';
import { View, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';

import Topbar from '../components/design/Topbar';
import { LoadingContext } from '../contexts/LoadingContext';

interface DefaultLayoutProps {
  style?: Record<string, unknown>;
  backgroundColor?: string;
  paddingHorizontal?: number;
  topBar?: Record<string, unknown>;
  loading?: boolean;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  backgroundColor = styles.container.backgroundColor,
  paddingHorizontal = styles.wrapper.paddingHorizontal,
  topBar,
  loading = false,
}) => {
  const { showLoading } = useContext(LoadingContext);
  const { height } = useWindowDimensions();

  useEffect(() => {
    showLoading(loading);
  }, [loading]);

  return (
    <>
      {topBar && <Topbar {...topBar} title={topBar.title || ''} loading={loading} backgroundColor={backgroundColor} />}
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
    paddingTop: 15,
  },
});
