import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../Header';
import VillagersPage from '../VillagersPage';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={VillagersPage} />
      </Switch>
    </Router>
  );
}
