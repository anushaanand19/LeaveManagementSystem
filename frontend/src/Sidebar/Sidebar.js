import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [],
      user: "",
    };
  }

  async componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    let hrMenuItems = [
      {
        label: "All Employees",
        href: "/employee/all-employees",
      },
      {
        label: "Upcoming Leaves",
        href: `/employee/upcoming-leaves/${user.id}`,
      },
      {
        label: "Modify Leaves",
        href: `/employee/modify-leaves/${user.id}`,
      },
    ];
    let defaultMenuItems = [
      {
        label: "Personal Details",
        href: `/employee/personal-details/${user.id}`,
      },
      {
        label: "Leave Records",
        href: `/employee/leave-records/${user.id}`,
      },
    ];
    if (user.userType === "HR") {
      this.setState({
        menuItems: defaultMenuItems.concat(hrMenuItems),
        user: user,
      });
    } else {
      this.setState({
        menuItems: defaultMenuItems,
        user: user,
      });
    }
  }
  render() {
    return (
      <>
        <ul className="sidebar-navigation">
          {this.state.menuItems.map((menuItem) => {
            return (
              <li
                key={this.state.menuItems.indexOf(menuItem)}
                className="sidebar-items"
              >
                <Link className="sidebar-item" to={{ pathname: menuItem.href }}>
                  {menuItem.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Sidebar;
