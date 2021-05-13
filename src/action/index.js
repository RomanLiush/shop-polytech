import {
  FETCH_AUTOS_START,
  FETCH_AUTOS_SUCCESS,
  FETCH_AUTOS_FAILURE,

  LOAD_MORE_AUTOS_START,
  LOAD_MORE_AUTOS_SUCCESS,
  LOAD_MORE_AUTOS_FAILURE,

  FETCH_AUTO_BY_ID_START,
  FETCH_AUTO_BY_ID_SUCCESS,
  FETCH_AUTO_BY_ID_FAILURE,

  ADD_AUTO_TO_BASKET,

  SEARCH_AUTO,

  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,

  ADD_NEW_AUTO_START,
  ADD_NEW_AUTO_SUCCESS,
  ADD_NEW_AUTO_FAILURE,

} from '../actionTypes';

import {
  fetchAutos as fetchAutosApi,
  loadMoreAutos as loadMoreAutosApi,
  fetchAutoById as fetchAutoByIdApi,
  fetchCategories as fetchCategoriesApi,
  addNewAuto as addNewAutoApi,
} from '../api';

import { getRenderedPhonesLength } from '../selectors';

export const fetchAutos = () => async dispatch => {
  dispatch({
    type: FETCH_AUTOS_START
  })

  try {
    const autos = await fetchAutosApi()
    dispatch({
      type: FETCH_AUTOS_SUCCESS,
      payload: autos,
    })
  } catch (err) {
    dispatch({
      type: FETCH_AUTOS_FAILURE,
      payload: err,
      error: true,
    })
  }
}

export const loadMoreAutos = () => async (dispatch, getState) => {
  const offset = getRenderedPhonesLength(getState())
  dispatch({
    type: LOAD_MORE_AUTOS_START
  })

  try {
    const autos = await loadMoreAutosApi({offset})
    dispatch({
      type: LOAD_MORE_AUTOS_SUCCESS,
      payload: autos,
    })
  } catch (err) {
    dispatch({
      type: LOAD_MORE_AUTOS_FAILURE,
      payload: err,
      error: true,
    })
  }
}

export const fetchAutoById = id => async dispatch => {
  dispatch({
    type: FETCH_AUTO_BY_ID_START
  })

  try{
    const auto = await fetchAutoByIdApi(id)
    dispatch({
      type: FETCH_AUTO_BY_ID_SUCCESS,
      payload: auto
    })
  } catch (err) {
    dispatch({
      type: FETCH_AUTO_BY_ID_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const addAutoToBasket = id => dispatch => {
  dispatch({
    type: ADD_AUTO_TO_BASKET,
    payload: id,
  })
}

export const searchAuto = text => dispatch => {
  dispatch({
    type: SEARCH_AUTO,
    payload: text,
  })
}

export const fetchCategories = () => async dispatch => {
  dispatch({
    type: FETCH_CATEGORIES_START
  })

  try{
    const categories = await fetchCategoriesApi()
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: categories
    })
  } catch (err) {
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const addNewAuto = () => async (dispatch, getState) => {
  // const offset = getRenderedPhonesLength(getState())
  const newAutoObj = JSON.parse(localStorage.getItem('newAuto'));
  dispatch({
    type: ADD_NEW_AUTO_START
  })

  try {
    const newAuto = await addNewAutoApi({newAutoObj})
    dispatch({
      type: ADD_NEW_AUTO_SUCCESS,
      payload: newAuto,
    })
  } catch (err) {
    dispatch({
      type: ADD_NEW_AUTO_FAILURE,
      payload: err,
      error: true,
    })
  }
}
