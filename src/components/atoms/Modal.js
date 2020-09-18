
import React from 'react';
import styled from 'styled-components';
import { Div } from '.';
import PropTypes from 'prop-types';
import {
  color,
  layout,
  space,
  flexbox,
  border,
  typography
} from 'styled-system';

const StyledDiv = styled(Div)(
  {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    display: 'flex',
    zIndex: '1',
    backgroundColor: 'white',
    overflow: 'auto'
  },
  color,
  layout,
  space,
  flexbox,
  border,
  typography,
);



function Modal(props) {
  return (
    <StyledDiv {...props}>
      {props.children}
    </StyledDiv>
  );
}

Modal.propTypes = {
  /** File location of the image starting within the img folder */
  location: PropTypes.string,
  /** File name for use and alt name */
  name: PropTypes.string,
  /** File format */
  fileType: PropTypes.string,

}

export default Modal;
