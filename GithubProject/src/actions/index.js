// We speciify the name of the action as a variable
const SET_FAVORITE = 'SET_FAVORITE'
const REMOVE_FAVORITE = 'REMOVE_FAVORITE'

// This is an action creator, it simply specifies the action.
// this is what we call to send an action.
export function setFavorite(item) {
  console.log('set ITEM', item)
  return {
    type: SET_FAVORITE,
    payload: item
  }
}

// This is an action creator, it simply specifies the action.
// this is what we call to send an action.
export function removeFavorite(item) {
  console.log('remove ITEM', item)
  return {
    type: REMOVE_FAVORITE,
    payload: item
  }
}