import React, { Component } from 'react';
import { Link } from 'react-router';

import AuthService from '../../utils/authService';
import config from '../../../config';
import './nav.css';

const auth = new AuthService(config.AUTH0_CLIENT_ID, config.DOMAIN);

class Nav extends Component {
  render(){
    return(
      <div className="nav"> 
        <Link to="/searchjobs" className="link"> Buscar </Link>
        <Link to="/postjobs" className="link"> Publicar </Link>
        { auth.loggedIn() && <Link to="/logout" className="link"> Log Out </Link> }
        { !auth.loggedIn() && <Link to="/login" className="link"> Log In </Link> }  
      </div>
    );
  }
}

export default Nav;