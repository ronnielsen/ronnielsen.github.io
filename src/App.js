import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { GlobalStyles } from './components/atoms';
import { Header } from './components/molecules';
import { Home, Process, Resume, Loading } from './components/pages';
import { ThemeProvider } from 'styled-components';

import {lightTheme, darkTheme} from './theme';

function App(props) {
  const [theme, setTheme] = useState('light')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2500)
  }, [])
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles>
        <Router basename='/'>
          <Switch>
            <Route exact path='/'>
              {loading && <Loading/>}
              <Header themeToggler={themeToggler} theme={theme} route=''/>
              <Home theme={theme}/>
            </Route>
            <Route path='/process'>
              <Header themeToggler={themeToggler} theme={theme} route='process'/>
              <Process/>
            </Route>
            <Route path='/resume'>
              <Header themeToggler={themeToggler} theme={theme} route='resume'/>
              <Resume theme={theme}/>
            </Route>
          </Switch>
        </Router>
      </GlobalStyles>
    </ThemeProvider>
  );
}

export default App;
