import React, {useState} from 'react'
import { Div, Text, Button, Icon } from '../atoms'
import { Header, Preview } from '../molecules'
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
`;

const Hero = styled(Div)`
  height: 80vh;
  background: ${p => p.theme.colors.dark};
  color: ${p => p.theme.colors.lightText};
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 64px;
  font-weight: 700;
  @media(max-width: 767px){
    font-size: 32px;
    height: 50vh;
  }
`;

const Group = styled(Div)`
  max-width: 960px;
  transition-duration: 500ms;
  font-weight: 400;
  padding: 64px;
  @media(max-width: 767px){
      padding: 32px;
  }
`;

const StyledButton = styled(Button)`
  font-size: ${p => p.theme.fontSizes.md};
  padding: ${p => p.theme.space.xs} ${p => p.theme.space.md};
  border-radius: 45px;
  margin-left: 0px;
  background: ${p => p.theme.colors.light};
  color: ${p => p.theme.colors.dark};
  &:hover {
    background: ${p => p.theme.colors.success};
    color: ${p => p.theme.colors.lightText};
    transition-duration: 250ms;
  }
  @media(max-width: 767px){
    font-size: 18px;
  }
`;

const Section = styled(Div)`
  width: 100%;
  align-items: center;
  justify-content: center;
  background: ${p => p.theme.colors.light};
  text-align: center;
  line-height: 48px;
  flex-direction: column;
  padding: 32px 64px;
  @media(max-width: 1280px){
    padding: 32px 0px;
  }
  @media(max-width: 767px){
    padding: 0px 0px;
  }
`;

const Label = styled(Div)`
  border-bottom: 1px solid ${p => p.theme.colors.text};
  width: 100px;
  display: inline-block;
  font-size: 24px;
  @media(max-width: 767px){
    margin-top: 16px;
  }
`;

const Row = styled(Div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ContactRow = styled(Div)`
  font-size: 32px;
  line-height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media(max-width: 767px){
    font-size: 18px;
    line-height: 32px;
  }
`;

const StyledLink = styled.a`
  color: ${p => p.theme.colors.lightText};
  text-decoration: underline;
`;

const Bold = styled(Div)`
  font-weight: 900;
  display: inline-block;
`;

const Image = styled.img`
  width: 100%;
  height: 720px;
  min-height: 100%;
  object-fit: cover;
  transition-duration: 250ms;
  animation: ${fadeIn} 500ms linear;
  @media(max-width: 768px){
    height: 420px;
  }
`;

function Home(props) {
  const [contact, showContact] = useState(false);
  const Contact = styled(Div)`
    display: ${contact ? 'block' : 'none'};
    animation: ${fadeIn} 500ms linear;
  `;
  return (
    <Container>
      <Header />
      <Hero>
        <Group>
          I'm a <Bold>Product Designer,</Bold> who can code front-end.
          {contact ? (<div/>) : (<StyledButton label="Get in touch" onClick={() => showContact(true)}/>)}
          <Contact my="8px">
            <ContactRow><Icon name="Mail" mr="16px"/> ronaldnielsen@gmail.com</ContactRow>
            <ContactRow>
              <Icon name="Linkedin" mr="16px"/>
              <StyledLink
                href="https://www.linkedin.com/in/rniels">
                linkedin.com/in/rniels
              </StyledLink>
            </ContactRow>
            <StyledButton onClick={() => showContact(false)}>Got it!</StyledButton>
          </Contact>
        </Group>
      </Hero>
      <Section>
        <Label mb="32px">Portfolio</Label>
        <Row>
          <Preview
            name="Design System Foundation"
            desc="Driven by the need to quickly jump into new projects, I created this foundational system of UI components called Design System Foundation. The foundations of the system are comprised of colors, typography, and icons. I used these foundations to create a small library of flexible UI symbols/components. These components can be used to quickly create a wide variety of experiences. I also coded this system in React as a framework for this website, and future projects."
            role="Design and Development"
            tools="React, Storybook, Sketch"
          >
            <Image src={'./photos/welcome-square-min.jpg'}></Image>
          </Preview>
          <Preview
            name="365Pay"
            desc="I became involved in this project once developers had established their own style, which had taken direction “inspiration” from other apps such as Outlook, Starbucks, and Whole Foods. My first task was to establish a color template in order to be able to re-skin this app for other clients. Then I recreated what had already been created in Sketch, and established a reusable library of UI symbols that I could then push into a more unique a distinctive direction that also united the look-and-feel of all of their other products. For each of the unique workflow requirements, I worked with Product Managers on getting the primary workflows correct using Overflow, then I created UI in Sketch, and created clickable prototypes in Invision. I also contributed to front-end styling in React Native app."
            role="Design and Front-end Styling"
            tools="React Native, Sketch, Overflow, Invision"
          >
            <Image src={'./photos/mobile-min.jpg'}></Image>
          </Preview>
          <Preview
            name="365 Design System"
            desc="At 365 the challenge was to create a unified template-driven look and feel across several various platforms. To accomplish this, I established a standard of colors, typography, and components in Sketch to be used in all future designs. Working with a developer, we created a React library of reusable UI with styled-components. These components were easy to template by connecting them to styled-systems. My goal was to make it super-easy for any developer to create UI that is consistant. We used Storybook to document all the props for each component. This system ended up greatly increasing the speed at which we could create interfaces, and allowed me to create rapid prototypes fast."
            role="Product Design, Front-end Development"
            tools="React, Storybook, Sketch"
          >
            <Image src={'./photos/design-system-min.jpg'}></Image>
          </Preview>
          <Preview
            name="Portfolio Website"
            desc="I made this portfolio in React, using the Design System Foundation referenced above. Checkout the repo to see what I used:..."
            role="Product Design, Front-end Development"
            tools="React, Storybook, Sketch"
          >
            <Image src={'./photos/portfolio.jpg'}></Image>
          </Preview>
        </Row>
      </Section>
    </Container>
  );
}

export default Home;
