import React from 'react';
import { Text } from '../';

export default { title: 'atoms.Text' };

export const plain = () => <Text value="Press Me" />;

export const variants = () =>
  <div>
    <Text variant="xxs" value="12px (xxs)" />
    <Text variant="xs" value="14px (xs)" />
    <Text variant="sm" value="18px (sm)" />
    <Text variant="md" value="24px (md)" />
    <Text variant="lg" value="32px (lg)" />
    <Text variant="xl" value="42px (xl)" />
    <Text variant="xxl" value="64px (xxl)" />
    <Text variant="xxxl" value="96px (xxxl)" />
  </div>;

export const colors = () =>
  <div>
    <Text color="text" value="Default" />
    <Text color="secondaryText" value="Secondary" />
    <Text color="primary" value="Brand" />
    <Text bg="dark" color="light" value="Light" />
  </div>;
