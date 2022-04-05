import React from 'react';
import styles from './styles';
import {Image, Pressable, Text, View} from 'react-native';
import {colors} from '../../assets/styles/variables';

const ButtonOutlined = ({
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
      style={[styles.wrapperOutlined, wrapperStyle]}
      onPress={onPress}>
      <View
        style={[
          styles.containerOutlined,
          containerStyle,
          disabled
            ? {backgroundColor: colors.paleGrey}
            : {backgroundColor: 'transparent'},
        ]}>
        {image && <Image style={[styles.image, imageStyle]} source={image} />}
        <Text style={[styles.textOutlined, textStyle]}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default ButtonOutlined;
