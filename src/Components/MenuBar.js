import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import img8 from "../Images/Navlogo.png";
import { Link } from "react-router-dom";

function MenuBar() {
  return (
    
      <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <img src={img8} style={{width:"50px",height:"50px",marginLeft:"-100px"}}/>
        <Navbar.Brand href="" style={{marginLeft:"20px"}}>Elite Haven</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/For-Men">For Men</NavDropdown.Item>
              <NavDropdown.Item href="/For-Women">
                For Women
              </NavDropdown.Item>
              <NavDropdown.Item href="/For-Kids">For Kids</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/AdminPage">Admin login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </div>
  );
}

export default MenuBar;
