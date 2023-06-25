import { SET_TEMPLATE,UPDATE_TEMPLATE} from "./actions"

//Set templete when selected
const settemplate = (template) => {
    return {
      type: SET_TEMPLATE,
      payload: template,
    }
  }
  export {settemplate}

//Update templete if already exist
  const updatetemplate = (template) => {
    return {
      type: UPDATE_TEMPLATE,
      payload: template,
    }
  }
  export {updatetemplate}