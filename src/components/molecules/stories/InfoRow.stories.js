import React from 'react';
import { InfoRow } from '../';

export default { title: 'Molecules/InfoRow' };

export const example = () => <InfoRow/>;

export const customized = () =>
  <InfoRow
    title="This is my title."
    desc="I would write a description here, but this is what you get."
    img="3"
  />;
