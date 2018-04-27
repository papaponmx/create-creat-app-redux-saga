import React from "react";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import Home from "../Home";
import About from "../About";

const App = () => (
  <HashRouter>
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </main>
    </div>
  </HashRouter>
);

export default App;
