import React, {useState} from 'react'
import { Div, Button, Icon } from '../atoms'
import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

function Hero() {
  const [contact, showContact] = useState(false);

  const Contact = styled(Div)`
    display: ${contact ? 'block' : 'none'};
    animation: ${fadeIn} 500ms linear;
  `;

  const Hero = styled(Div)`
    height: 75vh;
    background: ${p => p.theme.colors.light};
    color: ${p => p.theme.colors.text};
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
    background: ${p => p.theme.colors.dark};
    color: ${p => p.theme.colors.lightText};
    &:hover {
      background: ${p => p.theme.colors.success};
      color: ${p => p.theme.colors.white};
      transition-duration: 250ms;
    }
    @media(max-width: 767px){
      font-size: 18px;
    }
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
    color: ${p => p.theme.colors.text};
    text-decoration: underline;
  `;

  const Bold = styled(Div)`
    font-weight: 900;
    display: inline-block;
  `;

  return (
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
  );
}

export default Hero
