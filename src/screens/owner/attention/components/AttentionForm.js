import React from 'react';
import {InputField} from '../../../../components';

const AttentionForm = ({control, errors}) => {
  return (
    <>
      <InputField
        name='reason'
        placeholder='Motivo'
        control={control}
        error={errors?.reason}
      />
      <InputField
        name='symptoms'
        placeholder='Síntomas'
        control={control}
        error={errors?.symptoms}
      />
    </>
  );
};

export default AttentionForm;
