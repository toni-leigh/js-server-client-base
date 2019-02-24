import { connect } from 'react-redux';
import immutableToJS from 'with-immutable-props-to-js';
import PropTypes from 'prop-types';
import React from 'react';

import CatButton from '../cat-button';
import CatImage from '../cat-image';

import { getCat } from '../../actions/get-cat';

const CatWrapper = ({ getCat, imageSrc }) => (
  <div className='crardx-cat-wrapper'>
    <CatImage imageSrc={ imageSrc } />
    <CatButton getCat={ getCat } />
  </div>
);

CatWrapper.propTypes = {
  getCat: PropTypes.func,
  imageSrc: PropTypes.string
};

const mapDispatchToProps = {
  getCat
};

const mapStateToProps = (state) => {
  return ({
    imageSrc: state.getIn(['cat', 'imageSrc'])
  });
}

const CatWrapperConnected = connect(mapStateToProps, mapDispatchToProps)(immutableToJS(CatWrapper));

export {
  CatWrapper,
  CatWrapperConnected,
  mapDispatchToProps,
  mapStateToProps
};
