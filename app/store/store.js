import { createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Map } from 'immutable';

import allReducers  from '../reducers/reducers';
import {getJobs} from '../actions/actions'

let store = createStore(
  allReducers,
  Map(),
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
);

export default store;