import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  identifier: yup
    .number('La cédula debe ser numérica.')
    .typeError('El campo de cédula está vacío o es inválido')
    .min(6, 'La cédula debe ser mayor a 6 caracteres')
    .required('La cédula es requerida.'),

  cell_phone: yup
    .string()
    .matches(/^([0-9()+ -]{10,})$/, 'Número de teléfono inválido, Ej.: +58424154575452')
    .typeError('El campo teléfono está vacío o es inválido')
    .required('El teléfono es requerido.'),

  email: yup
    .string()
    .email('El correo es inválido.')
    .min(2, 'El correo debe ser mayor a 2 caracteres')
    .max(60, 'El correo no puede ser mayor a 60 caracteres')
    .required('El correo es requerido.'),

  birth_date: yup
    .date()
    .typeError('La fecha de nacimiento no es valida.')
    .required('La fecha de nacimiento es requerida.'),

  sex: yup
    .string()
    .typeError('El sexo es inválido')
    .required('El sexo es requerido.'),

  terms: yup
    .bool()
    .oneOf([true], 'Debe aceptar los términos y condiciones.')
    .required('Debe aceptar los términos y condiciones.'),

  insurance_code: yup.number().required(),
});
