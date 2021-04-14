import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

interface DefaultLayoutProps {}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({children}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        {children}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  wrapper: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 65,
  }
});