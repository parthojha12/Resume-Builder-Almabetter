import initialState from './initialState.json'
import { SET_TEMPLATE,UPDATE_TEMPLATE } from '../actions/actions'

// Templates state management Reducer
const templateReducer = (state=initialState.template,action) => {
  switch(action.type){
      case SET_TEMPLATE : 
          return {...action.payload}
      case UPDATE_TEMPLATE : 
          return {...action.payload}
      default : return state
  }
}

export default templateReducer