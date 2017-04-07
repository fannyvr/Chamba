import Auth0Lock from 'auth0-lock';
import config from '../../config';

const lock = new Auth0Lock(config.AUTH0_CLIENT_ID, config.DOMAIN,{
  auth: {
    redirectUrl: 'http://localhost:3000/postjobs',
    responseType: 'token'
  }
});

export default lock;