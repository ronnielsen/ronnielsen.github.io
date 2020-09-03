import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  color,
  layout,
  space,
  flexbox,
  border,
  typography,
  variant
} from 'styled-system';

const StyledButton = styled('button')(
  {
    border: 'none',
    outline: 'none',
    fontWeight: 'bold',
    display: 'flex',
    '&:active': {
      opacity: .75,
    }
  },
  color,
  layout,
  space,
  flexbox,
  border,
  typography,
  variant({
    variants: {
      xs: {
        px: 'xs',
        py: 'xxs',
        fontSize: 'xs',
        lineHeight: 'xs',
        borderRadius: 'md',
      },
      sm: {
        px: 'sm',
        py: 'xxs',
        fontSize: 'sm',
        lineHeight: 'sm',
        borderRadius: 'md',
      },
      md: {
        px: 'sm',
        py: 'xxs',
        fontSize: 'md',
        lineHeight: 'md',
        borderRadius: 'lg',
      },
      mdPill: {
        px: 'sm',
        py: 'xxs',
        fontSize: 'md',
        lineHeight: 'md',
        borderRadius: 'xl',
        margin: 'xxxs',
        fontWeight: 'light',
        backgroundColor: 'tab',
        color: 'black'
      },
      mdPillActive: {
        px: 'sm',
        py: 'xxs',
        fontSize: 'md',
        lineHeight: 'md',
        borderRadius: 'xl',
        margin: 'xxxs',
        fontWeight: 'light',
        backgroundColor: 'primary',
        color: 'white'
      },
      lg: {
        px: 'md',
        py: 'xxs',
        fontSize: 'lg',
        lineHeight: 'lg',
        borderRadius: 'lg',
      },
      xl: {
        px: 'md',
        py: 'xs',
        fontSize: 'xl',
        lineHeight: 'xl',
        borderRadius: 'lg',
      },
      xxl: {
        px: 'xl',
        py: 'sm',
        fontSize: 'xxl',
        lineHeight: 'xxl',
        borderRadius: 'xl',
      },
      xlCircle: {
        height: 'xl',
        width: 'auto',
        // width: 'xl',
        minWidth: 'xl',
        margin: 'xxs',
        borderRadius: 'xl',
        backgroundColor: 'primary',
        padding: '.75rem',
        flex: '0 1 0'
      },
      xlCircleGhostDark: {
        height: 'xl',
        // width: 'xl',
        minWidth: 'xl',
        width: 'auto',
        margin: 'xxs',
        borderRadius: 'xl',
        backgroundColor: 'ghostdark',
        color: 'white',
        padding: '.75rem',
        flex: '0 1 0'
      }

    }
  })
);

function Button(props) {
  return (
    <StyledButton
      px="xs"
      py="xxs"
      m="xs"
      fontSize="sm"
      color="lightText"
      borderRadius="md"
      bg="primary"
      {...props}>
      {props.prepend}
      {props.children}
      {props.icons}
      {props.label}
      {props.subMessage}
      {props.append}
    </StyledButton>
  );
}

Button.propTypes = {
  /** Text content */
  label: PropTypes.any,
  /** Text content */
  name: PropTypes.string,
  /** Text content */
  subMessage: PropTypes.object,
  /** Background color */
  bg: PropTypes.string,
  /** Text color */
  color: PropTypes.string,
  /** Roundness of corners */
  borderRadius: PropTypes.string
}

export default Button;
