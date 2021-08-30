import * as api from '../../api';
import { ADD_NEWSLETTER, CLEAR_NEWSLETTER, GET_POSTS } from '../types';

/*POST*/
export const getPosts = (homePosts, page, order, limit) => ({
  type: GET_POSTS,
  payload: api.getPosts(homePosts, page, order, limit),
});

/*USER*/
export const addNewsletter = (data) => ({
  type: ADD_NEWSLETTER,
  payload: api.addNewsletter(data),
});

export const crearNewsletter = () => ({
  type: CLEAR_NEWSLETTER,
  payload: {
    newsletter: false,
    email: [],
  },
});
