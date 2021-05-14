import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  hrMenuItems = [
    {
      label: "All Employees",
      href: "/all-employees",
    },
    {
      label: "Upcoming Leaves",
      href: "/upcoming-leaves",
    },
    {
      label: "Modify Leaves",
      href: "/modify-leaves",
    },
  ];
  defaultMenuItems = [
    {
      label: "Personal Details",
      href: "/personal-details",
    },
    {
      label: "Leave Records",
      href: "/leave-records",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [],
    };
  }

  async componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user.userType === "HR") {
      this.setState({
        menuItems: this.defaultMenuItems.concat(this.hrMenuItems),
      });
    } else {
      this.setState({
        menuItems: this.defaultMenuItems,
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
                <a className="sidebar-item" href={menuItem.href}>
                  {menuItem.label}
                </a>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Sidebar;
