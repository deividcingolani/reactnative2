import * as yup from 'yup';

export const AttentionSchema = yup.object().shape({
  reason: yup
    .string()
    .min(2, 'El motivo debe ser mayor a 2 caracteres')
    .max(60, 'El motivo no puede ser mayor a 60 caracteres')
    .required('El motivo es requerido.'),

  symptoms: yup
    .string()
    .min(2, 'Los síntomas deben ser mayor a 2 caracteres')
    .max(60, 'Los síntomas no pueden ser mayor a 60 caracteres')
    .required('Los síntomas son requeridos.'),
});
