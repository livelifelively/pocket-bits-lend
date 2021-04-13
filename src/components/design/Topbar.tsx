import React from "react";
import { View, StyleSheet } from "react-native";

const Topbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navbar: {
    height: 55,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export default Topbar;