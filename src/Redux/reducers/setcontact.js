import initialState from './initialState.json'
import {SET_CONTACT,UPDATE_CONTACT} from '../actions/actions'

// Personal Information state Reducer
const contactReducer = (state=initialState.contact,action) => {
    switch(action.type){
        case SET_CONTACT : 
            return {...action.payload}
        case UPDATE_CONTACT : 
            return {...action.payload}
        default : return state 
    }
}

export default contactReducer;