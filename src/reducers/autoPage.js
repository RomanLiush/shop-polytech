import * as R from 'ramda';
import {FETCH_AUTO_BY_ID_SUCCESS} from '../actionTypes'

const initialState = {

};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_AUTO_BY_ID_SUCCESS:
      return R.merge(state, {
        id: payload.id
        //  id: R.prop('id', payload)
      })
      // return Object.assign(state, {id: payload.id})
      // return {...state, ...{'id': payload.id}}
    default:
      return state
  }
}
