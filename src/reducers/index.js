import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import autosPage from './autosPage';
import autoPage from './autoPage';
import auto from './auto';
import basket from './basket';
import categories from './categories';

export default history => combineReducers({
  autoPage,
  autosPage,
  auto,
  basket,
  categories,
  router: connectRouter(history)
})
