import cat from './cat';
import { GET_CAT } from '../actions/get-cat';

test('cat reducer without state uses default', () => {
  expect(cat(undefined, { type: 'STUBBED' })).toMatchSnapshot();
});

test('GET_CAT', () => {
  const state = { imageSrc: 'foo' };
  expect(cat(state, { type: GET_CAT })).toMatchSnapshot();
});