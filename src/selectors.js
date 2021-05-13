import * as R from 'ramda'
import mockDATA from './api/mockAutos';
import categories from './reducers/categories'

export const getAutosById = (state, id) => R.prop(id, state.auto)

export const getCategories = state => R.values(state.categories)

export const getActiveCategoryId = ownProps => R.path(['match', 'params', 'id'], ownProps)

// state.autos[id]
export const getAutos = (state, ownProps) => {
  // const autos = R.map(id => getAutosById(state, id), state.autosPage.ids)
  //// const autos = state.autosPage.ids.map(id => getAutosById(state, id));

  const activeCategoryId = getActiveCategoryId(ownProps)

  const applySearch = item => R.contains(
    state.autosPage.search,
    item.name
    // R.prop('name', item)
  )

  const applyCategory = item => R.equals(
    activeCategoryId,
    R.prop('categoryId', item)
  )

  const autos = R.compose(
    R.filter(applySearch),
    R.when(() => activeCategoryId, R.filter(applyCategory)),
    R.map(id => getAutosById(state, id))
  )(state.autosPage.ids)
  return autos
}

export const getRenderedPhonesLength = state => R.length(state.autosPage.ids)

export const getTotalBasketCount = state => state.basket.length

export const getTotalBasketPrice = state => {
  const totalPrice = R.compose(
    R.sum,
    R.pluck('price'),
    R.map(id => getAutosById(state, id))
  )(state.basket)

  return totalPrice
}

export const getNewAuto = state => state;


