import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

const CatWrapper = props => (
  <div className='crardx-cat-wrapper'>
    Test
  </div>
);

CatWrapper.propTypes = {};

const mapDispatchToProps = dispatch => {
  return { };
};

const mapStateToProps = (state, props) => {
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(CatWrapper);
