import PropTypes from 'prop-types';
import React from 'react';

const CatButton = props => (
  <button
    className='crardx-cat-button'
    onClick={ props.getCat }
  >
    Get cat!
  </button>
);

CatButton.propTypes = {
  getCat: PropTypes.func
};

export default CatButton;
