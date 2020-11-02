import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

///Pages:
import login from "./login";
import dashboard from "./dashboard";

export default function routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={login} />
        <Route path="/dashboard" exact component={dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
