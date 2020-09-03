import React from 'react';
import { Button, Text } from '../';
import { Icon } from '../';

export default { title: 'atoms.Button' };

export const plain = () => <Button>Hello</Button>;

export const colors = () =>
  <div>
    <Button bg="primary" label="Primary" />
    <Button bg="dark" label="Dark" />
    <Button bg="danger" label="Danger" />
    <Button bg="success" label="Success" />
    <Button bg="warning" color="text" label="Warning" />
    <Button bg="light" color="text" label="Plain" />
    <Button bg="white" color="primary" fontWeight="400" label="Link" />
  </div>;

export const variants = () =>
  <div>
    <Button variant="xs" label="X-Small" />
    <Button variant="sm" label="Small" />
    <Button variant="md" label="Medium" />
    <Button variant="lg" label="Large" />
    <Button variant="xl" label="X-Large" />
    <Button variant="xxl" label="XX-Large" />
  </div>

export const prepend = () =>
  <Button
    prepend={
      <span
        role="img"
        aria-label="img"
        style={{ marginRight: 8 }}>←</span>
    }
    label="Prepend"
  />

export const append = () =>
  <Button
    append={
      <span
        role="img"
        aria-label="img"
        style={{ marginLeft: 8 }}>→</span>
    }
    label="Append" />
