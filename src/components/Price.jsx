//Price Component

import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import '../css/Price.css';
import { fetchPrice } from '../actions';
import { clearPrice } from '../actions';
import Loader from 'react-loader-spinner';

const Price = props => {
  return (
    <div className='Price'>
      {!props.price && props.isLoading && (
        <h2>Finding the Price!</h2>
      )}
      {props.isLoading && (
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      )}
      <Button color="primary" onClick={props.fetchPrice}>Get Price of BTC</Button>

      <Button color="warning" onClick={props.clearPrice}>Clear Price</Button>

      {
        props.price 
          && 
        !props.loading 
          && 
        <div>
          <h2>{`${props.price.ticker.base} = $${props.price.ticker.price}`}</h2>
        </div>
      }

    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return{
    isLoading: state.isLoading,
    price: state.price,
    error: state.error
  }
}

export default connect(
  mapStateToProps, 
  { fetchPrice, clearPrice }
)(Price);