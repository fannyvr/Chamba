import React, { Component } from 'react';
import { Link } from 'react-router';

import AuthService from '../../utils/authService';
import './nav.css';


const auth = new AuthService('string', 'string');

class Nav extends Component {
  render(){
    const show = () => {
      if(auth.loggedIn()){
        return <Link to="/logout" className="link"> Log Out </Link>;
      } 
      return <Link to="/login" className="link"> Log In </Link>;
    };

    return(
      <div className="nav"> 
        <Link to="/searchjobs" className="link"> Buscar </Link>
        <Link to="/postjobs" className="link"> Publicar </Link>
        { show() }  
      </div>
    );
  }
}

export default Nav;