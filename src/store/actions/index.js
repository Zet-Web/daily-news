import * as api from '../../api';
import {
  ADD_NEWSLETTER,
  CLEAR_NEWSLETTER,
  CLEAR_POST_BY_ID,
  GET_POST_BY_ID,
  GET_POSTS,
  SEND_MESSAGE,
} from '../types';

/*POST*/
export const getPosts = (homePosts, page, order, limit) => ({
  type: GET_POSTS,
  payload: api.getPosts(homePosts, page, order, limit),
});

export const getPostById = (id) => ({
  type: GET_POST_BY_ID,
  payload: api.getPostById(id),
});

export const clearPostById = () => ({
  type: CLEAR_POST_BY_ID,
  payload: {},
});

/*USER*/
export const addNewsletter = (data) => ({
  type: ADD_NEWSLETTER,
  payload: api.addNewsletter(data),
});

export const clearNewsletter = () => ({
  type: CLEAR_NEWSLETTER,
  payload: {},
});

/*
CONTACT FORM*/
export const sendMessage = (data) => ({
  type: SEND_MESSAGE,
  payload: api.sendMessage(data),
});
