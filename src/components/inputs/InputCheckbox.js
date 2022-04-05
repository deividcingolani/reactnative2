import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {CheckBox} from '@ui-kitten/components';

import {Controller} from 'react-hook-form';
import {Error} from '../index';
import { hp } from '../../assets/styles/variables';

const InputCheckbox = memo(
  ({containerStyle = {}, label, error, name, control, action, actionTitle}) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, value}}) => (
          <View style={containerStyle}>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <CheckBox
                checked={value}
                onChange={onChange}
                status={error ? 'warning' : 'basic'}>
                {label}
              </CheckBox>
              {action && (
                <TouchableOpacity style={{position:'relative', left:hp(-1),fontSize:4}} onPress={action}>{actionTitle}</TouchableOpacity>
              )}
              <Error error={error} />
            </View>
          </View>
        )}
      />
    );
  },
);

export default InputCheckbox;
