import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProviderPage.css';
import {Tabs,Tab} from 'react-bootstrap'


function Provider() {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <div className='provider-page'>
      <nav className='provider-navbar'>
        <Link to='/provider' className='provider-navbar-logo' onClick={closeMobileMenu}>
          PowerU
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
          <li className='nav-item'>
            <Link
              to='/admin'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Log Out
            </Link>
          </li>

        </ul>

      </nav>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="customer-details" title="Customer Details">
          {/* <AdminCus /> */}
          hello pro
        </Tab>
        <Tab eventKey="pro-verify" title="Professional Verification">
        {/* <AdminPro /> */}
        hellofsd pro
        </Tab>
        <Tab eventKey="customer-req" title="Customer Requests" >
        {/* <AdminContact /> */}
        Customer pro
        </Tab>
        <Tab eventKey="pro-req" title="Professional Requests">
        {/* <AdminProContact /> */}
        provider pro
        </Tab>
        <Tab eventKey="customer-trans" title="Transactions" >
        {/* <Transactions /> */}
        Transactions pro
        </Tab>
      </Tabs>
    </div>
  );
}

export default Provider;