import { createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { todos } from '../reducers/reducers';
import { addTodo } from '../actions/actions';

let store = createStore(
  todos, 
  [ 'Use Redux' ], 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )


store.dispatch(addTodo('Read the docs'))
store.dispatch(addTodo('Read about the middleware'))

export default store;