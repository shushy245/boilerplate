import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={<></>} />
      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>);

export default App;