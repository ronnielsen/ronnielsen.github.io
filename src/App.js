import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home, Process, Resume } from './components/pages';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/portfolio">
            <Home/>
          </Route>
          <Route path="/portfolio/process">
            <Process/>
          </Route>
          <Route path="/portfolio/resume">
            <Resume/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );



}

export default App;
