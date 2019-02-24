import React from 'react';
import { createStore } from 'redux';
import { fromJS } from 'immutable';
import { shallow } from 'enzyme';

import {
  CatWrapper,
  CatWrapperConnected,
  mapDispatchToProps,
  mapStateToProps
} from './cat-wrapper';
import rootReducer from '../../reducers/reducers';

describe('<CatWrapper />', () => {
  let catWrapper;

  beforeAll(() => {
    catWrapper = shallow(
      <CatWrapper
        getCat={ jest.fn() }
        imageSrc='http://test.jpg'
      />
    );
  });

  test('basic dumb component render', () => {
    expect(catWrapper).toMatchSnapshot();
  });
});

describe('<CatWrapperConnected />', () => {
  let catWrapperConnected;

  beforeAll(() => {
    const store = createStore(rootReducer);
    catWrapperConnected = shallow(
      <CatWrapperConnected store={ store } />
    );
  });

  test('render occurs through connection', () => {
    expect(catWrapperConnected).toMatchSnapshot();
  });
});

describe('mapDispatchToProps', () => {
  test('processes the actions correctly', () => {
    expect(mapDispatchToProps).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  test('processes the state correctly', () => {
    const state = fromJS({ cat: { imageSrc: 'http://test.jpg' }});
    expect(mapStateToProps(state)).toMatchSnapshot();
  });
});
