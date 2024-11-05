import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import './header.css'

function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">FDR 2405</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Post</Nav.Link>
            <Nav.Link href="#link">Service</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header