import React from 'react'
import { Div, Text, Flex } from '../atoms'
import { InfoRow} from '../molecules'
import styled from 'styled-components'

const Container = styled(Div)`
  height: 100%;
`;

const Content = styled(Flex)`
  align-items: center;
  justify-content: center;
  padding-bottom: 32px;
  @media (max-width: 767px){
    padding-bottom: 0px;
  }
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
          desc="During this phase I organize features based on their importance to the project goals. I prefer to start with paper, and pencil for initial wireframes and workflows."
        />
        <InfoRow
          img="3"
          title="3. Establish Design System"
          desc="Early on, I like to build a system of UI compoents based on the wireframes in order to create a consistant pattern for interaction throughout the project. I will also establish a foundation around things such as colors, typography, and essential UI components, that will permeate through the project."
        />
        <InfoRow
          img="4"
          title="4. Iteration, and Repeatition"
          desc="From here I use Sketch/Figma/AdobeXD to layout these components onto artboards. I perfer to use an soft 8px grid to ensure that the UI creates easily recognizable visual patterns that will lead the user on their journey."
        />
        <InfoRow
          img="5"
          title="5. Prototyping & Revisions"
          desc="Once all requirements are met with the deisgn, I like to create a rapid-prototype in React using styled-component, and styled-system. Then I revise until everyone is satisfied. Often the best UX refinements happen as you begin to use what you are building."
        />
        <InfoRow
          img="6"
          title="6. Development"
          desc="This is my favorite part, making my designs real! I strive to create the most amount of UI with the least amount of code, and that means creating a library of reusable, and highly-customizable components that can be used throughout the project by myself or other developers."
        />
      </Content>
    </Container>
  );
}

export default Process;
