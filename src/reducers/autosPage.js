import * as R from 'ramda';

import {
  FETCH_AUTOS_SUCCESS,
  LOAD_MORE_AUTOS_SUCCESS,

  SEARCH_AUTO
} from '../actionTypes';

const initialState = {
  ids: [],
  search: ''
}

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case FETCH_AUTOS_SUCCESS:
      // return R.merge(state, {
      //   ids: R.pluck('id', payload)
      // })
      return Object.assign(state, {ids: R.pluck('id', payload)})
    case LOAD_MORE_AUTOS_SUCCESS:
      const ids = R.pluck('id', payload)
      // return R.merge(state, {
      //   ids: [...state.ids, ...ids]
      // })
      return {...state, ...{ids: [...state.ids, ...ids]}}
    case SEARCH_AUTO:
      return R.merge(state, {
        search: payload
      })
    default:
      return state
  }
}
