import React from 'react';
import { createStore } from 'redux';
import { fromJS } from 'immutable';
import { shallow } from 'enzyme';

import {
  ApiDemo,
  ApiDemoConnected,
  mapDispatchToProps,
  mapStateToProps
} from './api-demo';

import rootReducer from '../../reducers/reducers';

describe('<ApiDemo />', () => {
  let apiDemo;

  beforeAll(() => {
    apiDemo = shallow(
      <ApiDemo
        getHardcodedText={ jest.fn() }
        hardcodedText='Test text'
      />
    );
  });

  test('basic dumb component render', () => {
    expect(apiDemo).toMatchSnapshot();
  });
});

describe('<ApiDemoConnected />', () => {
  let apiDemoConnected;

  beforeAll(() => {
    const store = createStore(rootReducer);
    apiDemoConnected = shallow(
      <ApiDemoConnected store={ store } />
    );
  });

  test('render occurs through connection', () => {
    expect(apiDemoConnected).toMatchSnapshot();
  });
});

describe('mapDispatchToProps', () => {
  test('processes the actions correctly', () => {
    expect(mapDispatchToProps).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  test('processes the state correctly', () => {
    const state = fromJS({ hardcodedText: 'Test Text' });
    expect(mapStateToProps(state)).toMatchSnapshot();
  });
});
