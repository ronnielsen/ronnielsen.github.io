import React from 'react'
import { Div } from '../atoms'
import styled, {keyframes} from 'styled-components'

const fadeOut = keyframes`
  0 { opacity: 1 }
  80% { opacity: 1 }
  100% { opacity: 0}
`;

const wave = keyframes`
  0% { transform: rotate( 0.0deg); -webkit-transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg); -webkit-transform: rotate( 14.0deg) }
  20% { transform: rotate(-8.0deg); -webkit-transform: rotate( -8.0deg) }
  30% { transform: rotate(14.0deg); -webkit-transform: rotate( 14.0deg) }
  40% { transform: rotate(-4.0deg); -webkit-transform: rotate( -4.0deg) }
  50% { transform: rotate(10.0deg); -webkit-transform: rotate( 10.0deg) }
  60% { transform: rotate( 0.0deg); -webkit-transform: rotate( 0.0deg) }
  70% { transform: rotate(14.0deg); -webkit-transform: rotate( 14.0deg) }
  80% { transform: rotate(-8.0deg); -webkit-transform: rotate( -8.0deg) }
  90% { transform: rotate(14.0deg); -webkit-transform: rotate( 14.0deg) }
  100% { transform: rotate( 0.0deg); -webkit-transform: rotate( 0.0deg) }
`;

const HandWave = styled(Div)`
  animation: ${wave}  2s linear infinite;
  font-size: 64px;
  margin-right: 16px;
  @media(max-width: 767px){
    font-size: 80px;
  }
`;

const Container = styled(Div)`
  animation: ${fadeOut} 2.5s linear;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  * {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Row = styled(Div)`
  display: flex;
  flex-direction: row;
  color: ${p => p.theme.colors.text};
  font-size: 64px;
  font-weight: bold;
  @media(max-width: 767px){
    flex-direction: column;
  }
`;

function Loading(props) {
  return (
    <Container bg="light">
      <Row>
        <HandWave role="img" ariaLabel="wave"><span role="img" aria-label="wave">👋</span></HandWave>
        Hello there!
      </Row>
    </Container>
  );
}

export default Loading;
