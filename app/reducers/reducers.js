import { combineReducers } from 'redux-immutable';
import { List, Map } from 'immutable';

import * as constants from '../constants/constants';

const init = List();
  
function jobs(state = init, action) {
  switch (action.type){
    case constants.POST_JOB:
      return state.update(jobs => jobs.push(Map(action.payload)));
    default:
      return state;
  }
};


function clickedJobOnSearch(state = {}, action){
  switch(action.type){
    case constants.CLICKED_JOB:
      return action.payload
    default: 
      return state;
  }
};

const allReducers = combineReducers({
  jobs,
  clickedJobOnSearch
});

export default allReducers;