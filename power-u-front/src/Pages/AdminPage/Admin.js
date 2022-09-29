import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminPage.css";
import { Tabs, Tab } from "react-bootstrap";
import NewReg from "./NewReg";
import CustomerCards from "./CustomerCards";
import BatteriesInfo from "./BatteriesInfo";
import ProviderCards from "./ProviderCards";
import logo from '../logo.png';
function AdminPage() {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="admin-page">
      <nav className="admin-navbar">
      <img
              alt=""
              src={logo}
              width="50"
              height="50"
              style={{marginTop:"1%", marginRight:"1%",marginLeft:"1%"}}
            />
        <Link
          to="/admin"
          className="admin-navbar-logo"
          onClick={closeMobileMenu}
        >
          PowerU
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"} style={{marginTop:"0%"}}>
          <li className="nav-item">
            <Link to="/admin" className="nav-links" onClick={closeMobileMenu} >
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="customer-details" title="Customer Details">
          <CustomerCards />
        </Tab>
        <Tab eventKey="pro-verify" title="Provider Registration">
          <NewReg />
        </Tab>
        <Tab eventKey="customer-req" title="Batteries Information">
          <BatteriesInfo />
        </Tab>
        <Tab eventKey="pro-req" title="Provider Details">
          {/* <AdminProContact /> */}
          <ProviderCards />
        </Tab>
        <Tab eventKey="customer-trans" title="Transactions">
          {/* <Transactions /> */}
          Transactions
        </Tab>
      </Tabs>
    </div>
  );
}

export default AdminPage;
