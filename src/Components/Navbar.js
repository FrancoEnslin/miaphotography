import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="#home">Mia Schulenberg Photography</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#couples">Couples</NavDropdown.Item>
              <NavDropdown.Item href="#weddings">
                Weddings
              </NavDropdown.Item>
              <NavDropdown.Item href="#family">Family</NavDropdown.Item>
              <NavDropdown.Item href="#portfolioShoot">Portfolio Shoot</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#contact">
                Contact Me
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#faq'>FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;