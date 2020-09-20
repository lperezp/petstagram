import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SignIn from '../modules/auth/pages/SignIn';
import Home from '../modules/home/pages/Home';

const Routes: React.FC = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path='/home' render={() => <Home />} />
          <Route exact path='/' render={() => <SignIn />} />
        </Switch>
      </>
    </Router>
  );
};

export default Routes;
