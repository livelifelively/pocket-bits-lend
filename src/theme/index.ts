import { configureFonts, DefaultTheme} from 'react-native-paper';

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Poppins-Regular',
      // fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins-Medium',
      // fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Poppins-Light',
      // fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Poppins-Thin',
      // fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Poppins-Regular',
      // fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins-Medium',
      // fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Poppins-Light',
      // fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Poppins-Thin',
      // fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'Poppins-Regular',
      // fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins-Medium',
      // fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Poppins-Light',
      // fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Poppins-Thin',
      // fontWeight: 'normal',
    },
  }
};

console.log(DefaultTheme.colors)

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFB850',
    background: '#FFB850',
    text: '#2B2B2B'
  },
  fonts: configureFonts(fontConfig)
};

export default Theme