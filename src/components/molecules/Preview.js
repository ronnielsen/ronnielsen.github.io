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
  &:hover {
    box-shadow: 0px 0px 0px 2px ${p => p.theme.colors.border};
  }
  @media(max-width: 1023px){
    margin: 0px 16px 32px 16px;
  }
  @media(max-width: 767px){
    margin: 0px 0px 32px 0px;
  }
`;

const Details = styled(Div)`
  width: 100%;
  background: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.text};
  display: flex;
  flex-direction: column;
  padding: 32px;
  @media(max-width: 1023px){
    max-width: 100%;
    padding: 32px 16px;
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
  border-bottom: 1px solid ${p => p.theme.colors.border};
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
        {props.links}
      </Details>
    </Container>
  );
}

export default Preview;
