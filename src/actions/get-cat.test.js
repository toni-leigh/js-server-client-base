import { getCat } from './get-cat';

test('get cat returns the correct action', () => {
  expect(getCat()).toMatchSnapshot();
});