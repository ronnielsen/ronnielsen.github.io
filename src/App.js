import React, { useState } from 'react';
import { Body } from './components/atoms';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App(props) {
  const [modal, setModal] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Body>
      </Body>
    </ThemeProvider>
  );



}

export default App;
