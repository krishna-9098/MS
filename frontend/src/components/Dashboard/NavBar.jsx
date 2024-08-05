import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false); // state for nav bar open close in responsive
  const [dropdownOpen, setDropdownOpen] = useState({}); // state for Dropdown open close

  const toggleMenu = () => {
    // this function for responsive menu open close
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen((prevState) => ({
      // this function for dropdown
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // List of navigation items with dropdown sub-items
  const navItems = [
    { title: "User", path: "/Users", dropdown: [] },
    { title: "AOK", path: "#", dropdown: [{ title: "Sub Item 1", path: "#" }, { title: "Sub Item 2", path: "#" }] },
    { title: "Admin Users", path: "/admin", dropdown: [] },
    { title: "B2B", path: "#", dropdown: [{ title: "Sub Item 1", path: "#" }, { title: "Sub Item 2", path: "#" }] },
    { title: "Core Data", path: "#", dropdown: [{ title: "Sub Item 1", path: "#" }, { title: "Sub Item 2", path: "#" }] },
    { title: "Feedbacks", path: "#", dropdown: [{ title: "Sub Item 1", path: "#" }, { title: "Sub Item 2", path: "/#" }] },
    { title: "Mood Processor", path: "#", dropdown: [{ title: "Sub Item 1", path: "#" }, { title: "Sub Item 2", path: "#" }] },
    { title: "Notification", path: "#", dropdown: [{ title: "Sub Item 1", path: "#" }, { title: "Sub Item 2", path: "#" }] },
    { title: "Onboarding", path: "#", dropdown: [{ title: "Sub Item 1", path: "#" }, { title: "Sub Item 2", path: "#" }] },
    { title: "Payments", path: "#", dropdown: [{ title: "Sub Item 1", path: "#" }, { title: "Sub Item 2", path: "#" }] },
    { title: "Settings", path: "#", dropdown: [{ title: "Sub Item 1", path: "#" }, { title: "Sub Item 2", path: "#" }] },
    { title: "Stats & Analytics", path: "#", dropdown: [{ title: "Sub Item 1", path: "#" }, { title: "Sub Item 2", path: "#" }] },
    { title: "Tags", path: "#", dropdown: [{ title: "Sub Item 1", path: "#" }, { title: "Sub Item 2", path: "#" }] },
    { title: "Users", path: "#", dropdown: [{ title: "Sub Item 1", path: "#" }, { title: "Sub Item 2", path: "#" }] },
  ];

  return (
    <>
      <div className="NmainContainer">
        <div className="Nmain">
          {/* onClick for nav bar responsive design  */}
          <div className="logoContainer" onClick={toggleMenu}>
            <h6 className="logoText">Mindshine</h6>
            {/* font awesome use for icon  */}
            <FontAwesomeIcon icon={faBars} className="hamburgerIcon" />
          </div>
          <ul className={menuOpen ? "active" : ""}>
            {navItems.map((item, index) => (
              <li key={index} onClick={() => toggleDropdown(index)}>
                <div className="navItemWithIcon">
                  <Link to={item.path} className="NavItems">
                    {item.title}
                  </Link>
                  {item.dropdown.length > 0 && (
                    <FontAwesomeIcon icon={faCaretDown} className="dropdownIcon" />
                  )}
                </div>
                {dropdownOpen[index] && item.dropdown.length > 0 && (
                  <ul className="dropdownMenu">
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link to={subItem.path} className="NavItems">
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="rightNav">
            <Link to="#" className="rightNavItems" style={{ marginLeft: "0%" }}>
              Admin@AveryBit.com
            </Link>
            <Link
              to="/"
              className="rightNavItems"
              style={{ marginLeft: "25%" }}
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

