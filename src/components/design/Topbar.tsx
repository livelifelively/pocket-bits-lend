import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Appbar, Title } from 'react-native-paper';
import { BackIcon } from '../../icons';
import { WhiteTouchableOpacity } from './WhiteTouchableOpacity';

interface TopBarProps {
  onBackButtonPress?: () => void;
  title: string;
  showBackButton?: boolean;
  onSettingsButtonPress?: () => void;
  showSettingsButton?: boolean;
  style?: Record<string, unknown>;
  backgroundColor: string;
}

const Topbar: React.FC<TopBarProps> = ({
  onBackButtonPress,
  title,
  showBackButton = true,
  onSettingsButtonPress,
  showSettingsButton = false,
  style = {},
  backgroundColor,
}) => {
  return (
    <Appbar.Header style={{ backgroundColor, height: 60 }}>
      <View style={[styles.navBar, style]}>
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
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 5,
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
