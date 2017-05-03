import axios from 'axios';
import { browserHistory } from 'react-router';

import * as types from '../actionTypes/actionTypes';
import lock from '../utils/authInstance';

/* 
  active job 
*/
export const clickedJob = job => {
  return { type: types.CLICKED_JOB, payload: job };
};

/*
  db
*/
export const dbRequest = () => {
  return { type: types.DB_REQUEST };
};

export const dbSuccess = () => {
  return { type: types.DB_SUCCESS };
};

/* 
  post job 
*/
export const postJobSuccess = job => {
  return { type: types.POSTJOB_SUCCESS, payload: job };
};

export const postJobFailed = err => {
  return { type: types.POSTJOB_FAILED, payload: err };
}; 

export const postJob = ( job, userId ) => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem( 'id_token' );
  return dispatch => {
    dispatch( dbRequest() );
    return axios.post( '/api/postjobs', { job, userId } )
      .then( res => { 
        dispatch( postJobSuccess( job ) )
        dispatch( dbSuccess() )
      })
      .catch( err => dispatch( postJobFailed( err ) ) );
  };
}; 

/*
  load search list
*/
export const getJobsSuccess = jobs => {
  return { type: types.GETJOBS_SUCCESS, payload: jobs };
};

export const getJobsFailed = err => {
  return { type: types.GETJOBS_FAILED, payload: err };
};

export const getJobs = () => {
  return dispatch => {
    return axios.get( '/api/searchjobs' )
      .then( res => dispatch( getJobsSuccess( res.data ) ) )
      .catch( err => dispatch( getJobsFailed( err ) ) );
  };
};

/*
  user
*/
export const getUser = ( user ) => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem( 'id_token' );
  return dispatch => {
    return axios.post( '/api/user', user )
      .then( res => { 
        dispatch( logInSuccess( { loggedIn: true, user: res.data } ) ); 
        browserHistory.replace( '/postjobs' );
      } )
      .catch( err => console.log( err ) )
  };
};

/*
  login
*/
export const logInSuccess = loggedIn  => {
  return { type: types.LOGIN_SUCCESS, payload: loggedIn };
};

export const logInFail = loggedIn => {
  return { type: types.LOGIN_FAILURE, payload: loggedIn };
};

export const login = () => {
  return dispatch => { 
    lock.on( 'authenticated', authResult => {
      lock.getUserInfo( authResult.accessToken, ( err, profile ) => {
        if( err ){
          return dispatch( logInFail( { loggedIn: false, user: null } ) );
        }
        localStorage.setItem( 'id_token', authResult.idToken );
        localStorage.setItem( 'user_id', profile.identities[0].user_id  )
        return dispatch( getUser( profile ) );
      });
    });
  };
};

/*
  logout
*/
export const logOutSuccess = loggedIn => {
  return { type: types.LOGOUT_SUCCESS, payload: loggedIn };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem( 'id_token' );
    localStorage.removeItem( 'user_id' );
    return dispatch( logOutSuccess( { loggedIn: false, user: null } ) );
  };
};

