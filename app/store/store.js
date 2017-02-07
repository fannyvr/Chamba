import { createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { jobs } from '../reducers/reducers';
import { addJob } from '../actions/actions';

let store = createStore(
  jobs, 
  [ 'Post Jobs' ], 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )


store.dispatch(addJob('Post your jobs'))

export default store;