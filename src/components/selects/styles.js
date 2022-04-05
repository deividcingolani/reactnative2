import {StyleSheet} from 'react-native';
import {colors, hp, SCREEN_WIDTH} from '../../assets/styles/variables';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flexDirection: 'row',
  },
  box: {
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: 4,
    paddingHorizontal: hp(2),
    paddingTop: hp(2),
    paddingBottom: hp(2.5),
  },
  optionText: {
    fontSize: hp(2),
    lineHeight: hp(4.5),
  },
  selectTitle: {
    fontSize: hp(2),
    color: colors.charcoalGrey,
    textAlign: 'center',
  },
  selectTitleContainer: {
    paddingTop: hp(1),
    paddingBottom: hp(2),
    borderBottomWidth: 1,
    borderColor: colors.paleGrey,
  },
  selectStyle: {
    fontWeight: 'bold',
    color: colors.lightishRed,
  },
  scrollView: {
    paddingTop: hp(1),
    minWidth: SCREEN_WIDTH > 320 ? hp(35) : hp(25),
    maxWidth: SCREEN_WIDTH > 320 ? hp(50) : hp(25),
    maxHeight: hp(40),
    height: 'auto',
  },
});
