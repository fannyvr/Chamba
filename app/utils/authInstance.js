import AuthService from './authService';
import config from '../../config';

const auth = new AuthService(config.AUTH0_CLIENT_ID, config.DOMAIN);

export default auth;