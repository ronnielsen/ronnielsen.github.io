import React from 'react';
import { Div, Icon } from '../atoms';
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
    padding: 8px 16px;
  }
`;

const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 32px;
  border-radius: 45px;
  padding: 8px 16px;
  line-height: 24px;
  font-size: 18px;
  &:active {
    background: ${p => p.theme.colors.dark};
    color: ${p => p.theme.colors.lightText};
    transition-duration: 200ms;
  }
  @media(min-width: 769px){
    &:hover {
      background: ${p => p.theme.colors.dark};
      color: ${p => p.theme.colors.lightText};
      transition-duration: 500ms;
    }
  }
  @media (max-width: 767px){
    font-size: 14px;
  }
`;

const Name = styled(Link)`
  font-size: 24px;
  color: ${p => p.theme.colors.text};
  flex: 1;
  font-weight: 900;
  text-decoration: none;
  @media(max-width: 400px){
    font-size: 18px;
  }
`;

const Mode = styled(Div)`
  border-radius: 45px;
  padding: 8px;
  background: ${p => p.theme.colors.light};
  @media(min-width: 769px){
    &:hover {
      background: ${p => p.theme.colors.dark};
      color: ${p => p.theme.colors.light};
    }
  }
  &:active {
    background: ${p => p.theme.colors.dark};
    color: ${p => p.theme.colors.light};
  }
`;

function Header(props) {
  return (
    <Container bg="light" color="dark" p="xs">
      <Name to="/">Ron Nielsen</Name>
      <StyledLink to="/process">My process</StyledLink>
      <StyledLink to="/resume">Resume</StyledLink>
      <Mode ml="8px" onClick={() => props.themeToggler()}>
      {props.theme === 'light' ? (<Icon name="Moon"/>) : (<Icon name="Sun"/>)}
      </Mode>
    </Container>
  );
}

export default Header;
