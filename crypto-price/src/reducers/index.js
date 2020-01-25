// Index of reducer

import { 
  FETCHING_PRICE_START, 
  FETCHING_PRICE_SUCCESS,
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
    case FETCHING_PRICE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        price: action.payload
      }
    default:
      console.log(state)
      return state;
  }
}