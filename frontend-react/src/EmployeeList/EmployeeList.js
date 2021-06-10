import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { HttpUtil } from "../Utils/HttpUtil";
import "./EmployeeList.css";
import Loader from "react-loader-spinner";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      loading: true,
    };
  }
  async componentDidMount() {
    let employeesList = await HttpUtil.get("http://localhost:3001/employee");
    this.setState({ employees: employeesList, loading: false });
  }

  loader = () => {
    console.log("State", this.state.loading);
    if (this.state.loading) {
      return (
        <Loader
          className="loader"
          type="ThreeDots"
          color="teal"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      );
    }
  };

  render() {
    let title = "",
      tableContent = "";
    if (!this.state.loading) {
      tableContent = (
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
                    <a
                      className="empName"
                      href={"/employee/personal-details/" + emp.id}
                    >
                      {emp.name}
                    </a>
                  </td>
                  <td>{emp.officialEmailId}</td>
                  <td>{emp.employee.PAN}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
    return (
      <div>
        <Header />
        <div className="content">
          <Sidebar />
          <div className="main-container">
            {this.loader()}
            {title}
            <div className="tablestyle">{tableContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EmployeeList);
