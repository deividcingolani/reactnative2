import React from 'react';
import {View} from 'react-native';

import {InputField, Select, InputDateTime} from '../../../../components';
import {hp} from '../../../../assets/styles/variables';
import {useStoreState} from 'easy-peasy';
import {Controller} from 'react-hook-form';
import InputDocumentPicker from '../../../../components/inputs/InputDocumentPicker';

const ServiceForm = ({control, errors, watch, reset}) => {
  const service_type = watch('service_type');
  
  const {services} = useStoreState(states => states.auth.user.info);
  const availableServices = services.filter((item) => item.value !== '100') // service.value === 100 es solicitud de medicamentos
  console.log('service_type ::: ', service_type);

  switch(service_type) {
    // Ambulancia
    case '101':
      component = 
      <>
        <InputField
          name='motive'
          control={control}
          placeholder='Motivo'
          error={errors.motive}
        />
        <InputField
          name='symptoms'
          control={control}
          placeholder='Síntomas'
          error={errors.symptoms}
        />
        <InputField
          name='origin_address'
          control={control}
          placeholder='Dirección origen'
          error={errors.origin_address}
        />
        <InputField
          name='destination_address'
          control={control}
          placeholder='Dirección destino'
          error={errors.destination_address}
        />
        <View style={{flexDirection: 'row'}}>
          <InputDateTime
            name='desired_date'
            format='DD/MM/YYYY'
            minimumDate={new Date()}
            control={control}
            placeholder='Fecha'
            containerStyles={{marginRight: hp(1)}}
            error={errors.desired_date}
          />
          <InputDateTime
            name='desired_time'
            mode='time'
            placeholder='Hora'
            format='hh:mm'
            minimumDate={new Date()}
            control={control}
            containerStyles={{marginLeft: hp(1)}}
            error={errors.desired_time}
          />
        </View>
      </>;
      break;
    // Laboratorio y Rayos X
    case '102':
      component = 
      <>
        <InputField
          name='motive'
          control={control}
          placeholder='Motivo'
          error={errors.motive}
        />
        <InputField
          name='exam_type'
          control={control}
          placeholder='Tipo de Examen'
          error={errors.exam_type}
        />
        <InputField
          name='origin_address'
          control={control}
          placeholder='Dirección origen'
          error={errors.origin_address}
        />
        <View style={{flexDirection: 'row'}}>
          <InputDateTime
            name='desired_date'
            format='DD/MM/YYYY'
            minimumDate={new Date()}
            control={control}
            placeholder='Fecha'
            containerStyles={{marginRight: hp(1)}}
            error={errors.desired_date}
          />
          <InputDateTime
            name='desired_time'
            mode='time'
            placeholder='Hora'
            format='hh:mm'
            minimumDate={new Date()}
            control={control}
            containerStyles={{marginLeft: hp(1)}}
            error={errors.desired_time}
          />
        </View>
      </>;
      break;
    // Segunda opinion médica
    case '103':
      component = 
      <>
        <InputField
          name='motive'
          control={control}
          placeholder='Motivo'
          error={errors.motive}
        />
        <InputField
          name='description'
          control={control}
          placeholder='Descripción de su caso'
          error={errors.description}
        />
        <Controller
          control={control}
          name='file'
          render={({field: {onChange, value}}) => {
            return (
              <InputDocumentPicker
                placeholder='Adjuntar archivo'
                control={control}
                error={errors.file}
                {...(value && {value: value.fileName})}
                onChangeImage={img => onChange(img)}
              />
            );
          }}
        />
      </>;
      break;
    // Lectura de exámenes
    case '104':
      component = 
      <>
        <InputField
          name='motive'
          control={control}
          placeholder='Motivo'
          error={errors.motive}
        />
        <InputField
          name='description'
          control={control}
          placeholder='Descripción de su caso'
          error={errors.description}
        />
        <InputField
          name='exam_type'
          control={control}
          placeholder='Tipo de Examen'
          error={errors.exam_type}
        />
        <Controller
          control={control}
          name='file'
          render={({field: {onChange, value}}) => {
            return (
              <InputDocumentPicker
                placeholder='Adjuntar archivo'
                control={control}
                error={errors.file}
                {...(value && {value: value.fileName})}
                onChangeImage={img => onChange(img)}
              />
            );
          }}
        />
      </>;
      break;
    // Médico en casa
    case '105':
      component = 
      <>
        <InputField
          name='motive'
          control={control}
          placeholder='Motivo'
          error={errors.motive}
        />
        <InputField
          name='symptoms'
          control={control}
          placeholder='Síntomas'
          error={errors.symptoms}
        />
        <InputField
          name='origin_address'
          control={control}
          placeholder='Dirección origen'
          error={errors.origin_address}
        />
        <View style={{flexDirection: 'row'}}>
          <InputDateTime
            name='desired_date'
            format='DD/MM/YYYY'
            minimumDate={new Date()}
            control={control}
            placeholder='Fecha'
            containerStyles={{marginRight: hp(1)}}
            error={errors.desired_date}
          />
          <InputDateTime
            name='desired_time'
            mode='time'
            placeholder='Hora'
            format='hh:mm'
            minimumDate={new Date()}
            control={control}
            containerStyles={{marginLeft: hp(1)}}
            error={errors.desired_time}
          />
        </View>
      </>;
      break;
    default:
      component = 
      <>
        <InputField
          name='motive'
          control={control}
          placeholder='Motivo'
          error={errors.motive}
        />
        <InputField
          name='origin_address'
          control={control}
          placeholder='Dirección origen'
          error={errors.origin_address}
        />
        <InputField
          name='destination_address'
          control={control}
          placeholder='Dirección destino'
          error={errors.destination_address}
        />
        <View style={{flexDirection: 'row'}}>
          <InputDateTime
            name='desired_date'
            format='DD/MM/YYYY'
            minimumDate={new Date()}
            control={control}
            placeholder='Fecha'
            containerStyles={{marginRight: hp(1)}}
            error={errors.desired_date}
          />
          <InputDateTime
            name='desired_time'
            mode='time'
            placeholder='Hora'
            format='hh:mm'
            minimumDate={new Date()}
            control={control}
            containerStyles={{marginLeft: hp(1)}}
            error={errors.desired_time}
          />
        </View>
      </>;
      break;
  }

  return (
    <View>
      <Select
        name='service_type'
        control={control}
        placeholder='Tipo de servicio'
        options={availableServices}
        error={errors.service_type}
        backdropStyle={{backgroundColor: 'red'}}
        // action={reset}
      />
      {component}
    </View>
  );
};

export default ServiceForm;
