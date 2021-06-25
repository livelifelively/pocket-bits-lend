import Svg, { Path, G } from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function VaultIcon({ style = {} }) {
  return (
    <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }, style]}>
      <Svg width="15" height="13" viewBox="0 0 512 424">
        {/* <title>x</title> */}
        <G id="Layer_2" data-name="Layer 2">
          <G id="Layer_1-2" data-name="Layer 1">
            <Path
              fill="#23292f"
              d="M437,0h74L357,152.48c-55.77,55.19-146.19,55.19-202,0L.94,0H75L192,115.83a91.11,91.11,0,0,0,127.91,0Z"
            />
            <Path
              fill="#23292f"
              d="M74.05,424H0L155,270.58c55.77-55.19,146.19-55.19,202,0L512,424H438L320,307.23a91.11,91.11,0,0,0-127.91,0Z"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
}
