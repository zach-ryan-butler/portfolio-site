import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './app.css';
import Header from '../header/Header';
import Container from '../container/Container';

export default function App() {
  return (
    <div className={styles.root}>
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={Container} />
          <Route path='/about' component={Container} />
          <Route path='/projects' component={Container} />
          <Route path='/resume' component={Container} />
          <Route path='/contact' component={Container} />
        </Switch>
      </Router>
    </div>
  );
}
