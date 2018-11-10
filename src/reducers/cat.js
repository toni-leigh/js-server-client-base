import { RECEIVE_CAT } from '../actions/get-cat';

const cat = (state = { imageSrc: '' }, action) => {
  switch (action.type) {
    case RECEIVE_CAT:
      return { ...state, imageSrc: action.payload[0].url };
    default:
      return state;
  }
}

export default cat;