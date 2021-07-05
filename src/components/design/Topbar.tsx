import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Title } from 'react-native-paper';
import { BackIcon } from '../../icons';
import { WhiteTouchableOpacity } from './WhiteTouchableOpacity';

interface TopBarProps {
  onBackButtonPress?: () => void;
  title: string;
  showBackButton?: boolean;
  onSettingsButtonPress?: () => void;
  showSettingsButton?: boolean;
}

const Topbar: React.FC<TopBarProps> = ({
  onBackButtonPress,
  title,
  showBackButton = true,
  onSettingsButtonPress,
  showSettingsButton = false,
}) => {
  return (
    <View style={styles.navBar}>
      <View style={styles.pageTitleAndBack}>
        {showBackButton && (
          <WhiteTouchableOpacity
            onPress={onBackButtonPress}
            style={{
              backgroundColor: '#ffffff',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 10,
              paddingVertical: 15,
              paddingHorizontal: 15,
              borderRadius: 6,
              marginRight: 20,
            }}
          >
            <View style={{ width: 7, height: 10 }}>
              <BackIcon />
            </View>
          </WhiteTouchableOpacity>
        )}
        <Title>{title}</Title>
      </View>
      <View>
        {showSettingsButton && (
          <View>
            <WhiteTouchableOpacity
              onPress={onSettingsButtonPress}
              style={{
                width: 48,
                height: 48,
                borderRadius: 48,
              }}
            >
              <View>
                <Image source={require('../../../assets/images/avatar-male.png')} />
              </View>
            </WhiteTouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navBarTitle: {
    fontSize: 18,
  },
  pageTitleAndBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Topbar;
