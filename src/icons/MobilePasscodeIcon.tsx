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

export default class MobilePasscodeIcon extends React.Component {
  render() {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' },
        ]}
      >
        <Svg width="20" height="27" viewBox="0 0 20 27" fill="none">
          <Path d="M7.20531 9.39445L7.55149 10.0176L6.65142 10.343L7.55149 10.6684L7.19146 11.3123L6.44371 10.6961L6.60295 11.6516H5.88289L6.03521 10.6961L5.29438 11.3262L4.91357 10.6615L5.81365 10.3361L4.9205 10.0245L5.27361 9.38753L6.04213 9.99681L5.88289 9.03442H6.60987L6.44371 9.99681L7.20531 9.39445Z" fill="black"/>
          <Path d="M10.9867 9.39445L11.3329 10.0176L10.4328 10.343L11.3329 10.6684L10.9728 11.3123L10.2251 10.6961L10.3843 11.6516H9.66425L9.81657 10.6961L9.07574 11.3262L8.69494 10.6615L9.59501 10.3361L8.70186 10.0245L9.05497 9.38753L9.82349 9.99681L9.66425 9.03442H10.3912L10.2251 9.99681L10.9867 9.39445Z" fill="black"/>
          <Path d="M14.768 9.39445L15.1142 10.0176L14.2141 10.343L15.1142 10.6684L14.7542 11.3123L14.0064 10.6961L14.1657 11.6516H13.4456L13.5979 10.6961L12.8571 11.3262L12.4763 10.6615L13.3764 10.3361L12.4832 10.0245L12.8363 9.38753L13.6049 9.99681L13.4456 9.03442H14.1726L14.0064 9.99681L14.768 9.39445Z" fill="black"/>
          <Path d="M15.9161 1.89807H3.91611C2.59063 1.89807 1.51611 2.97259 1.51611 4.29807V23.4981C1.51611 24.8236 2.59063 25.8981 3.91611 25.8981H15.9161C17.2416 25.8981 18.3161 24.8236 18.3161 23.4981V4.29807C18.3161 2.97259 17.2416 1.89807 15.9161 1.89807Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <Path d="M12.5965 23.5057H7.23584" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>

      </View>
    );
  }
}