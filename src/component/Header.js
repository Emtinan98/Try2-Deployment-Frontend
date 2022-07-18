import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Container,Form,Nav,Navbar,NavDropdown,Carousel,Col,Row} from 'react-bootstrap';


function Header() {
    const handleClick = ()=>{
        localStorage.clear();
        window.location.reload();
      }
  return (
    <div className='header1'>
  

        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Study Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cre">Create account</Nav.Link>
            <Nav.Link href="/getcre">List Student</Nav.Link>
            <Nav.Link href="/auth">Login</Nav.Link>
            <button onClick={handleClick}> Logout </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header