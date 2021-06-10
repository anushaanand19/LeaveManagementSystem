import "./Login.css";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../Header/Header";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ ...this.state, [name]: value });
  };
  doLogin = async (e) => {
    const { history } = this.props;
    e.preventDefault();
    let data = {
      email: this.state.email,
      password: this.state.password,
    };
    let user = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    if (user.status === 200) {
      user = await user.json();
      // saver in localstore
      localStorage.setItem("user", JSON.stringify(user));
      history.push("/");
    } else {
      user = await user.json();
      alert(user.message);
    }
  };

  render() {
    return (
      <>
        <Header />
        <form className="container">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              onChange={this.changeHandler}
              className="form-control"
              id="email"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={this.changeHandler}
              className="form-control"
              id="password"
            ></input>
          </div>
          <button
            onClick={this.doLogin}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default withRouter(Login);
