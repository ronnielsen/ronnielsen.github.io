import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
  background
} from 'styled-system';

const StyledInput = styled.input`
  border-radius: 8px;
  border: none;
  padding: 8px 16px;
  background-color: ${p => p.theme.colors.light};
  color: ${p => p.theme.colors.black};
  outline: none;
  box-shadow: 0px 1px 2px 1px rgba(0,0,0,.24);
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.sm};
  width: 100%;
  &:hover {
    filter: brightness(.95);
  }
  &:focus {
    box-shadow: 0px 0px 0px 4px ${p => p.theme.colors.focus};
    transition-duration: 400ms;
    background: ${p => p.theme.colors.fill};
  }
  ${color}
  ${space}
  ${border}
  ${typography}
  ${layout}
  ${shadow}
  ${flexbox}
  ${grid}
  ${position}
  ${background}
`;

function Input(props) {
  return (
    <StyledInput>
      {props.children}
    </StyledInput>
  )
}

Input.propTypes = {
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Text content */
  options: PropTypes.array,
}

export default Input;
