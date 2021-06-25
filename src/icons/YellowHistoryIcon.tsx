import Svg, { Path } from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function YellowHistoryIcon({ style = {} }) {
  return (
    <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }, style]}>
      <Svg width="26" height="23" viewBox="0 0 26 23" fill="none">
        <Path
          d="M14.1667 0.699585C8.09222 0.699585 3.16667 5.62514 3.16667 11.6996H0.740433C0.290368 11.6996 0.0694302 12.2477 0.393685 12.5598L1.14095 13.2791L4.00313 16.1999C4.19688 16.3976 4.51441 16.4003 4.71145 16.2058L8.41048 12.5555C8.72868 12.2415 8.50632 11.6996 8.05927 11.6996H5.61111C5.61111 6.96958 9.43667 3.14403 14.1667 3.14403C18.8967 3.14403 22.7222 6.96958 22.7222 11.6996C22.7222 16.4296 18.8967 20.2551 14.1667 20.2551C12.2495 20.2551 10.4777 19.6174 9.05458 18.5452C8.51281 18.137 7.73905 18.1272 7.2594 18.6069C6.78108 19.0852 6.77727 19.8668 7.30509 20.2898C9.18547 21.797 11.5644 22.6996 14.1667 22.6996C20.2411 22.6996 25.1667 17.774 25.1667 11.6996C25.1667 5.62514 20.2411 0.699585 14.1667 0.699585ZM13.8611 5.1748C13.3548 5.1748 12.9444 5.58521 12.9444 6.09147V12.4774C12.9444 12.7509 13.0953 13.0021 13.3367 13.1307L17.4781 15.3359C17.9033 15.5623 18.4313 15.4148 18.6776 15.0009C18.9164 14.5995 18.7685 14.08 18.3542 13.8645L14.7778 12.0051V9.40792V6.09147C14.7778 5.58521 14.3674 5.1748 13.8611 5.1748Z"
          fill="#FFB850"
          fill-opacity="0.94"
        />
      </Svg>
    </View>
  );
}