import axios from 'axios';
import { browserHistory } from 'react-router';

import * as types from '../actionTypes/actionTypes';
import lock from '../utils/authInstance';

/* 
  jobs 
*/
export const clickedJob = job => {
  return { type: types.CLICKED_JOB, payload: job };
};

export const postJobSuccess = job => {
  return { type: types.POST_JOB, payload: job };
};

export const postJob = job => {
  return dispatch => {
    return axios.post( '/api/postjobs', job )
      .then( res => dispatch( postJobSuccess(job) ) )
      .catch( err => { console.log( err ) } );
  };
}; 

export const getJobsSuccess = jobs => {
  return { type: types.GET_JOBS, payload: jobs };
};

export const getJobs = () => {
  return dispatch => {
    return axios.get( '/api/searchjobs' )
      .then( res => dispatch( getJobsSuccess( res.data ) ) )
      .catch( err => { console.log( err ) } );
  };
};

/*
  user
*/
export const getUser = ( user ) => {
  return dispatch => {
    return axios.post( '/api/user', user )
      .then( res => { 
        console.log( 'Response', res ); 
        dispatch( logInSuccess( { loggedIn: true } ) ); 
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
          return dispatch( logInFail( { loggedIn: false } ) );
        }
        localStorage.setItem( 'profile', JSON.stringify( profile ) );
        localStorage.setItem( 'id_token', authResult.idToken );
        return dispatch( getUser( profile ) );
      });
      browserHistory.replace( '/postjobs' );
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
    localStorage.removeItem( 'profile' );
    return dispatch( logOutSuccess( { loggedIn: false } ) );
  };
};

