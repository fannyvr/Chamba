import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Map } from 'immutable';

import allReducers  from '../reducers/reducers';

let store = createStore(
  allReducers,
  Map(),
  compose(
    applyMiddleware( thunkMiddleware ),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
  )
);

export default store;