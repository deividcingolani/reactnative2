import {StyleSheet} from 'react-native';
import {
  colors,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../../assets/styles/variables';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    flex: 1,
    backgroundColor: colors.white,
  },
  webView: {
    margin: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    flex: 1,
  },
});
