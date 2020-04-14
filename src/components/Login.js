import React from 'react';
import { Formik, Field, Form } from 'formik';
import { saveUser } from '../action/actions';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { TextField, Button, StylesProvider } from '@material-ui/core';

/*const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      placeholder={placeholder}
      error={!!errorText}
      {...field}
      helperText={errorText}
    />
  );
};*/

const Login = props => {
  const dispatch = useDispatch();

  const handleSubmit = (data, { setSubmitting }) => {
    setSubmitting(true);
    console.log(data);
    setSubmitting(false);
    dispatch(saveUser(data));
    props.history.push('./index');
  };

  const validationSchema = yup.object({
    username: yup
      .string()
      .email('Email Must be a valid Email')
      .required('Email is a required field'),
    password: yup
      .number()
      .integer('must be a number')
      .required('password is a required field')
  });
  return (
    <StylesProvider injectFirst>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <div className='form'>
            <Form>
              <Field
                id='standard-basic'
                label='Email'
                type='input'
                name='username'
                as={TextField}
              />
              <br />
              <br />

              <Field
                id='standard-basic'
                label='password'
                type='password'
                name='password'
                as={TextField}
              />

              <br />
              <br />

              <Button type='submit' variant='contained' color='primary'>
                submit
              </Button>
            </Form>
          </div>
        )}
      </Formik>
    </StylesProvider>
  );
};

export default Login;
