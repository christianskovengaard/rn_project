// We speciify the name of the action as a variable
const SET_FAVORITE = 'SET_FAVORITE'

// This is an action creator, it simply specifies the action.
// this is what we call to send an action.
export function setFavorite() {
  return {
    type: SET_FAVORITE
  }
}