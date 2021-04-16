import React from "react";
import { View, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import { AppButton } from "./AppButton";

interface TopBarProps {
  onBackButtonPress?: () => void,
  title: string,
  showBackButton?: boolean,
  onSettingsButtonPress?: () => void
  showSettingsButton?: boolean
}

const Topbar: React.FC<TopBarProps> = ({onBackButtonPress=() => {}, title, showBackButton=true, onSettingsButtonPress=() => {}, showSettingsButton=false}) => {
  return (
    <View style={styles.navBar}>
      <View>
        {
          showBackButton && <AppButton
            title="<"
            onPress={onBackButtonPress}
          />
        }
        <Title>{title}</Title>
      </View>
      <View>
        {
          showSettingsButton && <View>
            <AppButton title="settings" onPress={onSettingsButtonPress} />
          </View>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    width: '100%',
    marginBottom: 25,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  navBarTitle: {
    fontSize: 18
  },
})

export default Topbar;