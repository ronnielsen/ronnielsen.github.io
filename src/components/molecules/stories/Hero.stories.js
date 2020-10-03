import React from 'react';
import { Hero } from '../';

export default { title: 'Molecules/Hero' };

export const example = () => <Hero/>;

export const customized = () =>
  <Hero
    title="Front-end Developer"
    skill="design awesome experiences"
    bg="danger"
  />;
