import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../modules/admin/pages/Home';

const Routes: React.FC = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
        </Switch>
      </>
    </Router>
  );
};

export default Routes;
