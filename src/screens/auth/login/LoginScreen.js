import React, {useCallback, useState} from 'react';
import {Image, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {Button, withStyles} from '@ui-kitten/components';

import {Container, Content} from '../../../components';
import LoginForm from './components/LoginForm';

import {LoginBack} from '../../../assets/images';
import {colors, hp} from '../../../assets/styles/variables';
import styles from '../styles';
import { Text } from '@ui-kitten/components';


import {LoginSchema} from '../../../lib/validations';

const LoginScreen = ({eva, navigation}) => {
  const {
    control,
    handleSubmit, 
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: '', 
      sex: '',
      identifier: '',
      cell_phone: '',
      terms: false,
      insurance_code: 2,
    },
  });

  const insets = useSafeAreaInsets();
  // States
  const theme = useStoreState(states => states.common.theme);
  // Actions
  const login = useStoreActions(actions => actions.auth.signing);

  const onSubmit = useCallback(data => login(data), [login]);

  // if user accept terms set terms to true
  const termsCallback = () => {
    navigation.goBack();
    setValue('terms', true);
  };

  // Navigate to Terms screen (PrivacyWebView)
  const onClickTerms = () => {
    navigation.navigate('privacy', {termsCallback});
  };

  return (
    <Container
      customStyles={{
        paddingTop: insets.top,
        backgroundColor: 'transparent',
      }}>
      <Image source={LoginBack} style={styles.backgroundImage} />
      
      <Content customStyles={{justifyContent: 'flex-end', marginBottom: '3%'}}>
        <View >
          <Text style={styles.title} >AUTENTICACIÓN</Text>
          <LoginForm control={control} errors={errors} action={onClickTerms}/>
          <Button
            onPress={handleSubmit(onSubmit)}
            size='giant'
            style={{ borderRadius: 25 }}
            // disabled={!isValid || !isDirty}
            status='warning'
          >
            Ingresar
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default withStyles(LoginScreen, theme => ({
  textColor: theme['text-basic-color'],
  backgroundColor: theme['background-basic-color-1'],
}));
