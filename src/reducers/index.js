// Index of reducer

import { 
  FETCHING_PRICE_START, 
  FETCHING_PRICE_SUCCESS,
  FETCHING_PRICE_FAILURE,
  CLEARING_PRICE
} from '../actions';

const initialState = {
  isLoading: false,
  price: null,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCHING_PRICE_START:
      return {
        ...state,
        isLoading: true
      }
    case CLEARING_PRICE:
      return{
        ...state,
        isLoading: false,
        price: null,
      }
    case FETCHING_PRICE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        price: action.payload
      }
    case FETCHING_PRICE_FAILURE:
      return{
        ...state,
        isLoading: false,
        price: null
      }
    default:
      console.log(state)
      return state;
  }
}