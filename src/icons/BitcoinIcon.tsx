import Svg, { Path } from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function BitcoinIcon() {
  return (
    <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }]}>
      <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
        <Path
          d="M15.4951 10.369C14.4485 14.6294 10.1964 17.2223 5.99772 16.1598C1.80075 15.0976 -0.754213 10.7823 0.292947 6.52215C1.33913 2.26125 5.5912 -0.331828 9.78866 0.730354C13.9871 1.79254 16.5418 6.10837 15.4951 10.369Z"
          fill="#F7931A"
        />
        <Path
          d="M11.3491 7.31222C11.5051 6.25402 10.7112 5.68515 9.62557 5.30566L9.97773 3.87218L9.11791 3.65472L8.77506 5.05042C8.54903 4.99326 8.31687 4.93934 8.08618 4.8859L8.43148 3.48101L7.57215 3.26355L7.21975 4.69652C7.03265 4.65328 6.84898 4.61054 6.6707 4.56556L6.67168 4.56108L5.48592 4.26062L5.25719 5.19257C5.25719 5.19257 5.89513 5.34094 5.88166 5.35014C6.2299 5.43836 6.29283 5.67222 6.2823 5.85762L5.88117 7.49066C5.90517 7.49687 5.93627 7.50582 5.97056 7.51974C5.94191 7.51253 5.91129 7.50457 5.8797 7.49687L5.31742 9.78452C5.27481 9.89188 5.16682 10.0529 4.9234 9.99178C4.93197 10.0045 4.29843 9.83348 4.29843 9.83348L3.87158 10.8323L4.9905 11.1153C5.19865 11.1683 5.40265 11.2237 5.60346 11.2759L5.24764 12.7258L6.10647 12.9432L6.45887 11.5088C6.69348 11.5734 6.92123 11.633 7.14408 11.6892L6.79291 13.1169L7.65272 13.3344L8.00855 11.8873C9.47472 12.1688 10.5772 12.0553 11.0413 10.7095C11.4152 9.62596 11.0227 9.00093 10.2513 8.59335C10.8131 8.46189 11.2362 8.08687 11.3491 7.31222ZM9.3846 10.1078C9.11889 11.1914 7.32113 10.6056 6.73829 10.4588L7.21045 8.53793C7.79329 8.68555 9.66231 8.97782 9.3846 10.1078ZM9.65055 7.29656C9.40811 8.2822 7.91181 7.78143 7.42644 7.65866L7.85451 5.91653C8.33989 6.0393 9.90303 6.26843 9.65055 7.29656Z"
          fill="white"
        />
      </Svg>
    </View>
  );
}
