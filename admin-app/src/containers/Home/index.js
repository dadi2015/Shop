import React, {useEffect} from "react"
import Layout from "../../components/Layout";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import './style.css'
import { NavLink } from "react-router-dom";

const Home = (props) => {


    return (
        <Layout sidebar>
            {// <Jumbotron className="text-center" style={{ background: "#fff"}}>
                //     <h1>Добро пожаловать</h1>
                //     <p>авно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.</p>
                // </Jumbotron>
            }

        </Layout>
    )
}

export default Home
