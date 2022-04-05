import {StyleSheet} from 'react-native';
import {colors, hp} from '../../../assets/styles/variables';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: hp(9),
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderBottomColor: colors.paleGrey,
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 3,
    alignItems: 'center',
  },
  right: {
    flex: 1,
  },
});
