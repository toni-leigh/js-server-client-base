import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import CatButton from '../cat-button';
import CatImage from '../cat-image';

import { getCat } from '../../actions/get-cat';

const CatWrapper = props => (
  <div className='crardx-cat-wrapper'>
    <CatImage imageSrc={ props.imageSrc } />
    <CatButton getCat={ props.getCat } />
  </div>
);

CatWrapper.propTypes = {
  getCat: PropTypes.func,
  imageSrc: PropTypes.string
};

const mapDispatchToProps = dispatch => {
  return {
    getCat: () => { dispatch(getCat()) }
  };
};

const mapStateToProps = (state, props) => {
  return {
    imageSrc: state.cat.imageSrc
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CatWrapper);
