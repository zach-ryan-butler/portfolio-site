import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import styles from './app.css';
import Header from '../header/Header';
import Container from '../container/Container';

export default function App() {
  const [lightOrDark, setLightOrDark] = useState(true);
  const palletType = lightOrDark ? 'light' : 'dark';

  let theme = createMuiTheme({
    palette: {
      type: palletType,
    },
    typography: {
      fontFamily: 'sans-serif',
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <main className={styles.root}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header setLightOrDark={setLightOrDark} lightOrDark={lightOrDark} />
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
