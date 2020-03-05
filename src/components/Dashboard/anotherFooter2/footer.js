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
                            <li className="list_1">
                               <span className="text_div">Return Policy</span> 
                                </li>
                            <li className="list_1">
                            <span className="text_div">Search our Store</span> 
                            </li>
                            <li className="list_1">
                            <span className="text_div">Blog</span> 
                            </li>
                            <li className="list_1">
                            <span className="text_div">Contact us</span> 
                            </li>
                            <li className="list_1">
                            <span className="text_div">About us</span> 
                            </li>

                        </Col>

                    </div>
                    <Col>
                        <div className="column_2">
                            <div className="pic_div" >
                            <span className="text_div">
                                 <img className="fbImg" src={fb} alt=""/></span>
                                <span class="text_div">FaceBook</span>
                            </div>
                            <div className="pic_div">
                            <span className="text_div">
                                 <img className="fbImg" src={pinterest} alt=""/></span>
                                <span class="text_div">Pinterest</span>
                            </div>
                            <div className="pic_div">
                            <span className="text_div">
                                <img className="fbImg" src={insta} alt=""/></span>
                                <span class="text_div">Instagram</span>
                            </div>
                        </div>
                    </Col>
                    <div className="column_3">
                    <Col>
                    <div className="main_div_column_3">
                         
                    <div className="add">
                    <span class="text_div">
                    © 2020, Brooklyn Theme 
                     Powered by Shopify
                     </span>
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

