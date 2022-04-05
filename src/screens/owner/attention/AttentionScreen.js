import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {View, Image} from 'react-native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {Text, Button, Card, useTheme} from '@ui-kitten/components';

import {Container, Content} from '../../../components';
import {attentionStyles} from './styles';
import {AttentionSchema} from '../../../lib/validations';
import AttentionForm from './components/AttentionForm';
import {AttentionBackground} from '../../../assets/images';

const AttentionScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm({
    resolver: yupResolver(AttentionSchema),
    defaultValues: {
      reason: '',
      symptoms: '',
    },
  });

  useFocusEffect(
    useCallback(() => {
      return () => reset();
    }, [])
  );

  const theme = useTheme();
  // State
  const {info} = useStoreState(states => states.auth.user);
  const connectionLost = useStoreState(states => states.service.connectionLost);
  // Actions
  const createQueue = useStoreActions(actions => actions.service.createQueue);

  const onSubmit = data => {
    reset();
    createQueue({
      ...data,
      connectionLost,
      id_patient: info._id,
      insurance_code: 2,
      redirect: true,
    });
  };

  return (
    <Container customStyles={{backgroundColor: theme['background-basic-color-1'] }}>
      <Text style={attentionStyles.h1} category='h1'>Atención</Text>
      <Image source={AttentionBackground} style={attentionStyles.backgroundImage} />

      <Content wrapperStyles={{backgroundColor: theme['background-basic-color-1'] }}>
        <View style={{justifyContent: 'flex-end', flex: 1, alignContent: 'center'}}>
          <Card>
            <AttentionForm control={control} errors={errors} />
          </Card>
          <Text style={attentionStyles.title} category='p1'>
            Establece conexión inmediata con nuestros médicos a través de
            videollamada
          </Text>
        <Button size='giant' status='info' style={attentionStyles.button} onPress={handleSubmit(onSubmit)}>
          Llamar
        </Button>
        </View>
      </Content>
    </Container>
  );
};

export default AttentionScreen;
