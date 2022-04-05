import React, {useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {Button, Text, useTheme} from '@ui-kitten/components';

import {Container, Content} from '../../../components';
import {ServicesSchema} from '../../../lib/validations';
import ServiceForm from './components/ServiceForm';
import Beneficiary from '../../../models/beneficiary';
import {formatDate} from '../../../lib/utils/common';
import { servicesStyles } from './styles';

const ServiceScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(ServicesSchema),
    // defaultValues: {
    //   service_type: '101',
    //   motive: 'Motive test',
    //   symptoms: 'Síntomas test',
    //   origin_address: 'Dirección origen',
    //   destination_address: 'Dirección destino',
    //   desired_date: new Date(),
    //   desired_time: new Date(),
    // },
  });

  useFocusEffect(
    useCallback(() => {
      return () => reset();
    }, [])
  );

  const {info} = useStoreState(states => states.auth.user);
  // Actions
  const requestService = useStoreActions(
    actions => actions.service.requestService,
  );
  const theme = useTheme();

  const onSubmit = useCallback(
    async data => {
      await requestService({
        callback: reset,
        fields: {
          ...data,
          ...new Beneficiary(info),
          desired_date: formatDate(data.desired_date, 'YYYY-MM-DD'),
          desired_time: formatDate(data.desired_time, 'hh:mm a'),
          insurance_code: 2,
        },
      });
    },
    [info, requestService, reset],
  );

  const beneficiary = new Beneficiary(info);

  const submitHandler = data => {
    const fd = new FormData();

    switch(data.service_type) {

      case '103':
        fd.append('birth_date', beneficiary.birth_date);
        fd.append('cell_phone', beneficiary.cell_phone);
        fd.append('email', beneficiary.email);
        fd.append('full_name', beneficiary.full_name);
        fd.append('sex', beneficiary.sex);
        fd.append('identifier', beneficiary.identifier);
        fd.append('patient_id', beneficiary.patient_id);
        fd.append('insurance_code', '2');
    
        fd.append('motive', data.motive);
        fd.append('description', data.description);
        fd.append('service_type', data.service_type);
        console.log(data.file)
        fd.append('file', {
          uri: data.file.file,
          name: data.file.extension,
          type: data.file.type,
        });
    
        console.log(fd);
        requestService({
          callback: reset,
          fields: fd,
        });
        break;

      case '104':
        fd.append('birth_date', beneficiary.birth_date);
        fd.append('cell_phone', beneficiary.cell_phone);
        fd.append('email', beneficiary.email);
        fd.append('full_name', beneficiary.full_name);
        fd.append('sex', beneficiary.sex);
        fd.append('identifier', beneficiary.identifier);
        fd.append('patient_id', beneficiary.patient_id);
        fd.append('insurance_code', '2');
    
        fd.append('motive', data.motive);
        fd.append('description', data.description);
        fd.append('exam_type', data.exam_type);
        fd.append('service_type', data.service_type);
        fd.append('file', {
          uri: data.file.file,
          name: data.file.extension,
          type: data.file.type,
        });
    
        console.log(fd);
        requestService({
          callback: reset,
          fields: fd,
        });
        break;
    
      default:
        onSubmit(data);
        break;
    }
    
  };

  return (
    <Container customStyles={{backgroundColor: theme['background-basic-color-1'], }}>
      <Text style={servicesStyles.h1} category='h1'>Servicios</Text>
      <Content customStyles={{justifyContent: 'space-between'}}>
        <ServiceForm control={control} errors={errors} watch={watch} reset={reset} />
        <Button
          status='info' 
          style={servicesStyles.button}
          size='giant'
          onPress={handleSubmit(submitHandler)}
          // disabled={!isValid || !isDirty}
        >
          Solicitar
        </Button>
      </Content>
    </Container>
  );
};

export default ServiceScreen;
