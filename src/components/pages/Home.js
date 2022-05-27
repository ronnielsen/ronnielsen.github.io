import React, {useState} from 'react'
import { Div, Icon, Link } from '../atoms'
import { Preview, Hero } from '../molecules';
import styled, {keyframes} from 'styled-components'
import { portfolio } from '../../data'

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

const Section = styled(Div)`
  width: 100%;
  align-items: center;
  justify-content: center;
  background: ${p => p.theme.colors.white};
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
  color: ${p => p.theme.colors.text};
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

const ButtonIcon = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 8px;
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
      <Section>
        <Label mb="32px">Portfolio</Label>
        <Row>
          <Preview
            title={portfolio[0].title}
            desc={portfolio[0].desc}
            role={portfolio[0].role}
            tools={portfolio[0].tools}
            image={props.theme === 'light' ? "overviewlight" : "overview"}
            links={
              <div>
                <Link href="https://ronnielsen.github.io/dashboard" target="_blank">
                  <Icon name="Globe" mr="8px"/>
                  View Demo Site
                </Link>
                <Link href="https://github.com/ronnielsen/dashboard" target="_blank">
                  <Icon name="Github" mr="8px"/>
                  View GitHub
                </Link>
              </div>
            }
          />
          <Preview
            title={portfolio[1].title}
            desc={portfolio[1].desc}
            role={portfolio[1].role}
            tools={portfolio[1].tools}
            image={props.theme === 'light' ? "adoptylight" : "adopty"}
            links={
              <div>
                <Link href="https://ronnielsen.github.io/adopty" target="_blank">
                  <Icon name="Globe" mr="8px"/>
                  View Demo Site
                </Link>
                <Link href="https://github.com/ronnielsen/adopty" target="_blank">
                  <Icon name="Github" mr="8px"/>
                  View GitHub
                </Link>
              </div>
            }
          />
          <Preview
            title={portfolio[2].title}
            desc={portfolio[2].desc}
            role={portfolio[2].role}
            tools={portfolio[2].tools}
            image="welcome-square"
            links={
              <div>
                <Link href="https://www.figma.com/file/1womk4oSoioTtGNahFuwRo/Design-System-Foundation?node-id=108%3A95" target="_blank">
                  <ButtonIcon src="./photos/figma.png" mr="8px"/>
                  View in Figma
                </Link>
                <Link href="https://www.figma.com/community/file/1007839545438281461/Design-System-Foundation" target="_blank">
                  <ButtonIcon src="./photos/figma.png" mr="8px"/>
                  Figma Community Page
                </Link>
              </div>
            }
          />
          <Preview
            title={portfolio[3].title}
            desc={portfolio[3].desc}
            role={portfolio[3].role}
            tools={portfolio[3].tools}
            image="selfcheckout"
          />
          <Preview
            title={portfolio[4].title}
            desc={portfolio[4].desc}
            role={portfolio[4].role}
            tools={portfolio[4].tools}
            image="mobile"
          />
          <Preview
            title={portfolio[6].title}
            desc={portfolio[6].desc}
            role={portfolio[6].role}
            tools={portfolio[6].tools}
            image="design-system-min"
          />
          <Preview
            title={portfolio[5].title}
            desc={portfolio[5].desc}
            role={portfolio[5].role}
            tools={portfolio[5].tools}
            image="eatit"
          />
          <Preview
            title={portfolio[7].title}
            desc={portfolio[7].desc}
            role={portfolio[7].role}
            tools={portfolio[7].tools}
            image="portfolio"
            links={
              <Link href="https://github.com/ronnielsen/ronnielsen.github.io" target="_blank">
                <Icon name="Github" mr="8px"/>
                Github Repo
              </Link>
            }
          />
          <Preview
            title={portfolio[8].title}
            desc={portfolio[8].desc}
            role={portfolio[8].role}
            tools={portfolio[8].tools}
            image="figmapreview"
            links={
              <div>
                <Link href="https://www.figma.com/file/k0hng6kEmDD63V59df9Pu1/Twitter" target="_blank">
                  <ButtonIcon src="./photos/twitter.png" mr="8px"/>
                  Twitter Components
                </Link>
                <Link href="https://www.figma.com/file/55y2wt9cP4e6IHoeu4IC91/Twitch" target="_blank">
                  <ButtonIcon src="./photos/twitch.png" mr="8px"/>
                  Twitch Components
                </Link>
                <Link href="https://www.figma.com/file/jmyv5jeariXTyhkeBxVt5R/YouTube" target="_blank">
                  <ButtonIcon src="./photos/youtube.png" mr="8px"/>
                  YouTube Components
                </Link>
              </div>
            }
          />
        </Row>
      </Section>
      {scrolled && <ToTop onClick={scrollTop}><Icon name="ArrowUp" color="white"/></ToTop>}
    </Container>
  );
}

export default Home;
