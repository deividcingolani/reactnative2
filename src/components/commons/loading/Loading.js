import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import styles from './styles';
import {colors} from '../../../assets/styles/variables';

const Loading = ({info}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <ActivityIndicator size='large' color={colors.blueMercantil} />
        <Text style={styles.text}>
          {info || 'Estamos procesando su solicitud'}
        </Text>
      </View>
    </View>
  );
};

export default Loading;
