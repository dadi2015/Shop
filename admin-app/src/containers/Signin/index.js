import React from "react"
import {Container, Form, Row, Col, Button} from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";

const Signin = (props) => {
    return (
        <Layout>
            <Container>
                <Row style={{marginTop: '50px'}}>
                    <Col md={{ span: 6, offset: 3}}>
                        <Form>
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
                                type="password"
                                onChange={()=> {}}
                            />
                            <Button variant="primary" type="submit">
                                Войти
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </Layout>
    )
}

export default Signin
