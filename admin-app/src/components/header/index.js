import React from "react"
import {Nav, Navbar, Container} from "react-bootstrap"
import {NavLink, Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {signout} from "../../actions";
import './style.css'


const Header = (props) => {

    const auth = useSelector( state => state.auth)
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(signout())
    }

    const renderLoggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <span className="nav-link" onClick={logout}>Выйти</span>
                </li>
            </Nav>
        )
    }

    const renderNonLoggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <NavLink to="/signin" className="nav-link">Войти</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/signup" className="nav-link">Регистрация</NavLink>
                </li>
            </Nav>
        )
    }

    return (
        <div>
            <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={{zIndex: 1}}>
                <Container fluid>
                    {/*<Navbar.Brand href="#home">Панель администратора</Navbar.Brand>*/}
                    <Link to="/" className="navbar-brand">Панель администратора</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">*/}
                            {/*  <NavDropdown.Item href="#actions/3.1">Action</NavDropdown.Item>*/}
                            {/*  <NavDropdown.Item href="#actions/3.2">Another actions</NavDropdown.Item>*/}
                            {/*  <NavDropdown.Item href="#actions/3.3">Something</NavDropdown.Item>*/}
                            {/*  <NavDropdown.Divider />*/}
                            {/*  <NavDropdown.Item href="#actions/3.4">Separated link</NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        </Nav>
                        {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
