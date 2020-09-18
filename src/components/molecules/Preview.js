import React from 'react';
import { Div } from '../atoms';
import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`;

const Container = styled(Div)`
  display: flex;
  border-radius: 32px;
  box-shadow: ${p => p.theme.colors.card};
  width: 100%;
  overflow: hidden;
  text-align: left;
  max-width: 740px;
  margin: 0px 32px 32px 32px;
  flex-direction: column;
  align-self: flex-start;
  animation: ${fadeIn} 500ms linear;
  &:hover {
    box-shadow: 0px 0px 0px 2px ${p => p.theme.colors.border};
  }
  @media(max-width: 1023px){
    margin: 0px 16px 16px 16px;
  }
  @media(max-width: 767px){
    margin: 0px 0px 16px 0px;
  }
`;

const Details = styled(Div)`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 32px;
  @media(max-width: 1023px){
    max-width: 100%;
  }
`;

const Name = styled(Div)`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 48px;
`;

const Desc = styled(Div)`
  font-size: 18px;
  line-height: 32px;
  flex: 1;
`;

const Role = styled(Div)`
  color: ${p => p.theme.colors.secondaryText};
  line-height: 24px;
`;

const Tools = styled(Role)`
  border-bottom: 2px solid ${p => p.theme.colors.border};
  margin-bottom: 16px;
  padding-bottom: 16px;
`;

function Preview(props) {
  return (
    <Container {...props}>
      {props.children}
      <Details>
        <Name>{props.name || 'Sample Name'}</Name>
        <Role>Role: {props.role || 'UI/UX Design, Branding, Front-end Development'}</Role>
        <Tools>Tools: {props.tools || 'Sketch, React'}</Tools>
        <Desc>{props.desc || 'The fox jumped over the bridge, to steal a hotdog.'}</Desc>
      </Details>
    </Container>
  );
}

export default Preview;
