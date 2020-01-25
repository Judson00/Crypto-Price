//Index for actions

import axios from 'axios';

export const FETCHING_PRICE_START = "FETCHING_PRICE_START"
export const FETCHING_PRICE_SUCCESS = "FETCHING_PRICE_SUCCESS"
export const FETCHING_PRICE_FAILURE = "FETCHING_PRICE_FAILURE"

export const fetchPrice = () => {
  return dispatchEvent => {
    dispatchEvent({ 
      type: FETCHING_PRICE_START 
    });
    axios
      .get(`https://api.cryptonator.com/api/ticker/btc-usd`)
      .then(res => {
        console.log(res.data)
        dispatchEvent({ 
          type: FETCHING_PRICE_SUCCESS,
          payload: res.data 
        })
      })
      .catch(err => {
        console.log(err)
        dispatchEvent({ 
          type: FETCHING_PRICE_FAILURE,
          payload: err.response 
        })
      })
  }
}