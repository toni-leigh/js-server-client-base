import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import CatWrapperConnected, { CatWrapper } from './cat-wrapper';
import rootReducer from '../../reducers/reducers';

const store = createStore(rootReducer);

describe('<CatWrapperConnected />', () => {
  let catWrapperConnected;

  beforeAll(() => {
    catWrapperConnected = shallow(
      <CatWrapperConnected store={ store }/>
    );
  });

  test('render occurs through connection', () => {
    expect(catWrapperConnected).toMatchSnapshot();
  });
});

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
