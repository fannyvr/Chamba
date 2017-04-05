import React, { Component } from 'react';

import auth from '../../utils/authInstance';
import './nav.css';


const Nav = (props) => (
  <div className="nav"> 
    <button to="/searchjobs" className="link"> Buscar </button>
    <button to="/postjobs" className="link"> Publicar </button>
    { auth.loggedIn() && <button className="link"> Mis Publicados </button> }
    { !auth.loggedIn() && <button id="login" className="link"> Iniciar Sesión </button> }  
    { auth.loggedIn() && <button id="logout" className="link"> Cerrar Sesión </button> }
  </div>
);

export default Nav;