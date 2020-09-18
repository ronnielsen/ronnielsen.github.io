import React from 'react';
import { Div } from '../atoms';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled(Div)`
  display: flex;
  top: 0px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 32px 64px;
  justify-content: space-between;
  @media(max-width: 767px){
    padding: 16px 32px;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 32px;
  border-radius: 45px;
  padding: 8px 16px;
  line-height: 24px;
  font-size: 18px;
  &:hover {
    background: ${p => p.theme.colors.light};
    color: ${p => p.theme.colors.text};
    transition-duration: 500ms;
  }
`;

const Name = styled(Link)`
  font-size: 24px;
  color: white;
  flex: 1;
  font-weight: 900;
  text-decoration: none;
  @media(max-width: 767px){
    font-size: 18px;
  }
`;

function Header(props) {
  return (
    <Container bg="dark" color="white" p="xs">
      <Name to="/portfolio">Ron Nielsen</Name>
      <StyledLink to="/portfolio/process">My process</StyledLink>
      <StyledLink to="/portfolio/resume">Resume</StyledLink>
    </Container>
  );
}

export default Header;
