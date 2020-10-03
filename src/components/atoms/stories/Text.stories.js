import React from 'react';
import { Text } from '../';

export default { title: 'Atoms/Text' };

export const plain = () => <Text value="Hello World" />;

export const variants = () =>
  <div>
    <Text
      variant="xxs"
      value="12px   -   The fox jumped over the bridge."
      my="xs"/>
    <Text
      variant="xs" value="14px   -   The fox jumped over the bridge."
      my="xs"
    />
    <Text
      variant="sm"
      value="18px   -   The fox jumped over the bridge."
      my="xs"
    />
    <Text
      variant="md"
      value="24px   -   The fox jumped over the bridge."
      my="xs"
    />
    <Text
      variant="lg"
      value="32px   -   The fox jumped over the bridge."
      my="xs"
    />
    <Text
      variant="xl"
      value="48px   -   The fox jumped over the bridge."
      my="xs"
    />
    <Text
      variant="xxl"
      value="64px   -   The fox jumped over the bridge."
      my="xs"
    />
    <Text
      variant="xxxl"
      value="96px   -   The fox jumped over the bridge."
      my="xs"
    />
  </div>;

export const colors = () =>
  <div>
    <Text color="text" value="Text" />
    <Text color="secondaryText" value="Secondary Text" />
    <Text bg="dark" color="lightText" value="Light Text" />
    <Text color="primary" value="Primary" />
  </div>;

export const weights = () =>
  <div>
    <Text variant="lg" value="Regular"/>
    <Text variant="lg" value="Bold" bold/>
  </div>;
