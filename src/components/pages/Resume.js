import React from 'react'
import { Div, Text, Flex, Link, Icon } from '../atoms'
import styled from 'styled-components'

const Container = styled(Div)`
  height: 100%;
`;

const Content = styled(Flex)`
  align-items: center;
  padding-bottom: 32px;
  display: flex;
`;

const Label = styled(Text)`
  border-bottom: 1px solid ${p => p.theme.colors.text};
  width: auto;
  padding: 8px 16px;
  margin: 32px 0px 32px 0px;
  display: inline-block;
  font-size: 24px;
  line-height: 32px;
  @media(max-width: 767px){
    margin-top: 16px;
  }
`;

const Img = styled.img`
  max-width: 720px;
  width: 100%;
  height: auto;
  object-fit: fit;
`;

const ButtonLink = styled(Link)`
  padding: 16px 32px;
  font-size: 24px;
  border-radius: 45px;
  background: ${p => p.theme.colors.dark};
  color: ${p => p.theme.colors.lightText};
  &:hover {
    background: ${p => p.theme.colors.success};
  }
`;

function Resume(props) {
  return (
    <Container bg="light">
      <Content>
        <Label value="Resumé"/>
        <ButtonLink
          href="https://github.com/ronnielsen/ronnielsen.github.io/raw/master/public/photos/ronnielsen_resume.pdf"
           mb="40px"
         >
          <Icon name="Download" size="32px" mr="8px"/>
          Download PDF
        </ButtonLink>
        {props.theme === 'light' ? (<Img src="./photos/ResumeLight.jpg"/>) : (<Img src="./photos/ResumeDark.jpg"/>) }
      </Content>
    </Container>
  );
}

export default Resume;
