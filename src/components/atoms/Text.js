import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

import PropTypes from 'prop-types';
import { color, layout, space, typography, border } from 'styled-system';

const StyledText = styled('p')(
  {
    margin: 0,
    padding: 0,
    fontWeight: props => props.bold ? '700' :  '500',
  },
  color,
  layout,
  space,
  border,
  typography,
  variant({
    variants: {
      xxs: {
        fontSize: 'xxs',
        lineHeight: 'xs',
      },
      xs: {
        fontSize: 'xs',
        lineHeight: 'xs',
      },
      sm: {
        fontSize: 'sm',
        lineHeight: 'sm',
      },
      md: {
        fontSize: 'md',
        lineHeight: 'md',
      },
      lg: {
        fontSize: 'lg',
        lineHeight: 'lg',
      },
      xl: {
        fontSize: 'xl',
        lineHeight: 'xl',
      },
      xxl: {
        fontSize: 'xxl',
        lineHeight: 'xxl',
      },
      xxxl: {
        fontSize: 'xxxl',
        lineHeight: 'xxxl',
      }
    }
  })
);

function Text(props) {
  return (
    <StyledText color="dark" {...props}>
      {props.children}
      {props.value}
    </StyledText>
  );
}

Text.propTypes = {
  fontSize: PropTypes.string,
  value: PropTypes.string,
}

export default Text;
