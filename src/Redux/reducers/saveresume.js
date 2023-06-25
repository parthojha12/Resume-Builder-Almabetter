import initialState from './initialState.json'
import { SAVE_RESUME } from '../actions/actions'

// Save resume state Reducer
const resumeReducer = (state = initialState.contact, action) => {
  switch (action.type) {
    case SAVE_RESUME:
      return { ...action.payload}
    default:
      return state
  }
}

export default resumeReducer;
