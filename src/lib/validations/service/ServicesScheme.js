import * as yup from 'yup';

const today = new Date();
export const ServicesSchema = yup.object().shape({
  service_type: yup
    .string()
    .required('El tipo de servicio es requerido'),

  motive: yup
    .string()
    .min(2, 'El motivo debe ser mayor a 2 caracteres')
    .required('El motivo es requerido'),

  symptoms: yup
    .string()
    .when('service_type', {
      is: value => ((value === '101') || (value === '105')),
      then: yup
        .string()
        .min(2, 'Los síntomas deben ser mayor a 2 caracteres')
        .required('Los síntomas son requeridos.'),
      otherwise: yup.string(),
    }),

  origin_address: yup
    .string()
    .when('service_type', {
      is: value => ((value === '101') || (value === '102') || (value === '105')),
      then: yup
        .string()
        .min(3, 'La dirección debe ser mayor a 3 caracteres')
        .required('La dirección es requerida'),
      otherwise: yup.string(),
    }),

  destination_address: yup
    .string()
    .when('service_type', {
      is: value => value === '101',
      then: yup
        .string()
        .min(3, 'La dirección debe ser mayor a 3 caracteres')
        .required('La dirección es requerida'),
      otherwise: yup.string(),
    }),

  desired_date: yup
    .string()
    .when('service_type', {
      is: value => ((value === '101') || (value === '102') || (value === '105')),
      then: yup
        .string()
        .required('La fecha es requerida'),
      otherwise: yup.string(),
    }),
  
  desired_time: yup
    .string()
    .when('service_type', {
      is: value => ((value === '101') || (value === '102') || (value === '105')),
      then: yup
        .string()
        .required('La hora es requerida'),
      otherwise: yup.string(),
    }),

  exam_type: yup
    .string()
    .when('service_type', {
      is: value => ((value === '102') || (value === '104')),
      then: yup
        .string()
        .min(2, 'El tipo de examen debe ser mayor a 2 caracteres')
        .required('El tipo de examen es requerido.'),
      otherwise: yup.string(),
    }),

  description: yup
    .string()
    .when('service_type', {
      is: value => ((value === '103') || (value === '104')),
      then: yup
        .string()
        .required('La descripción es requerida.'),
      otherwise: yup.string(),
    }),

  file: yup
    .object()
    .when('service_type', {
      is: value => ((value === '103') || (value === '104')),
      then: yup
        .object()
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

      otherwise: yup.object(),
    }),

});
