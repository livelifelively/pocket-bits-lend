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

export default function UserIcon ({style={}}) {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        style
      ]}
    >
      <Svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        <Path d="M6.19505 4.83125C6.29825 4.92619 6.42622 4.97366 6.57895 4.97366C6.73168 4.97366 6.85758 4.92619 6.95665 4.83125C7.05985 4.73218 7.11145 4.6104 7.11145 4.46593C7.11145 4.32145 7.05985 4.20174 6.95665 4.1068C6.85758 4.00773 6.73168 3.95819 6.57895 3.95819C6.42622 3.95819 6.29825 4.00773 6.19505 4.1068C6.09598 4.20174 6.04645 4.32145 6.04645 4.46593C6.04645 4.6104 6.09598 4.73218 6.19505 4.83125Z" fill="#625E59" fill-opacity="0.8"/>
        <Path d="M7.01146 9.16667V7.45153V5.73638H6.1446V9.16667H7.01146Z" fill="#625E59" fill-opacity="0.8"/>
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.8299 6.49069C12.8299 9.943 10.0313 12.7416 6.57895 12.7416C3.12665 12.7416 0.328003 9.943 0.328003 6.49069C0.328003 3.03839 3.12665 0.239746 6.57895 0.239746C10.0313 0.239746 12.8299 3.03839 12.8299 6.49069ZM11.2819 6.49069C11.2819 9.08808 9.17633 11.1937 6.57895 11.1937C3.98157 11.1937 1.87597 9.08808 1.87597 6.49069C1.87597 3.89331 3.98157 1.78771 6.57895 1.78771C9.17633 1.78771 11.2819 3.89331 11.2819 6.49069Z" fill="#625E59" fill-opacity="0.8"/>
      </Svg>

    </View>
  );
}