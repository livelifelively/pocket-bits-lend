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

export default class TetherIcon extends React.Component {
  render() {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' },
        ]}
      >
        <Svg width="17" height="17" viewBox="0 0 17 17" fill="none">
          <Rect x="0.585938" y="0.647095" width="15.6714" height="15.6714" fill="url(#pattern0)"/>
          <Defs>
            <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <Use xlinkHref="#image0" transform="scale(0.0078125)"/>
            </Pattern>
            <Image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
          </Defs>
        </Svg>
      </View>
    );
  }
}