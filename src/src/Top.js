import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { ColorCode } from './Constants';

/**
 * Display the "NavBar" at the top of the page.
 */
function Top() {
  const navbarStyle = { backgroundColor: ColorCode.darkBlue, color: ColorCode.background, fontWeight: 'bold' };
  return (
    <div>
      <Navbar style={navbarStyle}>
        <Container className="justify-content-center">
          <Nav>
            <Nav.Item><Nav.Link href="#workExperience" style={navbarStyle}>Research Experience</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#education" style={navbarStyle}>Education</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#papers" style={navbarStyle}>Papers</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#conferences" style={navbarStyle}>Conferences and Seminars</Nav.Link></Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Top;
