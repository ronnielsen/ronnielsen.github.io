import React from 'react';
import { Flex, Text } from '../';

export default { title: 'Atoms/Flex' };

export const base = () => <Flex><div>1</div><div>2</div><div>3</div></Flex>;

export const row = () => <Flex row><div>1</div><div>2</div><div>3</div></Flex>;

export const centered = () => <Flex centered><div>1</div><div>2</div><div>3</div></Flex>;

export const customize = () => <Flex row centered py="32px" bg="orange" color="white"><div>1</div><div>2</div><div>3</div></Flex>;
