import {StyleSheet} from 'react-native';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  hp,
} from '../../../assets/styles/variables';

export default StyleSheet.create({
  wrapper: {
    // flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    position: 'absolute',
    elevation: 2,
    // width: SCREEN_WIDTH,
    // height: SCREEN_HEIGHT,
    zIndex: 100,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    marginTop: hp(2),
    fontSize: hp(2),
  },
});
