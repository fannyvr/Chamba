import * as constants from '../constants/constants';

export function postJob(job) {
  return { type: constants.POST_JOB, payload: job }
}

export function clickedJob(job) {
  return { type: constants.CLICKED_JOB, payload: job }
}