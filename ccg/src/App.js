import React from "react";

// https://reacttraining.com/react-router/web/guides/quick-start
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";
import HomeView from "./views/Home";
import FormView from "./views/Form/FormView";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/form">
            <FormView></FormView>
          </Route>
          {/* Note that '/' path should be the last, since it will return the first match */}
          <Route path="/">
            <HomeView></HomeView>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
