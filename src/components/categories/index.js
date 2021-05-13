import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {compose} from 'redux';
import classNames from 'classnames';
import * as R from 'ramda';

import {
  getCategories,
  getActiveCategoryId
} from '../../selectors';

const Categories = ({categories, activeCategoryId}) => {
  console.log('ACTIVE', activeCategoryId)
  const getActiveState = R.propEq('id', activeCategoryId) //doest work without third parameter
  const renderCategory = (category, index) => {
    const linkClass = classNames({
      'list-group-item': true,
      'active': getActiveState(category) //this is third parameter of R.propEq and it become func
    })
    return(
      <Link
        to={`/categories/${category.id}`}
        className={linkClass}
        key={index}
      >
        {category.name}
      </Link>
    )
  }

  const renderAllCategory = () => {
    const linkClass = classNames({
      'list-group-item': true,
      'active': R.isNil(activeCategoryId)
      //work when activeCategoryId is undefined or null, its depend from category ID in url
    })

    return(
      <Link
        to={'/'}
        className={linkClass}
      >
        All
      </Link>
    )
  }

  return (
    <div className={'well'}>
      <h4>Brand</h4>
      <div className={'list-group'}>
        {renderAllCategory()}
        {categories.map((category, index) => renderCategory(category, index))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  categories: getCategories(state),
  activeCategoryId: getActiveCategoryId(ownProps)
})

//export default withRouter(connect(mapStateToProps, null)(Categories));
export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(Categories)
