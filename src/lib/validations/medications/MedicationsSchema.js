import * as yup from 'yup';

export const MedicationsSchema = yup.object().shape({
  motive: yup
    .string()
    .min(2, 'El motivo debe ser mayor a 2 caracteres')
    .max(60, 'El motivo no puede ser mayor a 60 caracteres')
    .required('El motivo es requerido.'),

  symptoms: yup
    .string()
    .min(2, 'Los síntomas deben ser mayor a 2 caracteres')
    .max(60, 'Los síntomas no pueden ser mayor a 60 caracteres')
    .required('Los síntomas son requeridos.'),

  symptoms: yup
    .string()
    .min(2, 'Los síntomas deben ser mayor a 2 caracteres')
    .max(60, 'Los síntomas no pueden ser mayor a 60 caracteres')
    .required('Los síntomas son requeridos.'),

  prescription: yup
    .object()
    .typeError('El récipe es requerido.')
    .required('El récipe es requerido.')
    .shape({
      file: yup.string(),
      extension: yup.string(),
      type: yup
        .string()
        .test('fileType', 'Archivo no permitido.', value =>
          [
            'image/jpg',
            'image/jpeg',
            'image/png',
            'application/pdf',
            'jpg',
            'png',
            'jpge',
            'pdf',
          ].includes(value),
        ),
    }),
    
  medical_report: yup
    .object()
    .typeError('El informe médico res requerido.')
    .required('El informe médico res requerido.')
    .shape({
      file: yup.string(),
      extension: yup.string(),
      type: yup
        .string()
        .test('fileType', 'Archivo no permitido.', value =>
          [
            'image/jpg',
            'image/jpeg',
            'image/png',
            'application/pdf',
            'jpg',
            'png',
            'jpge',
            'pdf',
          ].includes(value),
        ),
    }),

  indications: yup
    .object()
    .nullable()
    .shape({
      file: yup.string(),
      extension: yup.string(),
      type: yup
        .string()
        .test('fileType', 'Archivo no permitido.', value =>
          [
            'image/jpg',
            'image/jpeg',
            'image/png',
            'application/pdf',
            'jpg',
            'png',
            'jpge',
            'pdf',
          ].includes(value),
        ),
    }),
  
});