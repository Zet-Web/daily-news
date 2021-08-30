import { ADD_NEWSLETTER, CLEAR_NEWSLETTER } from '../types';
import { act } from '@testing-library/react';

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case ADD_NEWSLETTER:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_NEWSLETTER:
      return { ...state, newsletter: action.payload, email: action.payload };
    default:
      return state;
  }
}
