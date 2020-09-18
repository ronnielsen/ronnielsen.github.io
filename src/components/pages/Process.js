import React from 'react'
import { Div, Text, Flex, Button } from '../atoms'
import { Header, InfoRow} from '../molecules'
import { Link } from "react-router-dom";
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
          desc="Identify the project missions, and requirements. Most project aren’t entirely new concepts, existing solutions to any requirements can be found both online and in the real world."
        />
        <InfoRow
          img="2"
          title="2. Brainstorm"
          desc="Logically organize required features into a heirarchical order, then group similar features together to create relation by proximity in my layouts."
        />
        <InfoRow
          img="3"
          title="3. Establish Design System"
          desc="This step is key to setting yourself up for success. You must define things such as space, colors, and typography, to establish aesthetical consistency early on."
        />
        <InfoRow
          img="4"
          title="4. Iteration, and Repeatition"
          desc="Using the design system and my trusty 8px grid, I iterate the layout of features in greyscale initially. Once I’m happy with the layout, I apply touches of color to help lead users on their journey."
        />
        <InfoRow
          img="5"
          title="5. Prototyping & Revisions"
          desc="Once I figure out the UI/UX, I like to create a rapid-prototype in real front-end, to reveal any potential problems in the design. Then I revise until everyone is satisfied with the design, and experience."
        />
        <InfoRow
          img="6"
          title="6. Development"
          desc="My favorite thing to do is figure out how to create the most amount of UI with the least amount of code/components. Writing clean front-end code is oddly satisfying and I love to making my designs into functional."
        />
      </Content>
    </Container>
  );
}

export default Process;
