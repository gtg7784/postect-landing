import React from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import loadable from "@loadable/component";

const NotFound = loadable(
  () => import(/* webpackChunkName: "NotFound" */ "./pages/NotFound")
);

export default function App() {
  return (
    <div>
      <Helmet>
        <title>App</title>
      </Helmet>
      <Switch>
        {/* <Route exact path="/" render={() => <Home />} /> */}
        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  );
}
