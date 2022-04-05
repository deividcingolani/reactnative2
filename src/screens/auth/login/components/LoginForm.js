import React from 'react';
import { View } from 'react-native';
import { Linking } from 'react-native';
import { Card, Text, TouchableOpacity } from '@ui-kitten/components';

import {
  InputCheckbox,
  InputField,
  Select,
  InputDateTime,
} from '../../../../components';

import styles from '../../styles';
import { hp } from '../../../../assets/styles/variables';

const LoginForm = (props) => {  //({control, errors, isProfile, action}) action && checked is for checkbox
  const control = props.control;
  const errors = props.errors;
  const isProfile = props.isProfile;
  const action = props.action;

  return (
    <View style={styles.container}>
      <Card>
        <InputField
          name='identifier'
          disabled={isProfile}
          control={control}
          type='number'
          keyboardType='numeric'
          placeholder='Cédula'
          error={errors.identifier}
        />
        <InputField
          name='cell_phone'
          control={control}
          type='number'
          placeholder='Teléfono'
          error={errors.cell_phone}
          keyboardType='numeric'
          maxLength={11}
        />
        <InputField
          name='email'
          control={control}
          placeholder='Email'
          error={errors.email}
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <InputDateTime
          name='birth_date'
          control={control}
          format='DD/MM/YYYY'
          maximumDate={new Date()}
          placeholder='Fecha de nacimiento'
          error={errors.birth_date}
        />
        <Select
          name='sex'
          control={control}
          placeholder='Sexo'
          // containerStyles={{marginBottom: hp(0.5)}}
          // inputContainerStyles={{backgroundColor: colors.white}}
          options={[
            { label: 'Femenino', value: 'false' },
            { label: 'Masculino', value: 'true' },
          ]}
          error={errors.sex}
          backdropStyle={{ backgroundColor: 'red' }}
        />
      </Card>
      {!isProfile && (
        <InputCheckbox
          containerStyle={{ marginTop: hp(2), marginBottom: hp(3) }}
          label='Acepto los '
          action={action}
          actionTitle={<Text style={{ textDecorationLine: 'underline' }}>Términos y Condiciones</Text>}
          name='terms'
          control={control}
          error={errors.terms} />
      )}
    </View>
  );
};

export default LoginForm;
