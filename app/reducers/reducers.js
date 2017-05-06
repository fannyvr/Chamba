import { combineReducers } from 'redux-immutable';
import { List, Map } from 'immutable';

import * as types from '../actionTypes/actionTypes';
import * as initState from '../utils/initStates';

export const jobList = ( state = initState.joblist, action ) => {
  switch ( action.type ){
    case types.POSTJOB_SUCCESS:
      return state.update( jobs => jobs.push( Map( action.payload ) ) );
    case types.GETJOBS_SUCCESS:
      return List( action.payload.map( job  => Map( job ) ) );
    default:
      return state;
  }
};

export const activeJob = ( state = initState.activejob, action ) => {
  switch( action.type ){
    case types.CLICKED_JOB:
      return state.merge( action.payload );
    default: 
      return state;
  }
};

export const isAuth = ( state = initState.isauth, action ) => {
  switch( action.type ){
    case types.LOGIN_SUCCESS:
      return state.merge( action.payload );
    case types.LOGOUT_SUCCESS:
      return state.merge( action.payload )
    default:
      return state;
  }
};

export const db = ( state = initState.db, action ) => {
  switch( action.type ){
    case types.DB_REQUEST:
      return state.merge( Map( { 
          isWorking: true, 
          error: null 
      } ) );
    case types.DB_SUCCESS:
      return state.merge( Map( { 
          isWorking: false, 
          error: null 
      } ) );
    case types.DB_FAILURE:
      return state.merge( Map( { 
        isWorking: false, 
        error: action.payload.response.statusText 
      } ) );
    default:
      return state;
  }
};

const allReducers = combineReducers({
  jobList,
  activeJob,
  isAuth,
  db
});

export default allReducers;