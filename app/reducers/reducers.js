import * as constants from '../constants/constants';

export  function jobs(state = [], action) {
  switch (action.type) {
    case constants.POST_JOB:
      return [
        ...state,
        {
          text: action.state
        }
      ]
    default:
      return state
  }
}