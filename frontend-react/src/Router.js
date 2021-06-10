import { Route, BrowserRouter } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import { Component } from "react";
import EmployeeList from "./EmployeeList/EmployeeList";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import EditPersonalDetails from "./EditPersonalDetails/EditPersonalDetails";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Dashboard}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/employee/all-employees" component={EmployeeList}></Route>
        <Route path="/employee/upcoming-leaves" component={Dashboard}></Route>
        <Route path="/employee/modify-leaves" component={Dashboard}></Route>
        <Route
          exact
          path="/employee/personal-details/edit/:id"
          component={EditPersonalDetails}
        ></Route>
        <Route
          exact
          path="/employee/personal-details/:id"
          component={PersonalDetails}
        ></Route>
        <Route path="/employee/leave-records" component={Dashboard}></Route>
      </BrowserRouter>
    );
  }
}

export default Router;
