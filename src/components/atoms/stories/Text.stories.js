import React from 'react';
import { Text } from '../';

export default { title: 'atoms.Text' };

export const plain = () => <Text value="Hello World" />;

export const variants = () =>
  <div>
    <Text variant="xxs" value="Variant: xxs 12px" />
    <Text variant="xs" value="Variant: xs 14px" />
    <Text variant="sm" value="Variant: sm 18px" />
    <Text variant="md" value="Variant: md 24px" />
    <Text variant="lg" value="Variant: lg 32px" />
    <Text variant="xl" value="Variant: xl 48px" />
    <Text variant="xxl" value="Variant: xxl 64px" />
    <Text variant="xxxl" value="Variant: xxxl 96px" />
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
