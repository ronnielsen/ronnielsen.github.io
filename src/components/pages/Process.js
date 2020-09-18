import React from 'react'
import { Div, Text, Flex } from '../atoms'
import { Header, InfoRow} from '../molecules'
import styled from 'styled-components'

const Container = styled(Div)`
  height: 100%;
`;

const Content = styled(Flex)`
  align-items: center;
  justify-content: center;
  padding-bottom: 32px;
`;

const Label = styled(Text)`
  border-bottom: 1px solid ${p => p.theme.colors.text};
  width: auto;
  padding: 8px 16px;
  margin: 32px 0px 32px 0px;
  display: inline-block;
  font-size: 24px;
  @media(max-width: 767px){
    margin-top: 16px;
  }
`;

function Process(props) {
  return (
    <Container bg="light">
      <Header/>
      <Content>
        <Label value="My process"/>
        <InfoRow
          img="1"
          title="1. Listening and Research"
          desc="First I identify the project missions, and requirements. It's always a good idea to look at current real world examples as a starting point for ideation."
        />
        <InfoRow
          img="2"
          title="2. Brainstorm"
          desc="I like organize features by heirarchical importance to the project goals. Paper, and pencil is my favorite way to do initial layouts, ideas and flows."
        />
        <InfoRow
          img="3"
          title="3. Establish Design System"
          desc="Once I have a rough sketch of the UI I want to create, I establish a design system around things such as colors, typography, and essential UI components."
        />
        <InfoRow
          img="4"
          title="4. Iteration, and Repeatition"
          desc="From here, I begin laying out components from the design system onto artboards. I perfer to use an 8px grid to make ensure that my UI can create easily recognizable visual patterns."
        />
        <InfoRow
          img="5"
          title="5. Prototyping & Revisions"
          desc="Once I'm happy with the design, I like to create a rapid-prototype in React front-end, then revise until everyone is satisfied."
        />
        <InfoRow
          img="6"
          title="6. Development"
          desc="This is my favorite part, making my designs real! I strive to create the most amount of UI with the least amount of code."
        />
      </Content>
    </Container>
  );
}

export default Process;
