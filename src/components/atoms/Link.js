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

const StyledLink = styled('a')(
  {
    border: 'none',
    outline: 'none',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: props => props.theme.fontSizes.sm,
    color: props => props.theme.colors.lightText,
    backgroundColor: props => props.theme.colors.primary,
    textDecoration: 'none',
    width: props => props.fullWidth ? '100%' : 'auto',
    transitionDuration: '240ms',
    '&:hover': {
      filter: 'brightness(1.1)',
    },
    '&:active': {
      filter: 'brightness(.9)',
    },
  },
  color,
  layout,
  space,
  flexbox,
  border,
  typography,
  variant({
    sizes: {
      small: {
        fontSize: '100px',
      },
    },
    variants: {
      plain: {
        backgroundColor: 'plain',
        color: 'text',
        fontWeight: '400',
        '&:hover': {
          filter: 'brightness(.75)',
        },
        '&:active': {
          filter: 'brightness(0.5)',
        }
      },
      subtle: {
        backgroundColor: 'transparent',
        color: 'text',
        fontWeight: '400',
        '&:hover': {
          filter: 'brightness(.9)',
        },
        '&:active': {
          backgroundColor: 'focus',
          filter: 'brightness(1)',
        }
      },
      link: {
        color: 'primary',
        backgroundColor: 'transparent',
        fontWeight: '400',
        '&:hover': {
          textDecoration: 'underline',
          filter: 'brightness(1.1)',
        },
        '&:active': {
          filter: 'brightness(.9)',
          textDecoration: 'none',
        }
      }
    }
  })
);

function Link(props) {
  return (
    <StyledLink
      m="xs"
      borderRadius="md"
      {...props}>
      {props.prepend}
      {props.label}
      {props.children}
      {props.append}
    </StyledLink>
  );
}

Link.propTypes = {
  /** Text content */
  label: PropTypes.any,
  /** Background color */
  bg: PropTypes.string,
  /** Text color */
  color: PropTypes.string,
  /** Roundness of corners */
  borderRadius: PropTypes.string
}

export default Link;
