import React, {useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {View} from 'react-native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {Button, useTheme, Text} from '@ui-kitten/components';

import {Container, Content} from '../../../components';
import {MedicationsSchema} from '../../../lib/validations';
import Beneficiary from '../../../models/beneficiary';
import MedicationsForm from './components/MedicationsForm';
import { medicationsStyles } from './styles';

const MedicationsScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(MedicationsSchema),
    defaultValues: {
      reason: '',
      symptoms: '',
      prescription: null,
      medical_report: null,
      indications: null,
    },
  });

  useFocusEffect(
    useCallback(() => {
      return () => reset();
    }, [])
  );

  const theme = useTheme();
  const {info} = useStoreState(states => states.auth.user);
  // Actions
  const requestService = useStoreActions(
    actions => actions.service.requestService,
  );

  const beneficiary = new Beneficiary(info);
  

  const onSubmit = data => {
    const fd = new FormData();

    fd.append('birth_date', beneficiary.birth_date);
    fd.append('cell_phone', beneficiary.cell_phone);
    fd.append('email', beneficiary.email);
    fd.append('full_name', beneficiary.full_name);
    fd.append('sex', beneficiary.sex);
    fd.append('identifier', beneficiary.identifier);

    fd.append('patient_id', beneficiary.patient_id);
    fd.append('insurance_code', '2');
    fd.append('main_doctor_name', " ");
    fd.append('main_doctor_phone', " ");

    fd.append('motive', data.motive);
    fd.append('symptoms', data.symptoms);
    fd.append('service_type', '100');
    fd.append('file', {
      uri: data.prescription.file,
      name: data.prescription.extension,
      type: data.prescription.type,
    });
    fd.append('medical_report', {
      uri: data.medical_report.file,
      name: data.medical_report.extension,
      type: data.medical_report.type,
    });

    if (data.indications) {
      fd.append('indications', {
        uri: data.indications.file,
        name: data.indications.extension,
        type: data.indications.type,
      });
    }

    console.log(fd);
    requestService({
      callback: reset,
      fields: fd,
    });
  };


  return (
    <Container customStyles={{backgroundColor: theme['background-basic-color-1'], }}>
      <Content>
        <Text style={medicationsStyles.h1} category='h1'>Medicamentos</Text>
          <View style={medicationsStyles.container}>
            <MedicationsForm control={control} errors={errors} />
          </View>
          <Button status='info' style={medicationsStyles.button} onPress={handleSubmit(onSubmit)} size='giant'>
            Solicitar
          </Button>
      </Content>
    </Container>
  );
};

export default MedicationsScreen;

