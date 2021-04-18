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

export default function VaultIcon ({style={}}) {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { alignItems: 'center', justifyContent: 'center'},
        style,
      ]}
    >
      <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
        <Path d="M15.8652 13.5408C15.1052 13.5408 14.4252 13.8138 13.9052 14.2414L6.77523 10.4655C6.82523 10.2562 6.86523 10.047 6.86523 9.82859C6.86523 9.61022 6.82523 9.40096 6.77523 9.19169L13.8252 5.45219C14.3652 5.90711 15.0752 6.18917 15.8652 6.18917C17.5252 6.18917 18.8652 4.96996 18.8652 3.45961C18.8652 1.94925 17.5252 0.730042 15.8652 0.730042C14.2052 0.730042 12.8652 1.94925 12.8652 3.45961C12.8652 3.67797 12.9052 3.88724 12.9552 4.0965L5.90523 7.83601C5.36523 7.38108 4.65523 7.09902 3.86523 7.09902C2.20523 7.09902 0.865234 8.31823 0.865234 9.82859C0.865234 11.3389 2.20523 12.5582 3.86523 12.5582C4.65523 12.5582 5.36523 12.2761 5.90523 11.8212L13.0252 15.6062C12.9752 15.7972 12.9452 15.9974 12.9452 16.1976C12.9452 17.6624 14.2552 18.8543 15.8652 18.8543C17.4752 18.8543 18.7852 17.6624 18.7852 16.1976C18.7852 14.7327 17.4752 13.5408 15.8652 13.5408Z" fill="#FFB850"/>
      </Svg> 
    </View>
  );
}
