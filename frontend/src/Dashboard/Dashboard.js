import React from "react";
import Header from "../Header/Header.js";
import Sidebar from "../Sidebar/Sidebar";
import { withRouter } from "react-router-dom";
import "./Dasboard.css";

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
        user = await fetch(`http://localhost:3001/employee/${user.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        user = await user.json();
        this.setState({ user: user });
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
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
