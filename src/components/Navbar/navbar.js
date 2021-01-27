import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarToggle, NavbarContainer, Logo } from "./styled";
import { SidebarData } from "./sidebarData";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import newsName from "../../assets/images/news.png";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <NavbarContainer>
      <IconContext.Provider value={{ color: "#fff" }}>
        <NavbarToggle>
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          <Logo>
            <Link to="/">
              <img src={newsName} />
            </Link>
          </Logo>
        </NavbarToggle>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </NavbarContainer>
  );
}
