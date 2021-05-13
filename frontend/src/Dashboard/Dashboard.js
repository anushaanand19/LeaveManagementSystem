import React from "react";
import Header from "../Header/Header.js";
import Sidebar from "../Sidebar/Sidebar";
import { withRouter } from "react-router-dom";
import "./Dasboard.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leaveBalances: {
        leaveType: "",
        balance: "",
      },
      employee: {
        name: "",
        DOB: "",
        PAN: "",
        id: "",
      },
    };
  }
  async componentDidMount() {
    let user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      try {
        let employee = await fetch(
          `http://localhost:3001/employee/${user.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        employee = await employee.json();
        this.setState({ employee: user });
        console.log(employee);
      } catch (e) {
        console.log(e);
      }
    } else {
      const { history } = this.props;
      history.push("/login");
    }
  }
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Header />
        <div className="content">
          <Sidebar />
          <h1 style={{ margin: "20px" }}>Hi {this.state.employee.name},</h1>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
