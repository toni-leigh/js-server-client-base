import { GET_CAT } from '../actions/get-cat';

const cat = (state = { imageSrc: '' }, action) => {
  switch (action.type) {
    case GET_CAT:
      return state;
    default:
      return state;
  }
}

export default cat;