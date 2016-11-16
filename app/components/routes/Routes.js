import React from 'react';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';

import App from '../app/App';
import SigninPage from '../signin/signinPage';

const routes = (
  <Router history={ browserHistory }>
    <Route path="/" component={ App } >
    <IndexRoute component={ SigninPage } />
    </Route>
  </Router>
);

export default routes;