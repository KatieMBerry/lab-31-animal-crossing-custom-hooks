import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { ThemeProvider } from '../../state/theme';
import Header from '../../components/headers/Header';
import VillagersPage from '../../containers/VillagersPage';
import VillagerById from '../../containers/VillagerById';

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <Switch>
        <Route exact path="/" component={VillagersPage} />
        <Route exact path="/villagers/:_id" component={VillagerById} />
      </Switch>
    </Router>
  );
}
