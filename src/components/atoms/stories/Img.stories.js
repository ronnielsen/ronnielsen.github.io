import React from 'react';
import { Img } from '..';

export default { title: 'atoms.Img' };

export const UpsaleImage = () =>
  <Img variant="forSplashes" name="doritos" location="Products/Upsales" fileType="jpg" />;
export const ProductImage = () =>
  <Img variant="forSplashes" name="bella1" location="Products" fileType="jpg" />;

