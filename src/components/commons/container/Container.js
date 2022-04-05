import React from 'react';
import {View} from 'react-native';

import styles from './styles';

const Container = ({children, customStyles = {}}) => {
  return (
    <View style={[styles.container, customStyles]}>
      {children}
    </View>
  );
};

export default Container;
