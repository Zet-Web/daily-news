import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { addNewsletter, crearNewsletter } from '../../store/actions';
import { showToasts } from './tools';

const Newsletter = () => {
  const userData = useSelector((state) => state.user);
  console.log(userData);
  const dispatch = useDispatch();
  const textInput = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    dispatch(addNewsletter({ email: value }));
  };

  useEffect(() => {
    if (userData.newsletter) {
      if (userData.newsletter === 'added') {
        showToasts('SUCCESS', 'Thank you for subscribing!!!');
        textInput.current.value = '';
        // dispatch(crearNewsletter());
      } else {
        showToasts('ERROR', 'You are already on the DB ');
        textInput.current.value = '';
        // dispatch(crearNewsletter());
      }
    }
  }, [userData]);

  useEffect(() => {
    return () => {
      dispatch(crearNewsletter());
    };
  }, [dispatch]);

  return (
    <>
      <div className='newsletter_container'>
        <h1>Join our newsletter</h1>
        <div className='form'>
          <Form onSubmit={handleSubmit} className='mt-4'>
            <Form.Group>
              <Form.Control
                type='text'
                placeholder='Example: youremail@gmail.com'
                name='email'
                ref={textInput}
              />
            </Form.Group>
            <Button variant='primary' className='mt-3' type='submit'>
              Add me to the list
            </Button>
            {/*      {userData.newsletter !== ' ' && userData.newsletter === 'added' ? (
              <div>Congratulations</div>
            ) : (
              <div>Email уже есть</div>
            )}*/}
          </Form>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
