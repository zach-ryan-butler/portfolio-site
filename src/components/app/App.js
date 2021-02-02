import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import styles from './app.css';
import Header from '../header/Header';
import Container from '../container/Container';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

export default function App() {
  const [light, setLight] = useState(true);

  return (
    <main className={styles.root}>
      <Router>
        <ThemeProvider theme={light ? lightTheme : darkTheme}>
          <CssBaseline />
          <Header setLight={setLight} light={light} />
          <Switch>
            <Route path='/' component={Container} />
            <Route path='/about' component={Container} />
            <Route path='/projects' component={Container} />
            <Route path='/resume' component={Container} />
            <Route path='/contact' component={Container} />
          </Switch>
        </ThemeProvider>
      </Router>
    </main>
  );
}
