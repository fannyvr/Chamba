import { combineReducers } from 'redux-immutable';
import { List, Map,fromJS } from 'immutable';

import * as constants from '../constants/constants';

export const jobList = (state = List(), action) => {
  switch (action.type){
    case constants.POST_JOB:
      return state.update( jobs => jobs.push( Map( action.payload )));
    case constants.GET_JOBS:
      return List(action.payload.map((job) => Map(job)));
    default:
      return state;
  }
};

export const activeJob = (state = Map(), action) => {
  switch(action.type){
    case constants.CLICKED_JOB:
      return state.merge( action.payload );
    default: 
      return state;
  }
};

const allReducers = combineReducers({
  jobList,
  activeJob
});

export default allReducers;