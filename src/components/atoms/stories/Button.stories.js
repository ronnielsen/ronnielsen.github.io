import React from 'react';
import { Button, Flex, Icon } from '../';

export default { title: 'Atoms/Button' };

export const defaultButton = () => <Button label="Basic"/>;

export const appearance = () =>
  <div>
    <Button bg="primary" label="Primary" />
    <Button bg="dark" label="Dark" />
    <Button bg="danger" label="Danger" />
    <Button bg="success" label="Success" />
    <Button bg="warning" color="text" label="Warning" />
    <Button variant="plain" label="Plain" />
    <Button variant="link" label="Link" />
  </div>;

export const sizes = () =>
  <div>
    <Button variant="xs" label="X-Small" />
    <Button sizes="small" label="Small" />
    <Button variant="md" label="Medium" />
    <Button variant="lg" label="Large" />
    <Button variant="xl" label="X-Large" />
    <Button variant="xxl" label="XX-Large" />
  </div>

export const withIcon = () =>
  <div>
    <Button
      prepend={
        <Icon name="ArrowLeft" color="white"/>
      }
      label="Prepend"
    />
    <Button
      append={
        <Icon name="ArrowRight" color="white"/>
      }
      label="Append"
    />
  </div>

export const fullWidth = () =>
  <Flex row>
    <Button label="Full Width" fullWidth/>
  </Flex>
