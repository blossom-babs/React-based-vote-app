import React from "react";
import "./assets/scss/app.scss";
import Leaderboard from "./Pages/Leaderboard";
import Voting from "./Pages/Voting";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="home">
      <Router>
        <Switch>
          <Route exact path="/" component={Voting} />
          <Route path="/leaderboard" component={Leaderboard} />
        </Switch>
      </Router>
    </div>
  );
}
