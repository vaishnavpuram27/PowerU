import User from "./User";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams} from "react-router-dom";
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import logo from '../logo.png'; 
import "./Navbar.css"
import { Button } from "react-bootstrap";

function Navbar(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  var mail = searchParams.get("id");
  console.log(mail)
  return (
    <div className="navbar-container">
      <nav className="navbar justify-content-between">
        <div className="navbar-brand" style={{ height: '3em', marginLeft: "40px" }}>
        
        <img src={logo} alt="logo" />
        <User loggedMail = {mail} />
          
        </div>
        <Link
          to='/cart'
          className='btn-link'
        >
          <div >
        
            <Button variant="outline-light" style={{ alignItems: "center", borderRadius: '30rem',margin: " 0 40px" }} >
              <FontAwesomeIcon style={{padding: '0 1em'}}color="#fff" icon={faCartShopping} />
              Cart
            </Button>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
