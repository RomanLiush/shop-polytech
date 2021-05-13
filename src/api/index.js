import * as R from 'ramda';
import autos from './mockAutos';
import categories from './mockCategories';

export const fetchAutos = () => {
  return new Promise((resolve, reject) => {
    resolve(autos)
  })
}

export const loadMoreAutos = ({offset}) => {
  return new Promise((resolve, reject) => {
    resolve(autos)
  })
}

export const fetchAutoById = (id) => {
  return new Promise((resolve, reject) => {
    const auto = R.find(R.propEq('id', +id), autos)
    // const auto = R.merge(R.find(R.propEq('id', +id), autos), {id: 10, name: 'PETRO', image: null,})
    resolve(auto)
    // console.log(auto, "AUTO", id, 'id')
  })
}

export const fetchCategories = () => {
  return new Promise((resolve, reject) => {
    resolve(categories)
  })
}

export const addNewAuto = ({addNewAutoObj}) => {
  return new Promise((resolve, reject) => {
    const newAut = localStorage.getItem('newAuto');
    const newAuto = R.merge(autos, JSON.parse(newAut))
    resolve(newAuto)
    console.log('newAuto', newAuto)
  })
}
