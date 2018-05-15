import { SET_FAVORITE } from '../actions'

let initialState = {
  ids: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      if (state.ids.includes(action.id) === false) {
        return {...state, ids: state.ids.concat(action.id)}
      }
      return state
    default:
      return state
  }
}

export default reducer