import React, { useState } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Header } from './components/molecules';
import { Home, Process, Resume } from './components/pages';
import { ThemeProvider } from 'styled-components';
// the full theme object
import {lightTheme, darkTheme} from './theme';

function App(props) {
  const [theme, setTheme] = useState('dark')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Router basename='/'>
        <Header themeToggler={themeToggler} theme={theme}/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/process'>
            <Process/>
          </Route>
          <Route path='/resume'>
            <Resume theme={theme}/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
