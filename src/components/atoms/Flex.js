import React from 'react';
import PropTypes from 'prop-types';
import { Div } from './';
import styled from 'styled-components';

const Container = styled(Div)`
  display: flex;
  flex: 1;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: ${props => props.centered ? 'center' : 'flex-start'};
  align-items: ${props => props.centered ? 'center' : 'flex-start'};
  align-self: stretch;
  width: ${props => props.row ? '100%' : 'auto'};
`;

function Flex(props) {
  return (
    <Container {...props}>
      {props.children}
    </Container>
  )
}

Flex.propTypes = {
  /** Set flex direction as row */
  row: PropTypes.bool,
  /** Set align-items and justify-content to center */
  centered: PropTypes.bool,
}

export default Flex;
