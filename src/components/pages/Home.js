import React, {useState} from 'react'
import { Div, Icon } from '../atoms'
import { Hero, Portfolio } from '../organisms'
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
  padding-bottom: 48px;
  background: ${p => p.theme.colors.white}
`;

const ToTop = styled(Div)`
  position: fixed;
  bottom: 16px;
  right: 16px;
  padding: 8px;
  border-radius: 45px;
  background: ${p => p.theme.colors.dark};
  animation: ${fadeIn} 250ms linear;
`;

function Home(props) {
  const [scrolled, hasScrolled] = useState(false);
  const scrollTop = () => {
   window.scrollTo({top: 0, behavior: 'smooth'});
  };
  window.addEventListener('scroll', function() {
    if(window.scrollY >= 200) {
        hasScrolled(true)
      }
  });
  window.addEventListener('scroll', function() {
    if(window.scrollY < 200) {
        hasScrolled(false)
      }
  });
  return (
    <Container>
      <Hero/>
      <Portfolio/>
      {scrolled && <ToTop onClick={scrollTop}><Icon name="ArrowUp" color="white"/></ToTop>}
    </Container>
  );
}

export default Home;
