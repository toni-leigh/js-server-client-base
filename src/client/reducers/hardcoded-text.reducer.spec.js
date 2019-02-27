import { fromJS } from 'immutable';

import hardcodedTextReducer from './hardcoded-text.reducer';
import { HARDCODED_TEXT_RECEIVED } from '../actions/get-hardcoded-text.actions';

test('hardcodedText reducer without state uses default', () => {
  expect(hardcodedTextReducer(undefined, { type: 'STUBBED' })).toMatchSnapshot();
});

test('HARDCODED_TEXT_RECEIVED', () => {
  const state = fromJS('');
  const action = { type: HARDCODED_TEXT_RECEIVED, data: 'Test Hardcoded Text' };
  expect(hardcodedTextReducer(state, action)).toMatchSnapshot();
});