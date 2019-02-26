import { HARDCODED_TEXT_RECEIVED } from '../actions/get-hardcoded-text';

const hardcodedText = (state = '', action) => {
  switch (action.type) {
    case HARDCODED_TEXT_RECEIVED:
      return action.data.hardcodedText;
    default:
      return state;
  }
}

export default hardcodedText;