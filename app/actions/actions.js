import axios from 'axios';
import * as types from '../actionTypes/actionTypes';

export const clickedJob = (job) => {
  return { type: types.CLICKED_JOB, payload: job };
};

export const postJobSuccess = (job) => {
  return { type: types.POST_JOB, payload: job };
};

export const postJob = (job) => {
  return (dispatch) => {
    return axios.post('/api/postjobs', job)
      .then((res) => dispatch(postJobSuccess(job)))
      .catch((err) => {console.log(err)});
  };
}; 

export const getJobsSuccess = (jobs) => {
  return { type: types.GET_JOBS, payload: jobs};
};

export const getJobs = () => {
  return (dispatch) => {
    return axios.get('/api/searchjobs')
      .then((res) => {dispatch(getJobsSuccess(res.data))})
      .catch((err) => {console.log(err)})
  };
};