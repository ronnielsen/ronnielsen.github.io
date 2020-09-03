import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  color,
  space,
  border,
  typography,
  layout,
  shadow,
  flexbox,
  grid,
  position,
  background,
  variant
} from 'styled-system';


const StyledImg = styled('img')(
  {

  },
  color,
  space,
  border,
  typography,
  layout,
  shadow,
  flexbox,
  grid,
  position,
  background,
  variant({
    variants: {
      cover: {
        objectFit: 'cover',
        width: '100%',
        height: '100%'
      },
      contain: {
        objectFit: 'contain',
        width: '100%',
        height: '100%'
      },
      logo: {
        objectFit: 'contain',
        height: '100%'
      },
      background: {
        position: 'absolute',
        zIndex: '-1',
        objectFit: 'cover',
        minWidth: '100%',
        minHeight: '100%',
      }
    }
  })
);


function Img(props) {
  return (
    <StyledImg variant={props.variant} src={require('../../img/' + props.location + '/' + props.name + '.' + props.fileType)} alt={props.name}  {...props} />


  );
}

Img.propTypes = {
  /** Image type */
  variant: PropTypes.string,
  /** File location of the image starting within the img folder */
  location: PropTypes.string,
  /** File name for use and alt name */
  name: PropTypes.string,
  /** File format */
  fileType: PropTypes.string,
}

export default Img;
