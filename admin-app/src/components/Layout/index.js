import React from "react"
import Header from "../header"
import {Col, Container, Row} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import './style.css'


const Layout = (props) => {
    return (
        <>
            <Header/>
            {
                props.sidebar ?
                    <Container fluid>
                        <Row>
                            <Col md={2} className="sidebar">
                                <ul>
                                    <li><NavLink exact to={'/'}>Главная</NavLink></li>
                                    <li><NavLink to={'/products'}>Товары</NavLink></li>
                                    <li><NavLink to={'/orders'}>Заказы</NavLink></li>
                                    <li><NavLink to={'/category'}>Категории</NavLink></li>
                                </ul>
                            </Col>
                            <Col md={10} style={{marginLeft: 'auto', paddingTop: '60px'}}>
                                {props.children}
                                <div></div>
                            </Col>
                        </Row>
                    </Container>
                    :
                    props.children
            }
        </>
    )
};

export default Layout

