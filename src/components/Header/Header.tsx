import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import AllContainer from '../Container/allContainer';
import Button from '../CustomButton/ButtonContext';
import { createContext, useState } from 'react';
import "./Header.css"


export const ThemeContext = createContext("light");

  

export function Header() {

  const [theme, setTheme] = useState("light");

  return (
    <>
   <Navbar className='b' expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/home">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/prodotti">
          Prodotti
        </Nav.Link>
        <Nav.Link as={Link} to="/carrello">
          Carrello
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
}
