import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminPage.css';
import {Tabs,Tab} from 'react-bootstrap'


function AdminPage() {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <div className='admin-page'>
      <nav className='admin-navbar'>
        <Link to='/admin' className='admin-navbar-logo' onClick={closeMobileMenu}>
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
          hello
        </Tab>
        <Tab eventKey="pro-verify" title="Professional Verification">
        {/* <AdminPro /> */}
        hellofsd
        </Tab>
        <Tab eventKey="customer-req" title="Customer Requests" >
        {/* <AdminContact /> */}
        Customer
        </Tab>
        <Tab eventKey="pro-req" title="Professional Requests">
        {/* <AdminProContact /> */}
        provider
        </Tab>
        <Tab eventKey="customer-trans" title="Transactions" >
        {/* <Transactions /> */}
        Transactions
        </Tab>
      </Tabs>
    </div>
  );
}

export default AdminPage;