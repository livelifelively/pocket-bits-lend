import React from 'react';

import { View, ScrollView } from 'react-native';
import { WhiteView } from './WhiteView';

const HorizontalScrollWhiteView = () => {
  return (
    <View style={{ height: 120, marginHorizontal: -25 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <WhiteView
          style={{ height: 88, width: 130, marginVertical: 15, marginHorizontal: 8, marginLeft: 25 }}
        ></WhiteView>
        <WhiteView style={{ height: 88, width: 130, marginVertical: 15, marginHorizontal: 8 }}></WhiteView>
        <WhiteView style={{ height: 88, width: 130, marginVertical: 15, marginHorizontal: 8 }}></WhiteView>
        <WhiteView style={{ height: 88, width: 130, marginVertical: 15, marginHorizontal: 8 }}></WhiteView>
        <WhiteView
          style={{ height: 88, width: 130, marginVertical: 15, marginHorizontal: 8, marginRight: 25 }}
        ></WhiteView>
      </ScrollView>
    </View>
  );
};

export default HorizontalScrollWhiteView;
