import React, { Component } from 'react';
import auth from '../../utils/authInstance';
import config from '../../../config';

class SinginPage extends Component {
 
  render(){
    return(
      <div>
        <h1>Sign In</h1>
        <button onClick={ auth.login }>Entar</button>
      </div>
    );
  }
};

export default SinginPage;