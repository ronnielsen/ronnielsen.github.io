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

// const StyledDiv = styled.div`
//   ${color}
//   ${space}
//   ${border}
//   ${typography}
//   ${layout}
//   ${shadow}
//   ${flexbox}
//   ${grid}
//   ${position}
//   ${background}
// `;


const StyledDiv = styled('div')(
  {
    boxSizing: 'border-box',
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
      controlsTR: {
        position: 'absolute',
        top: '0px',
        right: '0px',
        display: 'flex',
        flex: '0 1 auto',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        padding: 'xxs'
      }
    }
  })
);


function Div(props) {
  return (
    <StyledDiv {...props}>
      {props.children}
    </StyledDiv>
  );
}

Div.propTypes = {
  children: PropTypes.any,
  margin: PropTypes.string,
  /** margin */
  m: PropTypes.string,
  /** margin top */
  mt: PropTypes.string,
  /** margin right */
  mr: PropTypes.string,
  /** margin bottom */
  mb: PropTypes.string,
  /** margin left */
  ml: PropTypes.string,
  /** margin left and right */
  mx: PropTypes.string,
  /** margin top and bottom */
  my: PropTypes.string,
  /** padding */
  p: PropTypes.string,
  /** padding top */
  pt: PropTypes.string,
  /** padding right */
  pr: PropTypes.string,
  /** padding bottom */
  pb: PropTypes.string,
  /** padding left */
  pl: PropTypes.string,
  /** padding left and right */
  px: PropTypes.string,
  /** padding top and bottom */
  py: PropTypes.string,

  /** color */
  color: PropTypes.string,
  /** background color */
  backgroundColor: PropTypes.string,
  /** background color */
  bg: PropTypes.string,


  /** font size */
  fontSize: PropTypes.any,
  /** font family */
  fontFamily: PropTypes.string,
  /** text align */
  textAlign: PropTypes.string,
  /** line height */
  lineHeight: PropTypes.string,
  /** font weight */
  fontWeight: PropTypes.string,
  /** letter spacing */
  letterSpacing: PropTypes.string,
  /** font style */
  fontStyle: PropTypes.string,

  /** width */
  width: PropTypes.any,
  /** height */
  height: PropTypes.any,
  /** minimum width */
  minWidth: PropTypes.any,
  /** minimum height */
  minHeight: PropTypes.any,
  /** maximum width */
  maxWidth: PropTypes.any,
  /** maximum height */
  maxHeight: PropTypes.any,
  /** display */
  display: PropTypes.any,
  /** size */
  size: PropTypes.any,
  /** vertical align */
  verticalAlign: PropTypes.any,
  /** overflow */
  overflow: PropTypes.any,
  /** overflow x axis */
  overflowX: PropTypes.any,
  /** overflow y axis */
  overflowY: PropTypes.any,

  /** align items */
  alignItems: PropTypes.string,
  /** align self */
  alignSelf: PropTypes.string,
  /** justify content */
  alignContent: PropTypes.string,
  /** justify items */
  justifyItems: PropTypes.string,
  /** justify self */
  justifySelf: PropTypes.string,
  /** justify content */
  justifyContent: PropTypes.string,
  /** flex wrap */
  flexWrap: PropTypes.string,
  /** flex direction */
  flexDireaction: PropTypes.string,
  /** flex */
  flex: PropTypes.string,
  /** flex grow */
  flexGrow: PropTypes.string,
  /** flex shrink */
  flexShrink: PropTypes.string,
  /** flex basis */
  flexBasis: PropTypes.string,
  /** order */
  order: PropTypes.string,

  /** grid gap */
  gridGap: PropTypes.string,

  /** position */
  position: PropTypes.string,
  /** top */
  top: PropTypes.string,
  /** right */
  right: PropTypes.string,
  /** bottom */
  bottom: PropTypes.string,
  /** left */
  left: PropTypes.string,

}

export default Div;
