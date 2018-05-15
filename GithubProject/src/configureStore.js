import { createStore } from 'redux'
import reducer from './reducers/favorites'

// This connects the reducer to the store
export default function configureStore() {
  let store = createStore(
    reducer
  )

  return store
}