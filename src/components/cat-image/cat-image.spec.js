import React from 'react';
import { shallow } from 'enzyme';
import CatImage from './cat-image';

describe('<CatImage />', () => {
  let catImage;

  beforeAll(() => {
    catImage = shallow(
      <CatImage />
    );
  });

  test('basic render', () => {
    expect(catImage).toMatchSnapshot();
  });
});
