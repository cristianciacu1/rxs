import React from 'react';
import { Parallax } from 'react-parallax';
import './grid.css';
import { Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { BrowserRouter as Router } from "react-router-dom";

export default class DetailView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          item: {},
          isLoaded: false,
          index: 0,
        }
    }
    
    componentDidMount() {

        const articleID = this.props.location.state.id;
    
        fetch(`http://localhost:8000/api/${articleID}`)
            .then(res => res.json())
            .then(json => {
            this.setState({
                isLoaded: true,
                item: json,
                index: 0,
            })
            });
        console.log(articleID);
    }

    render() {

        return(
            <div className="detailView font">
                <Router>
                    <Parallax bgImage={this.state.item.image} strength={500}>
                        <div className="parallaxHeight2" /> 
                    </Parallax>
                    <div className="padding round">
                        <Container>
                            <h3>{this.state.item.category}</h3>
                            <h1>{this.state.item.title}</h1>
                            <div className="padding">
                                <Row>
                                    <Col sm={12} md={12} lg={9} xl={9}>
                                        <h4>Project overview</h4>
                                        <p>{this.state.item.content}</p>
                                    </Col>
                                    <Col sm={12} md={12} lg={3} xl={3}>
                                        <h4>Tools used</h4>
                                        <p>{this.state.item.tools}</p>
                                    </Col>
                                </Row>
                            </div>
                                <Row className="imageGrid">
                                    <Col sm={12} md={12} lg={6} xl={6}>
                                        <img src={this.state.item.image1} alt="" />
                                    </Col>
                                    <Col sm={12} md={12} lg={6} xl={6}>
                                        <img src={this.state.item.image2} alt=""/>
                                    </Col>
                                    <Col sm={12} md={12} lg={6} xl={6}>
                                        <img src={this.state.item.image3} alt=""/>
                                    </Col>
                                    <Col sm={12} md={12} lg={6} xl={6}>
                                        <img src={this.state.item.image4} alt=""/>
                                    </Col>
                                    <Col sm={12} md={12} lg={6} xl={6}>
                                        <img src={this.state.item.image5} alt=""/>
                                    </Col>
                                    <Col sm={12} md={12} lg={6} xl={6}>
                                        <img src={this.state.item.image6} alt=""/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} md={12} lg={12} xl={12}>
                                        <div className="player-wrapper">
                                            <ReactPlayer
                                                className="react-player" 
                                                url={this.state.item.video} 
                                                playing
                                                width='100%'
                                                height='100%'
                                            />
                                        </div>
                                    </Col>
                                </Row>
                        </Container>
                    </div>
                </Router>
            </div>
        )
    }
}