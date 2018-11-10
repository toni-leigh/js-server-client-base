import React from 'react';
import { shallow } from 'enzyme';
import CatButton from './cat-button';

describe('<CatButton />', () => {
  let catButton;

  beforeAll(() => {
    catButton = shallow(
      <CatButton />
    );
  });

  test('basic render', () => {
    expect(catButton).toMatchSnapshot();
  });
});
