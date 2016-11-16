import React from 'react';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';

import App from '../app/App';
import SigninPage from '../signin/signinPage';
import PostjobsPage from '../post/PostjobsPage';
import JobsearchPage from '../search/JobsearchPage';



const routes = (
  <Router history={ browserHistory } >
    <Route path="/" component={ App } >
    <IndexRoute component={ SigninPage } />
    <Route path="/searchjobs" component={ JobsearchPage } />
    <Route path="/postjobs" component={ PostjobsPage } />
    <Route path="/signout" component={ SigninPage } />
    </Route>
  </Router>
);

export default routes;