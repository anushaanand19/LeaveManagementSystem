import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { HttpUtil } from "../Utils/HttpUtil";
import "./EmployeeList.css";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }
  async componentDidMount() {
    let employeesList = await HttpUtil.get("http://localhost:3001/employee");
    this.setState({ employees: employeesList });
  }
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <Sidebar />
          <div className="main-container">
            <h1>All Employee List</h1>
            <div className="tablestyle">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Firstname</th>
                    <th>Email ID</th>
                    <th>PAN</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.employees.map((emp) => {
                    return (
                      <tr key={this.state.employees.indexOf(emp)}>
                        <td>{emp.id}</td>
                        <td>
                          <a href="/personal-details"> {emp.name}</a>
                        </td>
                        <td>{emp.officialEmailId}</td>
                        <td>{emp.employee.PAN}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EmployeeList);
