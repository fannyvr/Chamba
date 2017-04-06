import React, { Component } from 'react';

import NavContainer from './NavContainer';

class AppContainer extends Component {
  render(){
    return(
      <div>
        <NavContainer />
        { this.props.children }
      </div>
    );
  }
};

export default AppContainer;