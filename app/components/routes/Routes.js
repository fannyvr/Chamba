import React from 'react';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';

import AppContainer from '../../containers/AppContainer';
import SigninPage from '../signin/signinPage';
import MyPostsContainer from '../../containers/MyPostsContainer';
import JobDetailsContainer from '../../containers/JobDetailsContainer';
import PostContainer from '../../containers/PostContainer';
import JobsearchContainer from '../../containers/JobsearchContainer';

const routes = (
  <Router history={ browserHistory } >
    <Route path="/" component={ AppContainer } >
    <IndexRoute component={ JobsearchContainer } />
    <Route path="/login" component={ SigninPage } />
    <Route path="/logout" component={ SigninPage } />
    <Route path="/searchjobs" component={ JobsearchContainer } />
    <Route path="/postjobs" component={ PostContainer } />
    <Route path="/myposts" component={ MyPostsContainer } />
    <Route path="/jobdetails" component={ JobDetailsContainer } />
    </Route>
  </Router>
);

export default routes;