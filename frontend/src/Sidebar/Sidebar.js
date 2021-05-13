import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <>
        <ul className="sidebar-navigation">
          <li className="sidebar-items">
            <a className="sidebar-item" href="/personal-details">
              Personal Details
            </a>
          </li>
          <li className="sidebar-items">
            <a className="sidebar-item" href="/leave-records">
              Leave Records
            </a>
          </li>
        </ul>
      </>
    );
  }
}

export default Sidebar;
