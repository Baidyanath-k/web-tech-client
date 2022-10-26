import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {Outlet} from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import './Main.css';

const Main = () => {
    return (
        <div>
            
            <div className="main-header">
                <Container>
                    <Row>
                        <Col lg='12'>
                            <Header></Header>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <div className="main-footer">
                <Container>
                    <Row>
                        <Col lg='12'>
                            <Footer></Footer>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Main;