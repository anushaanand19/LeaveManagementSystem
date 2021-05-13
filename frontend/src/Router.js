import { Route, BrowserRouter } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import { Component } from "react";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </BrowserRouter>
    );
  }
}

export default Router;