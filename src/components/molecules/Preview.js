import React from 'react';
import PropTypes from 'prop-types';
import { Div } from '../atoms';
import styled from 'styled-components'

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

const Image = styled.img`
  width: 100%;
  height: 720px;
  min-height: 100%;
  object-fit: cover;
  transition-duration: 250ms;
  @media(max-width: 768px){
    height: 420px;
  }
`;

function Preview(props) {
  return (
    <Container {...props}>
      <Image src={props.image ? './photos/' + props.image + '.jpg' : props.url}/>
      <Details>
        <Name>{props.title || '{title}'}</Name>
        <Role>Role: {props.role || '{role}'}</Role>
        <Tools>Tools: {props.tools || '{tools}'}</Tools>
        <Desc>{props.desc || '{desc}'}</Desc>
        {props.links}
      </Details>
    </Container>
  );
}

Preview.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  role: PropTypes.string,
  tools: PropTypes.string,
  desc: PropTypes.string
}

export default Preview;
