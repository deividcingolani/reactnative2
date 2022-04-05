import {StyleSheet} from 'react-native';
import {colors, buttons} from '../../assets/styles/variables';

export default StyleSheet.create({
  wrapper: {
    borderRadius: 4,
    marginVertical: buttons.wrapper,
  },
  container: {
    minHeight: buttons.buttonHeight,
    height: 'auto',
    borderRadius: 4,
    backgroundColor: colors.darkIndigo,
    alignItems: 'center',
    justifyContent: 'center',
    padding: buttons.buttonPadding,
  },
  text: {
    color: colors.white,
    fontSize: buttons.buttonText,
    fontWeight: 'bold',
  },
  image: {
    width: buttons.imgWidth,
    height: buttons.buttonHeight,
  },
  wrapperOutlined: {
    borderRadius: 4,
    marginVertical: buttons.wrapper,
    borderWidth: 2,
    borderColor: colors.lightGreen,
  },
  containerOutlined: {
    minHeight: buttons.buttonHeight,
    height: 'auto',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: buttons.buttonPadding,
  },
  textOutlined: {
    color: colors.lightishRed,
    fontSize: buttons.buttonText,
    fontWeight: 'bold',
  },
});
