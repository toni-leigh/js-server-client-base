import cat from './cat';
import { RECEIVE_CAT } from '../actions/get-cat';

test('cat reducer without state uses default', () => {
  expect(cat(undefined, { type: 'STUBBED' })).toMatchSnapshot();
});

test('RECEIVE_CAT', () => {
  const state = { imageSrc: 'foo' };
  const action = { type: RECEIVE_CAT, payload: [{ url: 'bar' }] };
  expect(cat(state, action)).toMatchSnapshot();
});