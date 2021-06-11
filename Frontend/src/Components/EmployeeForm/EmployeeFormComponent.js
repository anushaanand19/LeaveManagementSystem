import React, { Component } from "react";

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onFormFilled = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ ...this.state, [name]: value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSave(this.state);
  };
  render() {
    let empName = this.props.user.name;
    let empDOB = new Date(this.props.user.employee.DOB);
    let empPAN = this.props.user.employee.PAN;
    let empID = this.props.user.id;
    return (
      <form className="form-container">
        <div className="heading">
          <div className="title"> Personal Details</div>
        </div>
        <div className="form-group">
          <span className="exampleFormControlInput1">First Name </span>
          <input
            name="firstName"
            type="text"
            className="form-control"
            defaultValue={empName || ""}
            onChange={this.onFormFilled}
          ></input>
          <span className="exampleFormControlInput1">Surname </span>
          <input
            name="surname"
            type="text"
            className="form-control "
            defaultValue={empName || ""}
            onChange={this.onFormFilled}
          ></input>
          <span className="exampleFormControlInput1">DOB </span>
          <input
            name="dob"
            type="date"
            className="form-control "
            defaultValue={empDOB || ""}
            onChange={this.onFormFilled}
          ></input>
          <span className="exampleFormControlInput1">PAN </span>
          <input
            name="pan"
            type="text"
            className="form-control "
            defaultValue={empPAN || ""}
            onChange={this.onFormFilled}
          ></input>
        </div>
        <div className="heading">
          <div className="title"> Contact Details</div>
        </div>
        <div className="form-group">
          <span className="exampleFormControlInput1">Phone </span>
          <input
            type="text"
            name="phone"
            className="form-control "
            defaultValue={empName || ""}
            onChange={this.onFormFilled}
          ></input>

          <span className="exampleFormControlInput1">Address </span>
          <input
            name="address"
            type="text"
            className="form-control "
            defaultValue={empID || ""}
            onChange={this.onFormFilled}
          ></input>
        </div>
        <div className="mt-4">
          <input
            type="submit"
            defaultValue="Submit"
            className="btn btn-primary "
            onClick={this.onFormSubmit}
          />
        </div>
      </form>
    );
  }
}

export default EmployeeForm;
