import React, { Component } from 'react';
import AuthService from '../../utils/authService';

class SinginPage extends Component {
 
  render(){
    const auth = new AuthService('string', 'string');

    return(
      <div>
        <h1>Sign In</h1>
        <button onClick={ auth.login }>Entar</button>
      </div>
    )
  }
}

export default SinginPage;