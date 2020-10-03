import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon, Flex } from './';
import {
  color,
  space,
  border,
  typography,
  layout,
  shadow,
  flexbox,
  grid,
  position,
  background
} from 'styled-system';
import { Div } from './';

function Select(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const [selectedOption, setSelectedOption] = useState(null);
  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  const DropDownContainer = styled(Div)`
    z-index: 2;
    width: 100%;
  `;

  const DropDownListContainer = styled(Div)`
    display: flex;
    width: 100%;
    z-index: 2;
    position: relative;
  `;

  const DropDownHeader = styled(Div)`
    position: relative;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-radius: 8px;
    padding: 8px 16px;
    color: ${p => p.theme.colors.black};
    outline: none;
    box-shadow: ${p => isOpen ? (p.theme.colors.cardFocus) : (p.theme.colors.card)};
    font-size: ${p => p.theme.fontSizes.sm};
    line-height: ${p => p.theme.lineHeights.sm};
    width: 100%;
    z-index: 2;
    &:hover {
      filter: brightness(.95);
    }
    &:focus, &:active {
      box-shadow: 0px 0px 0px 4px ${p => p.theme.colors.focus};
      transition-duration: 400ms;
    }
  `;

  const DropDownList = styled('ul')`
    ${color}
    ${space}
    ${border}
    ${typography}
    ${layout}
    ${shadow}
    ${flexbox}
    ${grid}
    ${position}
    ${background}
    margin: none;
    margin-top: 8px;
    padding: 8px 0px;
    border-radius: 8px;
    background-color: ${p => p.theme.colors.white};
    box-shadow: ${p => p.theme.colors.card};
    box-sizing: border-box;
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes.sm};
    line-height: ${p => p.theme.lineHeights.sm};
    width: 100%;
    transition-duration: 240ms;
  `;

  const ListItem = styled('li')`
    ${color}
    ${space}
    ${border}
    ${typography}
    ${layout}
    ${shadow}
    ${flexbox}
    ${grid}
    ${position}
    ${background}
    list-style: none;
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes.sm};
    line-height: ${p => p.theme.lineHeights.sm};
    width: 100%;
    padding: 8px 16px;
    transition-duration: 240ms;
    user-select: none;
    &:hover {
      background: ${p => p.theme.colors.plain};
    }
    &:focus {
      filter: brightness(.5);
    }
  `;

  const Overlay = styled(Div)`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  `;

  const FixedIcon = styled(Icon)`
    position: relative;
    right: -4px;
  `;

  return (
    <>
      <DropDownContainer>
        <DropDownHeader onClick={toggling} bg={isOpen ? 'white' : 'fill'}>
          <Flex>{selectedOption || props.placeholder || "Select..."}</Flex>
          <FixedIcon size="24px" name="ChevronDown"/>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {props.options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
      {isOpen && (<Overlay onClick={toggling}/>)}
    </>
  )
}

Select.propTypes = {
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Text content */
  options: PropTypes.array,
}

export default Select;
