import {StyleSheet} from 'react-native';
import {colors, hp} from '../../../assets/styles/variables';

export const medicationsStyles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    estilo: {
      backgroundColor: 'yellow',
    },
    backgroundImage: { 
      flex: 1, 
      top: 0, 
      left: 0, 
      right: 0, 
      height: hp(90),
      resizeMode: 'stretch', 
      position: 'absolute' 
    },
    h1: {
      marginTop: hp(1),
      fontSize: hp(2.5),
      textAlign: 'left',
      lineHeight: hp(3),
    },
    title: {
      fontSize: hp(1.8),
      textAlign: 'left',
      lineHeight: hp(3),
      marginBottom: hp(3),
    },
    image: {
      // fontSize: hp(10),
      width: hp(10),
      height: hp(10),
      alignSelf: 'center',
      marginVertical: hp(5),
      color: colors.blueGrey,
    },
    iconContainer: {
      width: hp(8),
      height: hp(8),
      borderRadius: hp(7.5),
      backgroundColor: colors.reddishPink,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: hp(5),
    },
    icon: {
      fontSize: hp(3.5),
      color: colors.white,
    },
    button: {
      borderRadius: 25,
      marginBottom: hp(.8)
    }
  });