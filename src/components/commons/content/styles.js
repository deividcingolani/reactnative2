import {StyleSheet} from 'react-native';
import { hp } from '../../../assets/styles/variables';

export default StyleSheet.create({
  layout: { 
    backgroundColor: 'transparent', 
    flex: 1, 
    paddingHorizontal: hp(2),
    paddingVertical: hp(1)
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
});
