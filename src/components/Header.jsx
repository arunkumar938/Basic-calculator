import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiTwotoneCalculator } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
       <AiTwotoneCalculator className='fs-1 p-2' />
        <Navbar.Brand href="#home">Basic Calculator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <Link to={'/'} style={{textDecoration:'none',color:'black',marginRight:'20px'}}>Home</Link>
            <Link to={'/calculator'} style={{textDecoration:'none',color:'black'}}>calculate</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header