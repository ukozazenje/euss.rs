import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .required('Obavezno polje'),
  comments: Yup.string()
    .required('Obavezno polje'),
  email: Yup.string()
    .email('Neispravan email')
    .required('Obavezno polje'),
});

export default SignUpSchema;