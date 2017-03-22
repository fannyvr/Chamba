import axios from 'axios';

import * as constants from '../constants/constants';


export const clickedJob = (job) => 
    { type: constants.CLICKED_JOB, payload: job }


export const postJobSuccess = (job) =>
  { type: constants.POST_JOB, payload: job }


