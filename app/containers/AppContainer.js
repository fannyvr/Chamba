import React, { Component } from 'react';

import Nav from '../components/nav/Nav';

class AppContainer extends Component {
  render(){
    return(
      <div>
        <Nav />
        { this.props.children }
      </div>
    );
  }
};

export default AppContainer;