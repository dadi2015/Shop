import React from "react"
import {Nav, Navbar, Container} from "react-bootstrap"
import {NavLink, Link} from "react-router-dom"


const Header = (props) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    {/*<Navbar.Brand href="#home">Панель администратора</Navbar.Brand>*/}
                    <Link to="/" className="navbar-brand">Панель администратора</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">*/}
                            {/*  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                            {/*  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                            {/*  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                            {/*  <NavDropdown.Divider />*/}
                            {/*  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        </Nav>
                        <Nav>
                            {/*<Nav.Link href="#deets">Войти</Nav.Link>*/}
                            {/*<Nav.Link href="#deets">Регистрация</Nav.Link>*/}
                            <li className="nav-item">
                                <NavLink to="/signin" className="nav-link">Войти</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/signup" className="nav-link">Регистрация</NavLink>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
