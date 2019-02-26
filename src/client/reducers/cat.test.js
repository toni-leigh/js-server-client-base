import { fromJS } from 'immutable';

import cat from './cat';
import { CAT_RECEIVED } from '../actions/get-cat';

test('cat reducer without state uses default', () => {
  expect(cat(undefined, { type: 'STUBBED' })).toMatchSnapshot();
});

test('CAT_RECEIVED', () => {
  const state = fromJS({ imageSrc: 'foo' });
  const action = { type: CAT_RECEIVED, data: [{ url: 'bar' }] };
  expect(cat(state, action)).toMatchSnapshot();
});