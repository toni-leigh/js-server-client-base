import PropTypes from 'prop-types';
import React from 'react';

const CatImage = props => (
  <img
    alt='Cute kitten'
    className='crardx-cat-image'
    src={ props.imageSrc }
  />
);

CatImage.propTypes = {
  imageSrc: PropTypes.string
};

export default CatImage;
