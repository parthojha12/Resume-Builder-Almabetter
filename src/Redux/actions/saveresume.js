import { SAVE_RESUME } from "./actions";

// Saves the Resume to My-Resume folder
export const saveresume = (resume) => {
  return {
      type:SAVE_RESUME,
      payload : resume
  }
}


