import initialState from './initialState.json';
import { SET_EXPERIENCE, UPDATE_EXPERIENCE } from '../actions/actions';

// work experience information state reducer
const experienceReducer = (state = initialState.experience, action) => {
  switch (action.type) {
    case SET_EXPERIENCE:
      return { ...state, ...action.payload }; // Merge payload data into the state
    case UPDATE_EXPERIENCE:
      return { ...state, ...action.payload }; // Merge payload data into the state
    default:
      return state;
  }
};

export default experienceReducer;
