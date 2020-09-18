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
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/process">
            <Process/>
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );



}

export default App;
