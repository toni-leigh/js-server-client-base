import React from 'react';
import { createStore } from 'redux';
import { fromJS } from 'immutable';
import { shallow } from 'enzyme';

import {
  FormDemo,
  FormDemoConnected,
  mapDispatchToProps,
  mapStateToProps
} from './form-demo';



describe('<FormDemo />', () => {
  let formDemo;

  beforeAll(() => {
    formDemo = shallow(
      <FormDemo />
    );
  });

  test('basic dumb component render', () => {
    expect(formDemo).toMatchSnapshot();
  });
});



describe('<FormDemoConnected />', () => {
  let formDemoConnected;

  beforeAll(() => {
    const store = createStore(() => {});
    formDemoConnected = shallow(
      <FormDemoConnected store={ store } />
    );
  });

  test('render occurs through connection', () => {
    expect(formDemoConnected).toMatchSnapshot();
  });
});



describe('mapDispatchToProps', () => {
  test('processes the actions correctly', () => {
    expect(mapDispatchToProps).toMatchSnapshot();
  });
});



describe('mapStateToProps', () => {
  test('processes the state correctly', () => {
  const state = fromJS({});
    expect(mapStateToProps(state)).toMatchSnapshot();
  });
});
