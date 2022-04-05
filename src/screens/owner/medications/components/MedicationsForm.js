import React from 'react';
import {View} from 'react-native';
import {InputField} from '../../../../components';
import {Text} from '@ui-kitten/components';
import {medicationsStyles} from '../styles';
import InputDocumentPicker from '../../../../components/inputs/InputDocumentPicker';
import {Controller} from 'react-hook-form';

const MedicationsForm = ({control, errors}) => {

  return (
    <View style={{justifyContent: 'center', alignItems: 'center',}}>
      <Text style={medicationsStyles.title} category='p1'>Describe los síntomas que presentas y los motivos por los cuales requieres el medicamento</Text>
      <InputField
        name='motive'
        placeholder='Motivo'
        control={control}
        error={errors.motive}
      />
      <InputField
        name='symptoms'
        placeholder='Síntomas'
        control={control}
        error={errors.symptoms}
      />
      <Controller
        control={control}
        name='prescription'
        render={({field: {onChange, value}}) => {
          return (
            <InputDocumentPicker
              placeholder='Adjuntar récipe'    
              control={control}
              error={errors.prescription}
              {...(value && {value: value.fileName})}
              onChangeImage={img => onChange(img)}
            />
          );
        }}
      />

      <Controller
        control={control}
        name='medical_report'
        render={({field: {onChange, value}}) => {
          return (
            <InputDocumentPicker
              placeholder='Adjuntar informe médico'
              control={control}
              error={errors.medical_report}
              {...(value && {value: value.fileName})}
              onChangeImage={img => onChange(img)}
            />
            );
          }}
        />

        <Controller
          control={control}
          name='indications'
          render={({field: {onChange, value}}) => {
            return (
              <InputDocumentPicker
                placeholder='Adjuntar indicaciones médicas'
                control={control}
                error={errors.indications}
                {...(value && {value: value.fileName})}
                onChangeImage={img => onChange(img)}
              />
              );
            }}
          />
    </View>
  );
};

export default MedicationsForm;
