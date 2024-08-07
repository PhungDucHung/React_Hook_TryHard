import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <>
          <Navbar expand="lg" className="bg-body-black" >
            <Container>
              <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" >
                      <NavLink to="/" className="nav-link">Home</NavLink>
                      <NavLink to="/users" className="nav-link" >Manage Users</NavLink>
                </Nav>

                  <Nav>
                    <NavDropdown title="Setting" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                      <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>  
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
}

export default Header