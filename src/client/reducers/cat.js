import { fromJS } from 'immutable';

import { CAT_RECEIVED } from '../actions/get-cat';

const initialState = fromJS({ imageSrc: '' })

const cat = (state = initialState, action) => {
  switch (action.type) {
    case CAT_RECEIVED:
      return state.set('imageSrc', action.data[0].url);
    default:
      return state;
  }
}

export default cat;