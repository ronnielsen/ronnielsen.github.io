import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../src/theme';

import '../src/index.css';

const Story = styled.div`
  #story-root {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 40px;
    width: 100%;
  }
`;

const viewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '400px',
      height: '600px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '800px',
      height: '600px',
    },
  },
  laptop: {
    name: 'Laptop',
    styles: {
      width: '1200px',
      height: '600px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1600px',
      height: '600px',
    },
  },
  gen3: {
    name: 'Gen 3',
    styles: {
      width: '1024px',
      height: '1280px',
    },
  },
  gen4: {
    name: 'Gen 4',
    styles: {
      width: '1080px',
      height: '1920px',
    },
  },
};

addParameters({
  viewport: {
    viewports,
    defaultViewport: 'none',
  },
  info: {
    inline: true,
  }
});

addDecorator(withInfo);
addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <Story>{storyFn()}</Story>
  </ThemeProvider>
))
// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
