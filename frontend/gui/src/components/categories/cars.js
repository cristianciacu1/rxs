import React from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import {MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdbreact';
import Carousel from './carousel';
import GridList from './grid';
import { Button } from 'semantic-ui-react';

export default class PortfolioView extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isClicked: false,
            initialItem: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(hatz) {
        this.setState(state => ({
            isClicked: !state.isClicked,
            initialItem: hatz,
        }));
        console.log(this.state.isClicked);
    }

    render() {

        const isClicked = this.state.isClicked;

        //const items = this.props.location.state.items;

        //console.log(this.props.infos)

        if (isClicked === false) { ///Default view
            return(
                <MDBContainer>
                    <MDBRow>
                        <MDBCol xs={12} sm={12} md={10} lg={10} xl={10} className="md-offset-2">
                            <div className="font3 paddingWNavbar">
                                <h1 className="font3 text-left" style={{fontSize: 48}}>{this.props.infos.name}</h1>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <div className="paddingText3">
                        <Carousel initialItem={this.state.initialItem} items={this.props.infos} index={this.props.index}/>
                    </div>
                    <div className="paddingText3 d-none d-sm-block">
                        <MDBRow className="text-center">
                            <MDBCol xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Button basic circular size="large" onClick={this.handleClick}>
                                <MDBIcon icon="th" style={{paddingRight: 6}}/> Thumbnails
                            </Button>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </MDBContainer>
            )
        }
        else {
            if (isClicked === true) { ///Grid
                return(
                    <div>
                        <MDBContainer>
                        <MDBRow>
                            <MDBCol xs={12} sm={12} md={10} lg={10} xl={10} className="md-offset-2">
                                <div className="font3 paddingWNavbar">
                                    <h1 className="font3 text-left" style={{fontSize: 48}}>{this.props.infos.name}</h1>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <GridList functie={this.handleClick} items={this.props.infos} index={this.props.index}/>
                        <div className="paddingText3 paddingText2 d-none d-sm-block">
                            <MDBRow className="text-center">
                                <MDBCol xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Button basic circular size="large" onClick={this.handleClick}>
                                    <MDBIcon icon="th" style={{paddingRight: 6}}/> Images
                                </Button>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBContainer>
                    </div>
                )
            }
        }

        return(
            <div></div>
        )
    }
}