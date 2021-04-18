{/*  */}
{/* */}

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

export default function PasteIcon ({style={}}) {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { alignItems: 'center', justifyContent: 'center'},
        style,
      ]}
    >
      <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
        <Path d="M13.5515 1.92275H10.2075C9.87146 0.994754 8.99146 0.322754 7.95146 0.322754C6.91146 0.322754 6.03146 0.994754 5.69546 1.92275H2.35146C1.47146 1.92275 0.751465 2.64275 0.751465 3.52275V14.7228C0.751465 15.6028 1.47146 16.3228 2.35146 16.3228H13.5515C14.4315 16.3228 15.1515 15.6028 15.1515 14.7228V3.52275C15.1515 2.64275 14.4315 1.92275 13.5515 1.92275ZM7.95146 1.92275C8.39146 1.92275 8.75146 2.28275 8.75146 2.72275C8.75146 3.16275 8.39146 3.52275 7.95146 3.52275C7.51146 3.52275 7.15146 3.16275 7.15146 2.72275C7.15146 2.28275 7.51146 1.92275 7.95146 1.92275ZM9.55146 13.1228H3.95146V11.5228H9.55146V13.1228ZM11.9515 9.92275H3.95146V8.32275H11.9515V9.92275ZM11.9515 6.72275H3.95146V5.12275H11.9515V6.72275Z" fill="#625E59" fill-opacity="0.6"/>
      </Svg>
    </View>
  );
}


