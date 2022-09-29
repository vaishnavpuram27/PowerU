import logo from './logo.png';
import './Landing.css';
import{Link} from 'react-router-dom';
import { NavItem } from 'react-bootstrap';
import NavbarAC from './NavbarAC';
function Land() {
  return (
    <div className="Land">

{/* <header className="Land-header" style={{backgroundColor:"#a2d2ff"}}>
        <img src={logo} className="Land-logo" alt="logo"/>
        <span style={{color:"black"}}>PowerU</span>
      </header> */}
      <NavbarAC></NavbarAC>
      <div className='hero'>
        <div className='title'>PowerU</div>
        <div className='subtitle'>Powering batteries of tomorrow</div>
        <div className='intro'><p className='start'><i>Our company <b>PowerU</b> aims to be a differentiator in the offshore energy industry. Our energy solutions are viable providing maximum energy for E-vehicles as well as financial incentives for our customers. Today PowerU is one of the leading sustainable energy solutions provider for E-vehicles in the country.</i></p></div>
      </div>
      <div className='buttonInIntro'>
      <Link
              to='/login-signup'
              className='btn-link'
              
            >
      <button type="button" class="btn btn-primary">Let's begin</button>
      </Link>
      </div>
    </div>
  );
}

export default Land;