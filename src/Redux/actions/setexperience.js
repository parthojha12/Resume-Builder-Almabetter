import { SET_EXPERIENCE,UPDATE_EXPERIENCE} from "./actions"

// Sends Work Experience Data to redux state
const setexperience = (experience) => {
    return {
      type: SET_EXPERIENCE,
      payload: experience,
    }
  }
  export {setexperience}

// Update Work Experience Data which Exist
  const updateexperience = (experience) => {
    return {
      type: UPDATE_EXPERIENCE,
      payload: experience,
    }
  }
  export {updateexperience}