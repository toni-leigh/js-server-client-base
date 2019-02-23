import { fromJS } from 'immutable';

import { RECEIVE_CAT } from '../actions/get-cat';

const initialState = fromJS({ imageSrc: '' })

const cat = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CAT:
      return state.set('imageSrc', action.payload[0].url);
    default:
      return state;
  }
}

export default cat;