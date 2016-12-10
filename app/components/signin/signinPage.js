import React, { Component } from 'react';
import AuthService from '../../utils/authService';
import config from '../../../config';

class SinginPage extends Component {
 
  render(){
    const auth = new AuthService(config.AUTH0_CLIENT_ID, config.DOMAIN);

    return(
      <div>
        <h1>Sign In</h1>
        <button onClick={ auth.login }>Entar</button>
      </div>
    )
  }
}

export default SinginPage;