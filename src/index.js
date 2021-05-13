import './main.css'
import React from 'react';
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux';

import Layout from './components/layout';
import routes from './routes';

import createRootReducer from './reducers';

const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {/*<Layout />*/}
      {routes}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
