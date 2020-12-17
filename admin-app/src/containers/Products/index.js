import React, {useState} from "react"
import Layout from "../../components/Layout"
import {Container, Row, Col, Modal, Button} from "react-bootstrap"

import Input from "../../components/UI/Input"
import {addCategory} from "../../actions"
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../../actions/product.action";

const Products = () => {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [productPictures, setProductPictures] = useState([])
    const [categoryId, setCategoryId] = useState('')
    const [show, setShow] = useState(false)
    const category = useSelector(state => state.category)
    const dispatch = useDispatch()


    const handleClose = () => {
        const form = new FormData()
        form.append("name", name)
        form.append("quantity", quantity)
        form.append("price", price)
        form.append("description", description)
        form.append("category", categoryId)
        for (let pic of productPictures) {
            form.append("productPicture", pic)
        }

        dispatch(addProduct(form))

        setShow(false)
    }
    const handleShow = () => setShow(true)

    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({value: category._id, name: category.name})
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }
        return options
    }

    const handleProductPicture = (e) => {
        setProductPictures([
            ...productPictures,
            e.target.files[0]
        ])
    }

    console.log(productPictures)

    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h3>Товары</h3>
                            <button onClick={handleShow}>Добавить</button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить новый товар</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        label="Название"
                        value={name}
                        placeholder={`Имя товара`}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input
                        label="Количество"
                        value={quantity}
                        placeholder={`Значение`}
                        onChange={(e) => setQuantity(e.target.value)}
                    />

                    <Input
                        label="Цена"
                        value={price}
                        placeholder={`Значение`}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <Input
                        label="Описание"
                        value={description}
                        placeholder={`Значение`}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <select
                        className="form-control"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                    >
                        <option>Выберите категорию</option>
                        {
                            createCategoryList(category.categories).map(option =>
                                <option key={option.value} value={option.value}>{option.name}</option>)
                        }
                    </select>
                    {
                        productPictures.length > 0 ?
                            productPictures.map((pic, index) => <div key={index}>{pic.name}</div>) : null
                    }
                    <input type='file' name="Изображение товара" onChange={handleProductPicture}/>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Layout>
    )
}

export default Products