import React from "react";

// https://reacttraining.com/react-router/web/guides/quick-start
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";
import HomeView from "./views/Home/HomeView";
import FormView from "./views/Form/FormView";
import MaterialForm from "./views/MaterialForm/Form";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul className="linksContainer">
            <li className="linksUL">
              <Link to="/">Home</Link>
            </li>
            <li className="linksUL">
              <Link to="/Form">Form</Link>
            </li>
            <li className="linksUL">
              <Link to="/MaterialForm">Material Form</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/form">
            <FormView></FormView>
          </Route>
          <Route path="/MaterialForm">
            <MaterialForm></MaterialForm>
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
