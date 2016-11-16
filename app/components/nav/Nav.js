import React, { Component } from 'react';
import { Link } from 'react-router';

import './nav.css';

class Nav extends Component {
  render(){
    return(
      <div className="nav"> 
        <Link to="/searchjobs" className="link"> Buscar </Link>
        <Link to="/postjobs" className="link"> Publicar </Link>
        <Link to="/signout" className="link"> Logout </Link>

      </div>
    )
  }
}

export default Nav;