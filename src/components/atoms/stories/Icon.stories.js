import React from 'react';
import { Flex, Icon } from '../';

export default { title: 'atoms.Icon' };

export const defaultIcon = () => <div><Icon name="Smile"/></div>;

export const appearance = () =>
  <div>
    <Icon name="Smile" color="primary"/>
    <Icon name="Smile" color="secondary"/>
    <Icon name="Smile" color="dark"/>
    <Icon name="Smile" color="danger"/>
    <Icon name="Smile" color="success"/>
  </div>;

export const sizes = () =>
  <div>
    <Icon name="Smile" size="32px"/>
    <Icon name="Smile" size="64px"/>
    <Icon name="Smile" size="96px"/>
  </div>;

export const spin = () =>
  <div>
    <Icon name="Loader" spin/>
  </div>;
