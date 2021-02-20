import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Card } from '../Card/Card';


export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Card} />
      </Switch>
    </Router>
  )
}