import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import LoginSignup from './Pages/LoginPage/LoginSignup';
import Admin from './Pages/AdminPage/Admin';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Provider from './Pages/ProviderPage/Provider';
import Error from './Pages/Error';
import GetUsers from './Pages/GetUsers';
import Form from './Pages/Form';
import Landing from './Pages/Landing';
import Home from './Pages/Customer/Home';
import Information from './Pages/Customer/Information';
import Cart from './Pages/AddToCart/Cart';
import Profile from './Pages/Customer/Profile';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Routes>
        <Route path='/'exact element={<Landing/>}/>
        <Route path='/form'exact element={<Form/>}/>

        <Route path="/admin" exact element={<Admin />} />
        <Route path="/home" exact element={<Home/>}/>
        <Route path='/login-signup' exact element={<LoginSignup />} /> 
        <Route path='/provider' exact element={<Provider />} /> 
        <Route path='/information' exact element={<Information />} /> 
        <Route path='/profile' exact element={<Profile />} /> 
        <Route path='/cart' exact element={<Cart />} /> 
        <Route path="*" exact element={<Error />} />
        
      </Routes>
      
      
    </div>
  );
}

export default App;
