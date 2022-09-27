import logo from '../logo.png'; 
import '../Land.css';

function Land() {
  return (
    <div className="Land">
      <header className="Land-header">
        <img src={logo} className="Land-logo" alt="logo" />
        <span >PowerU</span>
      </header>
      <div className='hero'>
        <div className='title'>PowerU</div>
        <div className='subtitle'>Use the PowerU to become powerful - U</div>
        <div className='intro'>Our company aims to be a differentiator in the offshore energy industry. Our energy solutions are viable providing maximum energy for E-vehicles as well as financial incentives for our customers. Today PowerU is one of the leading sustainable energy solutions provider for E-vehicles in the country.</div>
      </div>
    </div>
  );
}

export default Land;
