import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./footer.css"
import fb from '../anotherFooter2/faceBook.png';
import pinterest from '../anotherFooter2/pinterest.png';
import insta from '../anotherFooter2/instagram.png'


export default class Footer extends React.Component {
    render() {
        return <div className="main_container">
            <Container style={{ maxWidth: " 1362px", paddingLeft: "10%" }}>

                <Row xs="1" sm="3" md="3" lg="3" xl="3">
                    <div className="column_1">
                        <Col >
                            <li className="list_1">Return Policy</li>
                            <li className="list_1">Search our Store</li>
                            <li className="list_1">Blog</li>
                            <li className="list_1">Contact us</li>
                            <li className="list_1">About us</li>

                        </Col>

                    </div>
                    <Col>
                        <div className="column_2">
                            <div className="pic_div" >
                                <img className="fbImg" src={fb} alt=""/>
                                <span class="text_div">FaceBook</span>
                            </div>
                            <div className="pic_div">
                                <img className="fbImg" src={pinterest} alt=""/>
                                <span class="text_div">Pinterest</span>
                            </div>
                            <div className="pic_div">
                                <img className="fbImg" src={insta} alt=""/>
                                <span class="text_div">Instagram</span>
                            </div>
                        </div>
                    </Col>
                    <div className="column_3">
                    <Col>
                    <div className="main_div_column_3">
                    <div className="add">
                    © 2020, Brooklyn Theme 
                     Powered by Shopify
                    </div>
                    <div className="imgs">
                    <img className="fbImg" src={pinterest} alt=""/>
                    <img className="fbImg" src={pinterest} alt=""/>
                    <img className="fbImg" src={pinterest} alt=""/>
                    <img className="fbImg" src={pinterest} alt=""/>
                    <img className="fbImg" src={pinterest} alt=""/>
                    <img className="fbImg" src={pinterest} alt=""/>
                    </div>
                    </div>
                    </Col>
                    </div>
                </Row>


            </Container>
        </div>
    }
}

