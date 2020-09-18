import React from 'react';
import { Select } from '../';

export default { title: 'atoms.Select' };

const options = ["List Item 1", "List Item 2", "List Item 3"];

export const defaultSelect = () => <><Select options={options}/></>;
