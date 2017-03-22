import axios from 'axios';
import * as constants from '../constants/constants';

export const clickedJob = (job) => {
  return { type: constants.CLICKED_JOB, payload: job };
};

export const postJobSuccess = (job) =>{
  return { type: constants.POST_JOB, payload: job };
};


export const postJob = (job) => {
  return (dispatch) => {
    return axios.post('/api/postjobs', job)
      .then((res) => dispatch(postJobSuccess(job)))
      .catch((err) => {console.log(err)});
  };
}; 