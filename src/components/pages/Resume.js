import React from 'react'
import { Div, Flex, Link, Icon } from '../atoms'
import styled from 'styled-components'

const Container = styled(Div)`
  height: 100%;
`;

const Content = styled(Flex)`
  align-items: center;
  padding-bottom: 32px;
  display: flex;
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
  margin-bottom: 40px;
  &:hover {
    background: ${p => p.theme.colors.success};
  }
`;

function Resume(props) {
  const resumeUrl = "https://github.com/ronnielsen/ronnielsen.github.io/raw/master/public/photos/nielsen_resume.pdf"
  return (
    <Container bg="light">
      <Content>
        <ButtonLink href={resumeUrl}>
          <Icon name="Download" size="32px" mr="8px"/>
          Download Resume
        </ButtonLink>
        {props.theme === 'light' ? (<Img src="./photos/ResumeLight.jpg"/>) : (<Img src="./photos/ResumeDark.jpg"/>) }
      </Content>
    </Container>
  );
}

export default Resume;
