import React from 'react';
import PropTypes from 'prop-types';
import * as feather from '@styled-icons/feather';
import { Div } from './';
import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledIcon = styled(Div)`
  animation: ${rotate} ${props => props.spin ? '1.5s linear infinite' : 'none'};
`;

function Icon(props) {
  let IconComponent = feather[props.name];
  return (
    <StyledIcon color={props.color} {...props}>
      {props.name ?
        (<IconComponent size={props.size || '24px'}/>) :
        (<>Add icon name</>)
      }
    </StyledIcon>
  )
}

Icon.propTypes = {
  /** Icon name from library */
  name: PropTypes.string,
  /** Size in pixels */
  size: PropTypes.string,
  /** Color name */
  color: PropTypes.string
}

export default Icon;
