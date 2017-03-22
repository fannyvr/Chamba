import React from 'react';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';

import AppContainer from '../../containers/AppContainer';
import SigninPage from '../signin/signinPage';
import MyPostsContainer from '../../containers/MyPostsContainer';
import JobDetailsContainer from '../../containers/JobDetailsContainer';
import PostContainer from '../../containers/PostContainer';
import JobsearchContainer from '../../containers/JobsearchContainer';
import auth from '../../utils/authInstance';

const requireAuth = (nextState, replace)=>{
  if( !auth.loggedIn() ){
    replace({pathname:'/login'})
  }
};

const logout = () => {
  return auth.logout();
};

const routes = (
  <Router history={ browserHistory } >
    <Route path="/" component={ AppContainer } >
    <IndexRoute component={ JobsearchContainer } />
    <Route path="/login" component={ SigninPage } />
    <Route path="/logout" component={ SigninPage } onEnter={ logout } />
    <Route path="/searchjobs" component={ JobsearchContainer } />
    <Route path="/postjobs" component={ PostContainer } onEnter={ requireAuth } />
    <Route path="/myposts" component={ MyPostsContainer } onEnter={ requireAuth } />
    <Route path="/jobdetails" component={ JobDetailsContainer }/>
    </Route>
  </Router>
);

export default routes;