import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../../components/headers/Header';
import VillagersPage from '../../containers/VillagersPage';
import VillagerById from '../../containers/VillagerById';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={VillagersPage} />
        <Route exact path="/villagers/:id" component={VillagerById} />
      </Switch>
    </Router>
  );
}
