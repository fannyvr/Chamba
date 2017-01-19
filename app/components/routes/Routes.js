import React from 'react';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';

import App from '../app/App';
import SigninPage from '../signin/signinPage';
import PostjobsPage from '../post/PostjobsPage';
import JobsearchPage from '../search/JobsearchPage';
import auth from '../../utils/authInstance';

const requireAuth = (nextState, replace)=>{
  if( !auth.loggedIn() ){
    replace({pathname:'/login'})
  }
};

const logout = () => {
  return auth.logout();
}

const routes = (
  <Router history={ browserHistory } >
    <Route path="/" component={ App } >
    <IndexRoute component={ JobsearchPage } />
    <Route path="/searchjobs" component={ JobsearchPage } />
    <Route path="/postjobs" component={ PostjobsPage } onEnter={ requireAuth } />
    <Route path="/login" component={ SigninPage } />
    <Route path="/logout" component={ SigninPage } onEnter={ logout } />
    </Route>
  </Router>
);

export default routes;