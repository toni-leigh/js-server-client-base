import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import CatWrapper from './cat-wrapper';
import rootReducer from '../../reducers/reducers';

const store = createStore(rootReducer);

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
