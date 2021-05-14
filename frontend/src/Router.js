import { Route, BrowserRouter } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import { Component } from "react";
import EmployeeList from "./EmployeeList/EmployeeList";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Dashboard}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/all-employees" component={EmployeeList}></Route>
        <Route path="/upcoming-leaves" component={Dashboard}></Route>
        <Route path="/modify-leaves" component={Dashboard}></Route>
        <Route path="/personal-details" component={Dashboard}></Route>
        <Route path="/leave-records" component={Dashboard}></Route>
      </BrowserRouter>
    );
  }
}

export default Router;
