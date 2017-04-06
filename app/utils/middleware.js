import lock from './authInstance';

export const showLock = () => {
  lock.show();
};