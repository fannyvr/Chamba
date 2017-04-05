import React, { Component } from 'react';
import { connect } from 'react-redux';

import lock from '../utils/authInstance';
import NavContainer from './NavContainer';
import { logInSuccess } from '../actions/actions';

class AppContainer extends Component {
  
  componentWillMount(){
    if(lock.loggedIn()){
      this.props.dispatch(logInSuccess({ loggedIn: true }));
    }
  }

  render(){
    return(
      <div>
        <NavContainer />
        { this.props.children }
      </div>
    );
  }
};

export default connect()(AppContainer);