import React from 'react';

import './nav.css';

const Nav = props => {
  const { toMyPosts, toLogIn, toSearch, toPost, toLogOut, loggedIn } = props;
  return(
    <div className="nav"> 
      <button type="button" 
              onClick={ toSearch } 
              className="link"
      > 
        Buscar 
      </button>
      <button type="button" 
              onClick={ toPost } 
              className="link"
      > 
        Publicar 
      </button>
      { loggedIn && 
        <button type="button" 
                onClick={ toMyPosts } 
                className="link"
        > 
          Mis Publicados 
        </button>
      }
      { !loggedIn && 
        <button type="button" 
                onClick={ toLogIn } 
                id="login" 
                className="link"
        > 
          Iniciar Sesión 
        </button> 
      }  
      { loggedIn && 
        <button type="button" 
                onClick={ toLogOut } 
                id="logout" 
                className="link"
        > 
          Cerrar Sesión 
        </button> 
      }
    </div>
  );
};

export default Nav;