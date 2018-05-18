import { SET_FAVORITE, REMOVE_FAVORITE } from '../actions/index'

let initialState = {
  repos: [],
}

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
    console.log('setFavorite');
    console.log(action.payload.item);
      //if (state.repos.includes(action.payload.item) === false) {
        console.log('favoritet ADDED!');  
        state.repos.push(action.payload.item);
        console.log(state.repos);
      //}
        return state;
    case 'REMOVE_FAVORITE':
    console.log('removeFavorite');
    console.log(action.payload.item);
      //if (state.repos.includes(action.payload.item) === false) {
        console.log('favoritet REMOVED!');  
        //state.repos.push(action.payload.item);
        console.log(state.repos);
      //}
        return state;

    default:
      console.log('getting to deafult!'); 
      return state
  }
}
export default favorites