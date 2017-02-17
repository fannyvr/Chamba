import * as constants from '../constants/constants';

export function postJob(state) {
  return { type: constants.POST_JOB, state }
}