import jwt from 'jwt-decode';
import lock from './authInstance';

const token = localStorage.getItem( 'id_token' );

export const showLock = () => {
  lock.show();
};

export const noToken = singedOn => {
  if( !token && !singedOn ){
    return true;
  }
};

export const ifToken = singedOn => {
  if( token && !singedOn ){
    return true;
  }
};

export const tokenExpired = () => {
  const decoded = jwt(token);
  if( decoded.exp < Date.now() / 1000 ){
    return true;
  }
};