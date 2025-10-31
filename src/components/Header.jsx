import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiTwotoneCalculator } from "react-icons/ai";

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
            <Nav.Link href="./calculator">calculator</Nav.Link>
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header