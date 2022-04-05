import {StyleSheet} from 'react-native';
import {colors, hp} from '../../../assets/styles/variables';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.blueMercantil,
  },
  titleContainer: {
    paddingVertical: hp(1),
  },
  title: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: hp(1.7),
    textAlign: 'center',
  },
  image: {
    width: hp(12),
    height: hp(12),
    alignSelf: 'center',
  },
  button: { 
    borderRadius: 25 
  },
});
