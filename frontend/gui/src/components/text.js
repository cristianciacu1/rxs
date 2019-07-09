import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';



export default class Text extends React.Component {
    render() {
        return(
            <Element name="text" className="element Page100">
                <div style={{ backgroundColor: "#f5f6fa" }}>
                    <Container style={{ paddingTop: 50, display: "flex", alignItems: "center" }} className = "Page100">
                        <Row>
                            <Col md="6" className = "">
                                <img src="https://dummyimage.com/500x500/000/fff" className = "aboutMe img-fluid" alt=""></img>
                            </Col>
                            <Col md="6" className = "text2">
                                <p className="text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Element>
        );
    }
} 