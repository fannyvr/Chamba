import React, { Component } from 'react';
import { Link } from 'react-router';

import auth from '../../utils/authInstance';
import './nav.css';


class Nav extends Component {
  render(){
    return(
      <div className="nav"> 
        <Link to="/searchjobs" className="link"> Buscar </Link>
        <Link to="/postjobs" className="link"> Publicar </Link>
        { auth.loggedIn() && <Link to="/myposts" className="link"> Mis Publicados </Link> }
        { auth.loggedIn() && <Link to="/logout" id="logout" className="link"> Log Out </Link> }
        { !auth.loggedIn() && <Link to="/login" id="login" className="link"> Log In </Link> }  
      </div>
    );
  }
};

export default Nav;