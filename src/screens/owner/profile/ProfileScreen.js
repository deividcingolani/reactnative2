import React from 'react';
import {View} from 'react-native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {Text, Button, Toggle, Icon} from '@ui-kitten/components';

import {Container, Content} from '../../../components';
import LoginForm from '../../auth/login/components/LoginForm';
import {ProfileSchema} from '../../../lib/validations';
import {hp} from '../../../assets/styles/variables';
import styles from './styles';

const ProfileScreen = () => {
  // State
  const {info} = useStoreState(states => states.auth.user);
  const theme = useStoreState(states => states.common.theme);
  // Actions
  const {toggleTheme} = useStoreActions(actions => actions.common);
  const updateProfile = useStoreActions(actions => actions.auth.updateProfile);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues: {...info},
  });

  const onSubmit = async data => {
    console.log(data);
    await updateProfile(data);
  };

  const handleToggle = async () => {
    await toggleTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Container customStyles={{backgroundColor: 'transparent'}}>
      <Content>
        <Icon name='person' fill='#8F9BB3' style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title} category='h1'>
            {info.full_name}
          </Text>
          <Text style={styles.subTitle} category='p1'>
            Datos del usuario
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View>
            <LoginForm errors={errors} control={control} isProfile={true} />

            <Text
              style={{textAlign: 'center', marginVertical: hp(2)}}
              category='p1'>
              Configuración
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: hp(3),
              }}>
              <Text category='p1'>Tema oscuro</Text>
              <Toggle status='info' checked={theme === 'dark'} onChange={handleToggle} />
            </View>
          </View>

          <Button status='info' style={styles.button} onPress={handleSubmit(onSubmit)} size='giant'>
            Actualizar
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default ProfileScreen;
