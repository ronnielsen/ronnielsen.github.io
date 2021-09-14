import React from 'react';
import PropTypes from 'prop-types';
import { Div, Flex, Text } from '../atoms';
import styled from 'styled-components'

const Container = styled(Div)`
  display: flex;
  border-radius: 32px;
  background: ${p => p.theme.colors.white};
  width: 100%;
  overflow: hidden;
  text-align: left;
  max-width: 740px;
  margin: 0px 32px 32px 32px;
  flex-direction: row;
  box-sizing: border-box;
  @media(max-width: 1023px){
    margin: 0px 16px 16px 16px;
  }
  @media(max-width: 767px){
    margin: 2px 0px 2px 0px;
    border-radius: 0px;
  }
`;

const Bitmoji = styled.img`
  height: 160px;
  width: 160px;
  align-self: center;
  @media(max-width: 767px){
    height: 120px;
    width: 120px;
  }
`;

const FlexGroup = styled(Flex)`
  padding: 16px;
`;

const Title = styled(Text)`
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 8px;
  font-weight: 700;
  color: ${p => p.theme.colors.text};
`;

const Desc = styled(Text)`
  font-size: 18px;
  line-height: 28px;
  color: ${p => p.theme.colors.secondaryText};
`;

function InfoRow(props) {
  return (
    <Container {...props}>
      <Bitmoji src={'https://ronnielsen.github.io/photos/bitmoji/' + (props.img || '1') + '.png'}/>
      <FlexGroup>
        <Title value={props.title || 'Title'}/>
        <Desc value={props.desc || 'A nice description.'}/>
      </FlexGroup>
    </Container>
  );
}

InfoRow.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string
}

export default InfoRow;
