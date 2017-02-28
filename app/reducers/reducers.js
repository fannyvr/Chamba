import { combineReducers } from 'redux';
import * as constants from '../constants/constants';

 function jobs(state = [], action) {
  switch (action.type){
    case constants.POST_JOB:
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
};


function clickedJobOnSearch(state = {}, action){
  switch(action.type){
    case constants.CLICKED_JOB:
      return action.payload
    default: 
      return state
  }
};

const allReducers = combineReducers({
  jobs,
  clickedJobOnSearch
});

export default allReducers;