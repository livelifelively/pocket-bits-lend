import React from "react";
import { View, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import { AppButton } from "./AppButton";

interface TopBarProps {
  onPress: () => void,
  title: string
}

const Topbar: React.FC<TopBarProps> = ({onPress, title}) => {
  return (
    <View style={styles.navBar}>
      <AppButton
        title="<"
        onPress={onPress}
      />
      <Title>{title}</Title>
    </View>
  )
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    width: '100%',
    marginBottom: 25
  },
  navBarTitle: {
    fontSize: 18
  },
})

export default Topbar;