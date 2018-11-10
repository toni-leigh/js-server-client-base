import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import CatWrapper from './cat-wrapper';

const store = createStore(() => {});

describe('<CatWrapper />', () => {
  let catWrapper;

  beforeAll(() => {
    catWrapper = shallow(
      <CatWrapper store={ store }/>
    ).dive();
  });

  test('basic render', () => {
    expect(catWrapper).toMatchSnapshot();
  });
});
