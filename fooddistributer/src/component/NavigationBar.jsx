import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export function NavigationBar() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Foodies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/dash">
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/buy">
                            <Nav.Link>Buy</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/aboutus">
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/register-customer">
                            <Nav.Link>Register here!</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav className="ms-auto">
                        <Button variant="outline-light">
                            <Link to="/log">Login</Link>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
