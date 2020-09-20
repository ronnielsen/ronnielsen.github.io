import React from 'react';
import { Div } from './';
import styled from 'styled-components';

const Container = styled(Div)`
  b {
    font-weight: 900;
  }
`;

function GlobalStyles(props) {
  return (
    <Container {...props}>
      {props.children}
    </Container>
  )
}

export default GlobalStyles;
