import React, { Component } from 'react';

import auth from '../../utils/authInstance';
import config from '../../../config';
import { showLock } from '../../utils/middleware';

class SinginPage extends Component{
  render(){
    return(
      <div>
        <h1>Sign In</h1>
        <button onClick={ showLock }> 
          Entar 
        </button>
      </div>
    );
  }
};

export default SinginPage;    