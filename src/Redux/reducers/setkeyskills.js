import initialState from './initialState.json'
import { SET_KEYSKILLS,UPDATE_KEYSKILLS } from '../actions/actions'

//key skills information state reducer
const keyskillsReducer = (state=initialState.skills,action) => {
  switch(action.type){
      case SET_KEYSKILLS : 
          return {...action.payload}
      case UPDATE_KEYSKILLS : 
          return {...action.payload}

      default : return state
  }
}

export default keyskillsReducer