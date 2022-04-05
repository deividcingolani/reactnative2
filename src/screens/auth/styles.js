import {StyleSheet} from 'react-native';
import {colors, hp} from '../../assets/styles/variables';

export default StyleSheet.create({
  container: {
    // backgroundColor: colors.white,
    backgroundColor: 'transparent',
    borderRadius: 4,
  },
  title: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: hp(1.5),
  },
  backgroundImage: { 
    flex: 1, 
    top: 0, 
    bottom: 0, 
    left: 0, 
    right: 0, 
    resizeMode: 'stretch', 
    position: 'absolute' 
  },
  card: {
    borderWidth: 1,
    borderColor: colors.paleGrey,
    borderRadius: 4,
    padding: hp(3),
  },
});
