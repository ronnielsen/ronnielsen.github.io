import React from 'react';
import { Preview } from '../';

export default { title: 'Molecules/Preview' };

export const example = () => <Preview image="welcome-square"/>;

export const customized = () =>
  <Preview
    image="eatit"
    title="Eat It or Delete It"
    role="Web Surfer"
    tools="Hammer, Anvil"
    url=""
  />;
