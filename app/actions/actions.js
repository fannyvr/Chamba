import * as constants from '../constants/constants';

export function addJob(text) {
  return {
    type: constants.ADD_JOB,
    text
  }
}