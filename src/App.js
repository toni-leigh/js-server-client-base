import React, { Component } from 'react';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';

import rootReducer from './reducers/reducers';

import { CatWrapperConnected } from './components/cat-wrapper';

const store = createStore(
  rootReducer,
  fromJS({}),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={ store }><CatWrapperConnected /></Provider>
    );
  }
}

export default App;
