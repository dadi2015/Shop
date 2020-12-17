import React, {useState} from "react"
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signup} from "../../actions";

const Signup = (props) => {

    const [ firstName, setFirstName] = useState("")
    const [ lastName, setLastName] = useState("")
    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")
    const [ error, setError] = useState("")
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)

    const userSignup = (e) => {
        e.preventDefault()
        const user = {firstName, lastName, email, password}
        dispatch(signup(user))
    }

    if (auth.authenticate) {
        return <Redirect to={'/'}/>
    }

    if (user.loading) {
        return <p>Loading ....!</p>
    }

    return (
        <Layout>
            <Container>
                { user.message }
                <Row style={{marginTop: '50px'}}>
                    <Col md={{span: 6, offset: 3}}>
                        <Form onSubmit={ userSignup }>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="Имя"
                                        placeholder="Введите имя"
                                        value= { firstName }
                                        type="text"
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label="Фамилия"
                                        placeholder="Введите вашу фамилию"
                                        value={ lastName }
                                        type="text"
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Input
                                label="Email"
                                placeholder="Введите ваш email"
                                value={ email }
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                label="Пароль"
                                placeholder="Введите ваш пароль"
                                value={ password }
                                type="text"
                                onChange={(e) => setPassword(e.target.value)}
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
