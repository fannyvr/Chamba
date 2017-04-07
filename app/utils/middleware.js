import lock from './authInstance';

export const showLock = () => {
  lock.show();
};

export const noToken = (singedOn) => {
  if( !localStorage.getItem('id_token') && !singedOn ){
    return true;
  }
};

export const checkToken = (singedOn) => {
  if( localStorage.getItem('id_token') && !singedOn ){
    return true;
  }
};