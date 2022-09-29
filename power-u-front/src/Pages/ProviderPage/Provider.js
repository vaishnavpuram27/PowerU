import React, { useState } from 'react';
import { Link,useSearchParams } from 'react-router-dom';
import './ProviderPage.css';
import {Tabs,Tab} from 'react-bootstrap'
import logo from '../logo.png';
import AddBattery from './AddBattery';
import BatteriesInfoPro from './BatteriesInfoPro';


function Provider() {
  const [click, setClick] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  var mail = searchParams.get("id");
  console.log(mail)
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <div className='provider-page'>
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
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="customer-details" title=" Add Battery">
          {/* <AdminCus /> */}
          <AddBattery loggedMail= {mail} />
        </Tab>
        <Tab eventKey="pro-verify" title="Batteries Information">
        {/* <AdminPro /> */}
        <BatteriesInfoPro loggedMail= {mail}/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Provider;