import React from 'react';
// import { NavLink, Link } from 'react-router-dom';
import Register from '../Auth/Register';
import Login from "../Auth/Login";

import {Nav, NavDropdown, Navbar} from 'react-bootstrap';

import './Navy.css'

const Navy = (props) => {
  return (
    
    <header>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">ArcSales</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/car">Car</Nav.Link>
          <li className="nav-item login-button">
              {!props.currentUser && <Login currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} />}
          </li>
          <li className="nav-item" id="register-button12">
              {!props.currentUser && <Register />}
          </li>
          <li className="nav-item">
                {props.currentUser &&  <button className="btn btn-warning" onClick={() => props.logout() }>Logout</button>}
          </li>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </header>
    
  )
};

export default Navy;




// <nav classNameName="navbar navbar-expand-md navbar-dark navbar-color">
//       <div className="container">
//         <Link className="navbar-brand title-color nav1" to="/"></Link>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse nav2" id="navbarsExample04">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <NavLink className="nav-link title-color nav1" exact to="/splash">Home</NavLink>
//             </li>
//             <li className="nav-item login-button">
//               {!props.currentUser && <Login currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} />}
//             </li>
//             <li className="nav-item" id="register-button12">
//               {!props.currentUser && <Register />}
//             </li>
//             <li className="nav-item">
//               {props.currentUser && <NavLink className="nav-link title-color nav1"  exact to="/profile">Profile</NavLink>}
//             </li>
//             <li className="nav-item">
//               {props.currentUser &&  <button className="btn btn-warning" onClick={() => props.logout() }>Logout</button>}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>





