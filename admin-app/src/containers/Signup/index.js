import React from "react"
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";

const Signup = (props) => {
    return (
        <Layout>
            <Container>
                <Row style={{marginTop: '50px'}}>
                    <Col md={{span: 6, offset: 3}}>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="Имя"
                                        placeholder="Введите имя"
                                        value=""
                                        type="text"
                                        onChange={()=> {}}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label="Фамилия"
                                        placeholder="Введите вашу фамилию"
                                        value=""
                                        type="text"
                                        onChange={()=> {}}
                                    />
                                </Col>
                            </Row>
                            <Input
                                label="Email"
                                placeholder="Введите ваш email"
                                value=""
                                type="text"
                                onChange={()=> {}}
                            />

                            <Input
                                label="Пароль"
                                placeholder="Введите ваш пароль"
                                value=""
                                type="text"
                                onChange={()=> {}}
                            />
                            <Button variant="primary" type="submit">
                                Регистрация
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </Layout>
    )
}

export default Signup
