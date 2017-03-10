import React from 'react';
import { render } from 'react-dom';

import routes from './components/routes/Routes';

import { Provider } from 'react-redux';
import store from './store/store';

render(
  <Provider store={ store }>
    { routes }
  </Provider>,
  document.getElementById('app')

);