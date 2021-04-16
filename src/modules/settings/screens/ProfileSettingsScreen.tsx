import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { SettingsNavProps } from "../SettingsParamList";
import { AppButton } from "../../../components/design/AppButton";
import Topbar from "../../../components/design/Topbar";

const ProfileSettingsScreen = ({navigation}: SettingsNavProps<"ProfileSettings">) => {
  return (
    <DefaultLayout>
      <Topbar
        onBackButtonPress={() => {
          navigation.goBack();
        }}
        title="Profile Settings"
      />
      <View style={{height: 104, width: 104, backgroundColor: 'black', borderRadius: 104, marginBottom: 50, marginTop: 70}}></View>
      <View style={styles.profileItemsWrapper}>
        <View style={styles.profileItem}>
          <Text style={styles.profileItemTitle}>Name</Text>
          <View style={styles.profileItemValue}>
            <Text>Jon Snow</Text>
            <AppButton
              title="E"
              color="white"
              size="small"
              style={styles.profileItemButton}  
              onPress={() => {}}
            />
          </View>
        </View>
        <View style={styles.profileItem}>
          <Text style={styles.profileItemTitle}>Phone No</Text>
          <View style={styles.profileItemValue}>
            <Text>9856846848</Text>
            <AppButton
              title="E"
              color="white"
              size="small"
              style={styles.profileItemButton}  
              onPress={() => {}}
            />
          </View>
        </View>
        <View style={styles.profileItem}>
          <Text style={styles.profileItemTitle}>Email</Text>
          <View style={styles.profileItemValue}>
            <Text>Jonsnow@gmail.com</Text>
            <AppButton
              title="E"
              color="white"
              size="small"
              style={styles.profileItemButton}  
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  profileItemsWrapper: {width: '100%'},
  profileItemButton: { shadowOpacity: 0.3, shadowRadius: 5, shadowColor: '#a3a3a3', shadowOffset: { height: 0, width: 0 }},
  profileItem: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  profileItemTitle: {fontFamily: 'Poppins-Medium'},
  profileItemValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%'
  }
});

export default ProfileSettingsScreen;
