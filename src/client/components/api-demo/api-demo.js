import { connect } from 'react-redux';
import immutableToJS from 'with-immutable-props-to-js';
import PropTypes from 'prop-types';
import React from 'react';

import { getHardcodedTextAction } from '../../actions/get-hardcoded-text';
import './api-demo.scss';

class ApiDemo extends React.Component {
  static propTypes = {
    getHardcodedText: PropTypes.func,
    hardcodedText: PropTypes.string
  };

  componentDidMount() {
    this.props.getHardcodedText();
  }

  render() {
    return (
      <div className='server-client-api-demo'>
        { this.props.hardcodedText }
      </div>
    );
  }
}

const mapDispatchToProps = {
  getHardcodedText: getHardcodedTextAction
};

const mapStateToProps = (state) => {
  return ({
    hardcodedText: state.get('hardcodedText')
  });
}

const ApiDemoConnected = connect(mapStateToProps, mapDispatchToProps)(immutableToJS(ApiDemo));

export {
  ApiDemo,
  ApiDemoConnected,
  mapDispatchToProps,
  mapStateToProps
};
