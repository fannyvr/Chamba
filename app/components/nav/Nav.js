import React, { Component } from 'react';
import { Link } from 'react-router';

import './nav.css';

class Nav extends Component {
  render(){
    return(
      <div className="nav"> 
        <Link to="/searchjobs" className="link"> Buscar </Link>
        <Link to="/postjobs" className="link"> Publicar </Link>
        <Link to="/login" className="link"> Log In </Link>
        <Link to="/logout" className="link"> Log Out </Link>
      </div>
    )
  }
}

export default Nav;