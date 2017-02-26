import { combineReducers } from 'redux';
import * as constants from '../constants/constants';

 function jobs(state = [], action) {
  switch (action.type) {
    case constants.POST_JOB:
      return [
        ...state,
        action.payload
        
      ]
    default:
      return state
  }
}

const allReducers = combineReducers({
  jobs
});

export default allReducers;