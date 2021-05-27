import React, { Component } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { HttpUtil } from "../Utils/HttpUtil";

class EditPersonalDetails extends Component {
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
    console.log(empDetails);
    if (empDetails) {
      let dobYear = new Date(empDetails.employee.DOB).getFullYear();
      let dobMonth = new Date(empDetails.employee.DOB).toLocaleString(
        "default",
        {
          month: "long",
        }
      );
      let dobDate = await new Date(empDetails.employee.DOB).getDate();
      empDetails.employee.DOB = dobDate + "-" + dobMonth + "-" + dobYear;
      this.setState({ user: empDetails });
    }
  }
  render() {
    return (
      <>
        <Header />
        <div className="content">
          <Sidebar />
          <form className="main-container">
            <div className="sub-section">
              <div className="heading">
                <div className="title"> Personal Details</div>
              </div>
              <div className="details">
                <div className="row col-xs-2">
                  <span className="label">ID </span>
                  <input
                    type="text"
                    className="form-control value col-xs-2"
                    value={this.state.user.id}
                  ></input>
                </div>
                <div className="row">
                  <span className="label">First Name </span>
                  <input
                    type="text"
                    className="form-control value"
                    value={this.state.user.name}
                  ></input>
                </div>
                <div className="row">
                  <span className="label">Surname </span>
                  <input
                    type="text"
                    className="form-control value"
                    value={this.state.user.name}
                  ></input>
                </div>
                <div className="row">
                  <span className="label">DOB </span>
                  <input
                    type="text"
                    className="form-control value"
                    value={this.state.user.employee.DOB}
                  ></input>
                </div>
                <div className="row">
                  <span className="label">PAN </span>
                  <input
                    type="text"
                    className="form-control value"
                    value={this.state.user.employee.DOB}
                  ></input>
                </div>
              </div>
            </div>
            <div className="sub-section">
              <div className="heading">
                <div className="title"> Contact Details</div>
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
          </form>
        </div>
      </>
    );
  }
}

export default EditPersonalDetails;
