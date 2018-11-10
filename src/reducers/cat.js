import { GET_CAT } from '../actions/get-cat';

const cat = (state = { imageSrc: '' }, action) => {
  switch (action.type) {
    case GET_CAT:
      return { ...state, imageSrc: 'https://placekitten.com/200/300' };
    default:
      return state;
  }
}

export default cat;