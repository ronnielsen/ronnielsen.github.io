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
  color: ${p => p.theme.colors.lightText};
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
  @media (max-width: 767px){
    font-size: 14px;
  }
`;

const Name = styled(Link)`
  font-size: 24px;
  color: ${p => p.theme.colors.lightText};
  flex: 1;
  font-weight: 900;
  text-decoration: none;
  @media(max-width: 767px){
    font-size: 18px;
  }
`;

function Header(props) {
  return (
    <Container bg="dark" color="lightText" p="xs">
      <Name to="/">Ron Nielsen</Name>
      <StyledLink to="/process">Process</StyledLink>
      <StyledLink to="/resume">Resume</StyledLink>
      <Div onClick={() => props.themeToggler()}>
      {props.theme === 'light' ? (<Icon name="Moon"/>) : (<Icon name="Sun"/>)}
      </Div>
    </Container>
  );
}

export default Header;
