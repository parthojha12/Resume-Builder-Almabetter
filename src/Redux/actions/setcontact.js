import { SET_CONTACT } from "./actions"
import { UPDATE_CONTACT} from "./actions"

// Sends personal information Data to redux state
export const setcontact = (contact) => {
  return {
      type:SET_CONTACT,
      payload : contact
  }
}

// Update personal information Data which Exist
export const updatecontact = (contact) => {
  return {
      type:UPDATE_CONTACT,
      payload:contact
  }
}

