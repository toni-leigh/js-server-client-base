import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/reducers';

import CatWrapper from './components/cat-wrapper';

const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={ store }><CatWrapper /></Provider>
    );
  }
}

export default App;
