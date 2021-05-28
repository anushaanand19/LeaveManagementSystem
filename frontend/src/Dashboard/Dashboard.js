import React from "react";
import Header from "../Header/Header.js";
import Sidebar from "../Sidebar/Sidebar";
import { withRouter } from "react-router-dom";
import "./Dasboard.css";
import { HttpUtil } from "../Utils/HttpUtil";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      allEmployees: {
        name: "",
        DOB: "",
        PAN: "",
        id: "",
        leaveBalance: "",
      },
    };
  }
  async componentDidMount() {
    let user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      try {
        user = await HttpUtil.get(`http://localhost:3001/employee/${user.id}`);
        this.setState({ user: user || "User" });
      } catch (e) {
        alert(e);
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
          <div className="main-container">
            <h1>Welcome {this.state.user.name},</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
