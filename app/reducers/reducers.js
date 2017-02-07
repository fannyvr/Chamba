import * as constants from '../constants/constants';

export  function jobs(state = [], action) {
  switch (action.type) {
    case constants.ADD_JOB:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}