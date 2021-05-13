import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as R from 'ramda';
import mapDispatchToProps from 'react-redux/lib/connect/mapDispatchToProps'
import {
  fetchAutoById,
  addAutoToBasket
} from '../../action';
import mapStateToProps from 'react-redux/lib/connect/mapStateToProps'
import {getAutosById} from '../../selectors'
import BasketCart from '../basketCart'
import {Link} from 'react-router-dom'

class Auto1 extends Component {

  componentDidMount() {
    this.props.fetchAutoById(this.props.match.params.id)
  }

  renderFields() {
    const {auto} = this.props;

    const columsField = R.compose(
      R.toPairs,
      R.pick(
        [
          'weight',
          'size'
        ]
      )
    )(auto)

    return columsField.map(([key, value]) => (
      <div className={'column'} key={key}>
        <div className={'ab-details-title'}>
          <p>{key}</p>
        </div>
        <div className={'ab-details-info'}>
          {value}
        </div>
      </div>
    ))
  }

  renderContent() {
    const {auto} = this.props;

    return (
      <div className={'thumbnail'}>
        <div className={'row'}>
          <div className={'col-md-6'}>
            <img
              className={'img-thumbnail'}
              src={auto.image}
              alt={auto.name}
            />
          </div>
          <div className={'col-md-6'}>
            {this.renderFields()}
          </div>
        </div>
        <div className={'caption-full'}>
          <h4 className={'pull-right'}>${auto.price}</h4>
          <h4>{auto.name}</h4>
          <p>{auto.description}</p>
        </div>
      </div>
    )
  }

  renderSidebar() {
    const {auto, addAutoToBasket} = this.props
    return (
      <div>
        <p className={'lead'}>Quick shop</p>
        <BasketCart />
        <div className={'form-group'}>
          <h1>{auto.name}</h1>
          <h2>${auto.price}</h2>
        </div>
        <Link to={'/'} className={'btn btn-info btn-block'}>Back to store</Link>
        <button
          type={'button'}
          className={'btn btn-success btn-block'}
          onClick={() => addAutoToBasket(auto.id)}
        >
          Add to card
        </button>
      </div>
    )
  }

  render() {
    const {auto} = this.props;
    return(
      <div className={'view-container'}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-md-9'}>
              {auto && this.renderContent()}
            </div>
            <div className={'col-md-3'}>
              {auto && this.renderSidebar()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps1 = state => {
  return {
    auto: getAutosById(state, state.autoPage.id)
  }
}

const mapDispatchToProps1 = {
  fetchAutoById,
  addAutoToBasket
}

export default connect(mapStateToProps1, mapDispatchToProps1)(Auto1);
