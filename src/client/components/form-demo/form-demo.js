import { connect } from 'react-redux';
import immutableToJS from 'with-immutable-props-to-js';
import PropTypes from 'prop-types';
import React from 'react';

import './form-demo.scss';

const FormDemo = props => (
  <form className='server-client-form-demo'>
    FormDemo
  </form>
);

FormDemo.propTypes = {};

const mapDispatchToProps = {};

const mapStateToProps = (state) => state;

const FormDemoConnected = connect(mapStateToProps, mapDispatchToProps)(immutableToJS(FormDemo));

export {
  FormDemo,
  FormDemoConnected,
  mapDispatchToProps,
  mapStateToProps
};
