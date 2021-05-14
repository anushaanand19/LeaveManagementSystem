import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      name: "",
    };
  }
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.setState({ isLoggedIn: true });
      this.setState({ name: user.name });
    }
  }
  logout = (e) => {
    localStorage.removeItem("user");
  };
  notLoggedInTemplate() {
    return (
      <ul className="navigation">
        <li className="navigation-items">
          <a className="navigation-item" href="/">
            Register
          </a>
        </li>
        <li className="navigation-items">
          <a className="navigation-item" href="/login">
            Login
          </a>
        </li>
      </ul>
    );
  }

  loggedInTemplate() {
    return (
      <ul className="navigation">
        <li className="navigation-items">
          <a className="navigation-item" href="/profile">
            Hey, {this.state.name}!
          </a>
        </li>
        <li className="navigation-items">
          <a className="navigation-item" href="/login" onClick={this.logout}>
            Logout
          </a>
        </li>
      </ul>
    );
  }

  render() {
    let header = this.notLoggedInTemplate();
    if (this.state.isLoggedIn) {
      header = this.loggedInTemplate();
    }
    return (
      <main className="header">
        <h1 className="logo">HRMS</h1>
        {header}
      </main>
    );
  }
}

export default Header;
