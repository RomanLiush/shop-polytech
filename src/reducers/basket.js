import * as R from 'ramda';

import {ADD_AUTO_TO_BASKET} from '../actionTypes';

const initialState = [];

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_AUTO_TO_BASKET:
      return R.append(payload, state)
    default :
      return state
  }
}
