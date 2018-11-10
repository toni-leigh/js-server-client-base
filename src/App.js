import React, { Component } from 'react';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/reducers';

import CatWrapper from './components/cat-wrapper';

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={ store }><CatWrapper /></Provider>
    );
  }
}

export default App;
