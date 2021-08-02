// IMPORTS LIBRARIES
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// IMPORTS PAGES
import Home from "./pages/Home";
import Theme from "./pages/Theme";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* ROUTE SIGN IN */}
      <Route exact path="/" component={Home} />
      <Route path="/theme/:name" component={Theme} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
