import React, { Component } from "react";

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {},
    };
  }

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Header />
        <div className="content">
          <Sidebar />
          <h1>Personal Details Page</h1>
        </div>
      </div>
    );
  }
}
