import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Component from "../src/components";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Component} />
      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>
);

export default App;
