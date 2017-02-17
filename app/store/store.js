import { createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { jobs } from '../reducers/reducers';

let store = createStore(
  jobs, 
  [ 'Post Jobs' ], 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )


export default store;