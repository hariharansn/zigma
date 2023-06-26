import "./NavBar.css";
import {
  MdProductionQuantityLimits,
  MdOutlineMiscellaneousServices
} from "react-icons/md";
import { DiAppstore } from "react-icons/di";
import { FaHandsHelping } from "react-icons/fa";
import { CiLink, CiMenuFries, CiMicrochip } from "react-icons/ci";
import { HiGlobeEuropeAfrica } from "react-icons/hi2";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { BsDatabaseCheck } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";

import { CSSTransition } from "react-transition-group";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";

import React, { useState, useEffect, useRef } from "react";
import Logo from "./icons/logo.png";

function NavBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDropdownOpen) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDropdownOpen]);

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
        <span className="text">Zigma Technologies</span>
      </div>
      <Navbar>
        <NavItem
          icon={<CiMenuFries />}
          isOpen={isDropdownOpen}
          toggleDropdown={() => setDropdownOpen(!isDropdownOpen)}
        >
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const { isOpen, toggleDropdown } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".nav-item")) {
        toggleDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleDropdown]);

  return (
    <li className="nav-item">
      <a className="icon-button" onClick={toggleDropdown}>
        {props.icon}
      </a>

      {isOpen && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<MdOutlineMiscellaneousServices />}
            goToMenu="service"
          >
            Service
          </DropdownItem>
          <DropdownItem
            leftIcon={<MdProductionQuantityLimits />}
            goToMenu="product"
          >
            Products
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "service"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Our Expertise</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<FaHandsHelping />}>
            IT Consulting
          </DropdownItem>
          <DropdownItem leftIcon={<DiAppstore />}>
            Application Management
          </DropdownItem>
          <DropdownItem leftIcon={<BsDatabaseCheck />}>
            Data Management{" "}
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineSecurityScan />}>
            Security Management
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "product"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Our Modules</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<HiOutlineUserGroup />}>CRM</DropdownItem>
          <DropdownItem leftIcon={<HiGlobeEuropeAfrica />}>ERP</DropdownItem>
          <DropdownItem leftIcon={<CiLink />}>Blockchain</DropdownItem>
          <DropdownItem leftIcon={<CiMicrochip />}>Hardware</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default NavBar;
