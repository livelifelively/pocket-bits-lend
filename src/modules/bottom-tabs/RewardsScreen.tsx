import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ValueCreated } from '../../components/business/ValueCreated';
import { Title, Text } from 'react-native-paper';

import { DefaultLayout } from '../../layouts/Default';
import { WhiteView } from '../../components/design/WhiteView';
import { YellowCopyIcon } from '../../icons';

const RewardScreen = () => {
  return (
    <DefaultLayout backgroundColor="#ffffff" topBar={{ showBackButton: false, title: 'Reward Screen' }}>
      <ValueCreated />
      <View style={{ backgroundColor: '#F3F3F3', height: 140, width: '100%', marginBottom: 20 }}></View>
      <View style={{ marginBottom: 25 }}>
        <Title>Invite Your Friends and Earn</Title>
        <Text>Invite your friends and earn some percentage of interest that they make on every deposits.</Text>
      </View>
      <View
        style={{
          marginBottom: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#FAFAFA',
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: 15,
          borderRadius: 15,
          paddingVertical: 20,
        }}
      >
        <View>
          <Text style={{ color: '#625E59', fontSize: 12 }}>Pcys2cyl10</Text>
        </View>
        <TouchableOpacity onPress={() => {}} style={{ marginRight: 10 }}>
          <YellowCopyIcon />
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 25, width: '100%' }}>
        <Title style={{ marginBottom: 10 }}>Your Referrals</Title>
        <WhiteView style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, padding: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <View>
              <Text style={{ fontSize: 10 }}>S*************@gmail.com</Text>
            </View>
            <View>
              <Text style={{ fontSize: 14, fontFamily: 'Poppins-Bold' }}>$0.004</Text>
            </View>
            <View>
              <Text style={{ fontSize: 10 }}>19 Mar, 21</Text>
            </View>
          </View>
        </WhiteView>
        <WhiteView style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, padding: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <View>
              <Text style={{ fontSize: 10 }}>D*************@gmail.com</Text>
            </View>
            <View>
              <Text style={{ fontSize: 14, fontFamily: 'Poppins-Bold' }}>$0.013</Text>
            </View>
            <View>
              <Text style={{ fontSize: 10 }}>19 Mar, 21</Text>
            </View>
          </View>
        </WhiteView>
      </View>
    </DefaultLayout>
  );
};

export default RewardScreen;
