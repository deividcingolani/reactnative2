import * as yup from 'yup';

export const AmbulanceSchema = yup.object().shape({
  motive: yup
    .string()
    .min(2, 'El motivo debe ser mayor a 2 carácteres')
    .required('El motivo es requerido'),

  symptoms: yup
    .string()
    .min(2, 'Los síntomas deben ser mayor a 2 caracteres')
    .required('Los síntomas son requeridos.'),

  origin_address: yup
    .string()
    .min(3, 'La direccion debe ser mayor a 3 carácteres')
    .required('La direccion es requerida'),

  destination_address: yup
    .string()
    .min(3, 'La direccion debe ser mayor a 3 carácteres')
    .required('La direccion es requerida'),

  desired_date: yup.string().required('La fecha es requerida'),

  desired_time: yup.string().required('La hora es requerida'),
});
