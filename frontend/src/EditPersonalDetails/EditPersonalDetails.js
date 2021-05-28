import React, { Component } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { HttpUtil } from "../Utils/HttpUtil";
import "./EditPersonalDetails.css";
import "../Components/EmployeeForm/EmployeeFormComponent";
import EmployeeForm from "../Components/EmployeeForm/EmployeeFormComponent";

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
  onSubmit = (e) => {
    console.log(e);
  };

  render() {
    return (
      <>
        <Header />
        <div className="content">
          <Sidebar />
          <div className="main-container">
            <EmployeeForm user={this.state.user} onSave={this.onSubmit} />
          </div>
        </div>
      </>
    );
  }
}

export default EditPersonalDetails;
