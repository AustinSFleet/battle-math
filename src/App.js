import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login.js"


const App = () =>
  <Router>
    <div>
    <Route exact path="/" component={Login} />
    </div>
  </Router>;

export default App;

