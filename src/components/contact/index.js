import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../store/actions';
import { showToasts } from '../utils/tools';

const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      firstname: '',
      lastname: '',
      message: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Sorry the email is required')
        .email('This is not a valid email'),
      firstname: Yup.string().required('Sorry the name is required'),
      lastname: Yup.string().required('Sorry the lastname is required'),
      message: Yup.string()
        .required('Sorry you need to say something')
        .max(500, 'Sorry the message is too long'),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(sendMessage(values)).then(({ payload }) => {
        if (payload) {
          resetForm();
          showToasts('SUCCESS', 'Thank you, we will contact you back');
        } else {
          showToasts('ERROR', 'Sorry, something happened, try again');
        }
      });
    },
  });
  return (
    <>
      <h2>Contact</h2>
      <form className='mt-3' onSubmit={formik.handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            className='form-control'
            name='email'
            placeholder='email@example.com'
            {...formik.getFieldProps('email')}
          />
          {formik.errors.email && formik.touched.email ? (
            <Alert variant='danger'>{formik.errors.email}</Alert>
          ) : null}
        </div>

        <div className='mb-3'>
          <label htmlFor='firstname'>Name</label>
          <input
            type='text'
            className='form-control'
            name='firstname'
            placeholder='Enter your name'
            {...formik.getFieldProps('firstname')}
          />
          {formik.errors.firstname && formik.touched.firstname ? (
            <Alert variant='danger'>{formik.errors.firstname}</Alert>
          ) : null}
        </div>

        <div className='mb-3'>
          <label htmlFor='lastname'>Lastname</label>
          <input
            type='text'
            className='form-control'
            name='lastname'
            placeholder='Enter your lastname'
            {...formik.getFieldProps('lastname')}
          />
          {formik.errors.lastname && formik.touched.lastname ? (
            <Alert variant='danger'>{formik.errors.lastname}</Alert>
          ) : null}
        </div>

        <div className='mb-3'>
          <label htmlFor='message'>Message</label>
          <textarea
            className='form-control'
            name='message'
            rows='3'
            placeholder='Enter your message'
            {...formik.getFieldProps('message')}
          />
          {formik.errors.message && formik.touched.message ? (
            <Alert variant='danger'>{formik.errors.message}</Alert>
          ) : null}
        </div>
        <button type='submit' className='btn btn-primary'>
          Send message
        </button>
      </form>
    </>
  );
};

export default Contact;
