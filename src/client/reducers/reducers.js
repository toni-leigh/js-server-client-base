import { combineReducers } from 'redux-immutable';

import cat from './cat';
import hardcodedText from './hardcoded-text.reducer';

export default combineReducers({
  cat,
  hardcodedText
});