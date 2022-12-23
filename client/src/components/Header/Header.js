/* eslint-disable react/jsx-no-undef */
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, } from 'react-router-dom';

// import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
function NavScrollExample() {
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
            <Navbar.Brand>
                <Link to='/'>
                    Questionnaire
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex m-auto">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>
                <Nav
                    className="m-end my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href='/mynotes'>
                        <Link to='/mynotes'>
                            Create New Notes
                        </Link>
                    </Nav.Link>
                    <NavDropdown title="LogIn" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={"logoutHandler"}>
                            Log out
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavScrollExample;