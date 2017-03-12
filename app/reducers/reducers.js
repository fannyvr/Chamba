import { combineReducers } from 'redux-immutable';
import { List, Map } from 'immutable';

import * as constants from '../constants/constants';

  
function jobs(state = List(), action) {
  switch (action.type){
    case constants.POST_JOB:
      return state.update(jobs => jobs.push(Map(action.payload)));
    default:
      return state;
  }
};

function clickedJobOnSearch(state = Map(), action){
  switch(action.type){
    case constants.CLICKED_JOB:
      return state.merge(action.payload);
    default: 
      return state;
  }
};

const allReducers = combineReducers({
  jobs,
  clickedJobOnSearch
});

export default allReducers;