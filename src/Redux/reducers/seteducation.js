import initialState from './initialState.json'
import { SET_EDUCATION,UPDATE_EDUCATION } from '../actions/actions'

//  education informations state Reducer
const educationReducer = (state=initialState.education,action) => {
  switch(action.type){
      case SET_EDUCATION : 
          return {...action.payload}
      case UPDATE_EDUCATION : 
          return {...action.payload}
      default : return state
  }
}

export default educationReducer