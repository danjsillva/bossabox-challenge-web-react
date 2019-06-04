import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Users from "./views/users/Users";
import Tools from "./views/tools/Tools";

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/users" component={Users} />
      <Route path="/tools" component={Tools} />
    </Switch>
  );
}
