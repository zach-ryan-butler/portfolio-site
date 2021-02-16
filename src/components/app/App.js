import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import smoothscroll from 'smoothscroll-polyfill';

import Header from '../header/Header';
import Container from '../container/Container';
import useStyles from './App.styles';

export default function App() {
  const [lightOrDark, setLightOrDark] = useState(true);
  const palletType = lightOrDark ? 'light' : 'dark';
  const secondaryBackgroundColor = lightOrDark ? '#f5f5f5' : '#3A3A3A';
  const secondaryPaperColor = lightOrDark ? '#fff' : '#303030';

  smoothscroll.polyfill();

  const classes = useStyles();

  let theme = createMuiTheme({
    palette: {
      type: palletType,
      secondaryBackground: secondaryBackgroundColor,
      secondaryPaper: secondaryPaperColor,
    },
    typography: {
      fontFamily: 'sans-serif',
      body1: {
        fontSize: '1.2rem',
        LineHeight: 1.6,
      },
      body2: {
        fontSize: '1.0rem',
        lineHeight: 1.6,
      },
      h5: {
        fontWeight: 300,
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <main className={classes.root}>
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
