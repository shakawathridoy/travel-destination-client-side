import React, { useState } from 'react';
import { ButtonGroup as Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

import './Menubar.css'

const Menubar = () => {

  const {user, logOut} = useAuth();
  
    return (
        <div className="nav-edit">
            <Navbar bg="dark" className="" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand  as={Link} to="/Home"><img width="150px" src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5a0462cf0000ff0005affcce/0x0.png" alt="" /></Navbar.Brand>

    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link className="nav-edit text-warning" as={Link} to="/home">Home</Nav.Link>
      <Nav.Link  className="text-warning"  as={Link} to="/myBookings">My Booking</Nav.Link>
      <Nav.Link  className="text-warning" as={Link} to="/managebooking">Manage Booking</Nav.Link>
      <Nav.Link  className="text-warning" as={Link} to="/addPlace">Add Place</Nav.Link>
      <p className="mt-3 ms-3 text-white">{user.displayName}</p>
      <img src={user.image} alt="" />
      {user?.email ?
        
        <Button onClick={logOut}className="singin-button mt-1 ms-2">Log Out</Button>:
        <Nav.Link as={Link} className="singin-button mt-1 ms-2" to="/login">Login</Nav.Link>}
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Menubar;