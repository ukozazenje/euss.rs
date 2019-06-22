import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  comments: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Not valid email')
    .required('Required'),
});

export default SignUpSchema;