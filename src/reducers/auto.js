import * as R from 'ramda';

import {
  FETCH_AUTOS_SUCCESS,
  LOAD_MORE_AUTOS_SUCCESS,
  FETCH_AUTO_BY_ID_SUCCESS
} from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_AUTOS_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), payload)
      // return R.merge(state, newValues)
      return {...state, ...newValues}
    case LOAD_MORE_AUTOS_SUCCESS:
      const moreValues = R.indexBy(R.prop('id'), payload)
      // return R.merge(state, moreValues)
      return {...state, ...moreValues}
    case FETCH_AUTO_BY_ID_SUCCESS:
      return R.assoc(payload.id, payload, state)
      // const payloadId = payload.id;
      // return {...state, ...{payloadId: payload}}

    default:
      return state
  }

}
