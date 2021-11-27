import logo from './logo.svg';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './Main.css';
import Register from "./Register"
import TravelRequest from './TravelRequest';
import TravelList from './TravelList';
import RequestDetails from './RequestDetails';
import EmployeeRegistration from './EmployeeRegistration';
import Home from './Home';
function App() {
  return (<div id="ui">
    <h1>Brand Name</h1>
    <MyRouter />
    <br /><br /><br /><br />
    <p>Copyright 2021 - All rights Reserved</p>
  </div>);
}
function MyRouter() {
  var div = {
    display: "inline",
    padding: '10px',
    marginleft: '30px'
  }
  return (
    <Router>
      <div id="nav">
      <div id="link" style={div}><Link style={{ textDecoration: "none", color: 'black' }} to="/home">Home</Link></div>
        {!localStorage.getItem('mytoken') && <div id="link" style={div}><Link  style={{ textDecoration: "none", color: 'black' }} to="/login">Login</Link></div>}
        {localStorage.getItem('mytoken') && <div id="link" style={div}><Link style={{ textDecoration: "none", color: 'black' }} onClick={() =>window.location='/login'} to="/login">Logout</Link></div>}
        <div id="link" style={div}><Link style={{ textDecoration: "none", color: 'black' }} to="/register">Register</Link></div>
        <div id="link" style={div}><Link style={{ textDecoration: "none", color: 'black' }} to="/travelrequest">Request</Link></div>
        <div id="link" style={div}><Link style={{ textDecoration: "none", color: 'black' }} to="/travellist">Travel List</Link></div>
        <div id="link" style={div}><Link style={{ textDecoration: "none", color: 'black' }} to="/employeeregistration">Employee Registration</Link></div>
        
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/travelrequest" element={<TravelRequest />} />
        <Route path="/travellist" element={<TravelList />} />
        <Route path="/requestdetails/:id" element={<RequestDetails />} />
        <Route path="/employeeregistration" element={<EmployeeRegistration />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </Router>
  );
}

export default App;
