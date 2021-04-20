import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function TelegramIcon ({style={}}) {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { alignItems: 'center', justifyContent: 'center'},
        style,
      ]}
    >
      <Svg enable-background="new 0 0 24 24" height="36" viewBox="0 0 24 24" width="36">
        <Circle cx="12" cy="12" fill="#039be5" r="12"/>
          <Path d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z" fill="#fff"/>
      </Svg>
    </View>
  );
}
