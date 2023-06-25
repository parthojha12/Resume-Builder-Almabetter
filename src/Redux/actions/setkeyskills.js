import { SET_KEYSKILLS,UPDATE_KEYSKILLS} from "./actions"

// Sends keyskills Data to redux state
const setkeyskills = (skills) => {
    return {
      type: SET_KEYSKILLS,
      payload: skills,
    }
  }
  export {setkeyskills}

  // Update keyskills Data which Exist
  const updatekeyskills = (skills) => {
    return {
      type: UPDATE_KEYSKILLS,
      payload: skills,
    }
  }
  export {updatekeyskills}