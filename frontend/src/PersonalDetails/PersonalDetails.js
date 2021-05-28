import React, { Component } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { HttpUtil } from "../Utils/HttpUtil";
import "./PersonalDetails.css";
import { Link } from "react-router-dom";

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        employee: {},
      },
    };
  }
  async componentDidMount() {
    const id = this.props.match.params.id;
    const empDetails = await HttpUtil.get(
      `http://localhost:3001/employee/${id}`
    );
    let dobYear = new Date(empDetails.employee.DOB).getFullYear();
    let dobMonth = new Date(empDetails.employee.DOB).toLocaleString("default", {
      month: "long",
    });
    let dobDate = new Date(empDetails.employee.DOB).getDate();
    empDetails.employee.DOB = dobDate + "-" + dobMonth + "-" + dobYear;
    this.setState({ user: empDetails });
  }
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Header />
        <div className="content">
          <Sidebar />
          <div className="main-container">
            <div className="form-group">
              <div className="heading">
                <div className="title"> Personal Details</div>
                <Link
                  to={{
                    pathname: `/employee/personal-details/edit/${this.state.user.id}`,
                  }}
                  className="edit-button"
                >
                  Edit
                </Link>
              </div>
              <div className="details">
                <div className="row">
                  <span className="label">ID </span>
                  <span className="value">{this.state.user.id}</span>
                </div>
                <div className="row">
                  <span className="label">First Name </span>
                  <span className="value">{this.state.user.name}</span>
                </div>
                <div className="row">
                  <span className="label">Surname </span>
                  <span className="value">{this.state.user.name}</span>
                </div>
                <div className="row">
                  <span className="label">DOB </span>
                  <span className="value">{this.state.user.employee.DOB}</span>
                </div>
                <div className="row">
                  <span className="label">PAN </span>
                  <span className="value">{this.state.user.employee.PAN}</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="heading">
                <div className="title"> Contact Details</div>
                <a className="edit-button" href="http://">
                  Edit
                </a>
              </div>
              <div className="details">
                <div className="row">
                  <span className="label">email </span>
                  <span className="value">
                    {this.state.user.officialEmailId}
                  </span>
                </div>
                <div className="row">
                  <span className="label">Phone </span>
                  <span className="value">{this.state.user.name}</span>
                </div>
                <div className="row">
                  <span className="label">Address </span>
                  <span className="value">
                    {this.state.user.officialEmailId}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalDetails;
