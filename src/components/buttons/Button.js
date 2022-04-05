import React from 'react';
import {Pressable, Text, View, Image} from 'react-native';

import styles from './styles';
import {colors} from '../../assets/styles/variables';

const Button = ({
  title = 'Press me!',
  onPress = () => {},
  wrapperStyle = {},
  containerStyle = {},
  textStyle = {},
  image,
  imageStyle = {},
  primary = true,
  disabled = false,
}) => {
  return (
    <Pressable
      disabled={disabled}
      style={[styles.wrapper, wrapperStyle]}
      onPress={onPress}>
      <View
        style={[
          styles.container,
          {backgroundColor: primary ? colors.lightishRed : colors.darkIndigo},
          containerStyle,
          disabled ? {backgroundColor: colors.paleGrey} : {},
        ]}>
        {image && <Image style={[styles.image, imageStyle]} source={image} />}
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
