import React, { Component } from 'react';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';

import rootReducer from './client/reducers/reducers';

import { CatWrapperConnected } from './client/components/cat-wrapper';
import { ApiDemoConnected } from './client/components/api-demo';

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
      <Provider store={ store }>
        <div>
          <ApiDemoConnected />
          <CatWrapperConnected />
        </div>
      </Provider>
    );
  }
}

export default App;
