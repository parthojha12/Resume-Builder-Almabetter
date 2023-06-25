import { SET_EDUCATION} from "./actions"
import { UPDATE_EDUCATION} from "./actions"

// Sends educational information Data to redux state
export const seteducation = (education) => {
  return {
      type:SET_EDUCATION,
      payload : education
  }
}

// Update educational information Data which Exist
export const updateeducation = (education) => {
  return {
      type:UPDATE_EDUCATION,
      payload : education
  }
}