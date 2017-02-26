import * as constants from '../constants/constants';

export function postJob(job) {
  return { type: constants.POST_JOB, payload: job }
}