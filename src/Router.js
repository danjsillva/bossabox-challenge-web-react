import React from "react";
import { Switch, Route } from "react-router-dom";

import Tools from "./views/tools/Tools";

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Tools} />
    </Switch>
  );
}
