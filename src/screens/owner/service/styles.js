import {StyleSheet} from 'react-native';
import {hp} from '../../../assets/styles/variables';

export const servicesStyles = StyleSheet.create({
  h1: {
    fontSize: hp(2.5),
    marginTop: hp(1),
    marginLeft: 16,
    textAlign: 'left',
    lineHeight: hp(3),
  },
  button: {
    borderRadius: 25,
    marginBottom: hp(.8)
  },
});