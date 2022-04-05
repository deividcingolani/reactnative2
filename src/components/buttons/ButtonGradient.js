import React from 'react';
import { Image, Pressable, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import {colors} from '../../assets/styles';

const ButtonGradient = ({
  title = 'Press me!',
  colorsButton = [colors.coral, colors.reddishPink],
  disabledColors = [colors.paleGrey, colors.paleGrey],
  disabled = false,
  wrapperStyle = {},
  containerStyle = {backgroundColor: colors.darkIndigo},
  textStyle = {},
  image,
  imageStyle = {},
  onPress = () => {},
}) => {
  return (
    <Pressable style={[styles.wrapper, wrapperStyle]} onPress={onPress}>
      <LinearGradient
        end={{x: 1, y: 0}}
        start={{x: 0, y: 0}}
        colors={disabled ? disabledColors : colorsButton}
        style={[styles.container, containerStyle]}>
        {image && <Image style={[styles.image, imageStyle]} source={image} />}
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default ButtonGradient;
