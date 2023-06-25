import { combineReducers } from 'redux'
import contactReducer from './setcontact'
import educationReducer from './seteducation'
import experienceReducer from './setexperience'
import setkeyskillsReducer from './setkeyskills'
import templateReducer from './settemplate'
import resumeReducer from './saveresume'
import keyskillsReducer from './setkeyskills'

// This is Root Reducer Which Exports All reducer with one Defined Variable Named "ROOT REDUCER"
const rootReducer = combineReducers({
  contactReducer:contactReducer,
  educationReducer:educationReducer,
  experienceReducer:experienceReducer,
  setkeyskills:setkeyskillsReducer,
  templateReducer:templateReducer,
  resumeReducer:resumeReducer,
  keyskillsReducer:keyskillsReducer
})

export default rootReducer