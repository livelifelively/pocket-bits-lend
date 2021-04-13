import React from "react";
import { StyleSheet, View } from "react-native";

interface ComponetViewProps {}

export const ComponetView: React.FC<ComponetViewProps> = ({children}) => {
  return (
    <View style={styles.componentView}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  componentView: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 15,
    // elevation: 0.5
  }
})