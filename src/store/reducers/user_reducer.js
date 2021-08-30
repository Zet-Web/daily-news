import { ADD_NEWSLETTER, CLEAR_NEWSLETTER } from '../types';

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case ADD_NEWSLETTER:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_NEWSLETTER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
