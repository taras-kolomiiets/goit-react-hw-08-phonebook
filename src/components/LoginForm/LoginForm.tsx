import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { Button } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import ILogin from 'interfaces/ILogin';

const useStyles = makeStyles(theme => ({
  textField: {
    marginBottom: `${theme.spacing(2)}px !important`,
  },
}));

interface ILoginForm {
  loginUser: (values: ILogin) => void;
}

export default function LoginForm({ loginUser }: ILoginForm) {
  const c = useStyles();

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string()
            .min(7, 'Password should be at least 7 symbols')
            .max(15, 'Password should be maximum 15 symbols')
            .required('Required'),
        })}
        onSubmit={(values: ILogin, { setSubmitting }) => {
          loginUser(values);
          setSubmitting(false);
        }}
      >
        <Form>
          <Field
            component={TextField}
            className={c.textField}
            name="email"
            type="email"
            label="Email"
          />
          <br />
          <Field
            component={TextField}
            className={c.textField}
            name="password"
            type="password"
            label="Password"
          />
          <br />
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
