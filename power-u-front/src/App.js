import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import LoginSignup from './Pages/LoginPage/LoginSignup';
import Admin from './Pages/AdminPage/Admin';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Provider from './Pages/ProviderPage/Provider';
import Error from './Pages/Error';
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
        <Route path="/admin" exact element={<Admin />} />
        <Route path='/login-signup' exact element={<LoginSignup />} /> 
        <Route path='/provider' exact element={<Provider />} /> 
        <Route path="*" exact element={<Error />} />

      </Routes>
      
      
    </div>
  );
}

export default App;
